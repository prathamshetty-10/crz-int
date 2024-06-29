import React, { useState } from 'react';
import usericon from '../assets/usericon.svg';

const Login = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [errors, setErrors] = useState({});

    const handleOTP = async () => {
        if (!name || !mobile) {
            setErrors({
                name: !name ? 'Name is required' : '',
                mobile: !mobile ? 'Mobile number is required' : ''
            });
            return;
        }

        try {
            const response = await fetch('/api/user/getotp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, mobile })
            });

            if (!response.ok) {
                throw new Error('Failed to send OTP');
            }

            setOtpSent(true);
            setErrors({});
            console.log('OTP sent successfully');
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!otp) {
            setErrors({
                otp: 'OTP is required'
            });
            return;
        }

        try {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, mobile, otp })
            });

            if (!response.ok) {
                throw new Error('Failed to log in');
            }
            const { token } = response.cookie;
            localStorage.setItem('token', token);

            console.log('Logged in successfully');
        } catch (error) {
            console.error('Error logging in:', error);
            setErrors({
                otp: 'Invalid OTP'
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center sm:m-5">
            <div className="lg:bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <img src={usericon} alt="user" className='w-fit ml-auto mr-auto h-[6rem]' />
                <h2 className='text-lg font-bold mb-6 text-gray-800'>An OTP will be sent for Sign In</h2>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className={`w-full px-4 py-2 border bg-gray-200 rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-600 focus:ring-red-600' : 'focus:ring-blue-600'}`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your Name"
                            required
                        />
                        {errors.name && <p className="text-red-600 mt-2">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-black mb-2" htmlFor="mobile">Mobile No.</label>
                        <div className='flex'>
                            <input
                                type="text"
                                id="mobile"
                                className={`w-full px-4 py-2 border bg-gray-200 rounded-lg focus:outline-none focus:ring-2 ${errors.mobile ? 'border-red-600 focus:ring-red-600' : 'focus:ring-blue-600'}`}
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                placeholder="Enter your Mobile Number"
                                required
                            />
                            <button
                                type="button"
                                className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap ml-2'
                                onClick={handleOTP}
                            >
                                Send OTP
                            </button>
                        </div>
                        {errors.mobile && <p className="text-red-600 mt-2">{errors.mobile}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="otp">Enter OTP</label>
                        <input
                            type="text"
                            id="otp"
                            className={`w-full px-4 py-2 border bg-gray-200 rounded-lg focus:outline-none focus:ring-2 ${errors.otp ? 'border-red-600 focus:ring-red-600' : 'focus:ring-blue-600'}`}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                            required
                            disabled={!otpSent}
                        />
                        {errors.otp && <p className="text-red-600 mt-2">{errors.otp}</p>}
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            disabled={!otpSent || !otp}
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            className="text-blue-600 hover:underline"
                            onClick={handleOTP}
                        >
                            Resend Code?
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
