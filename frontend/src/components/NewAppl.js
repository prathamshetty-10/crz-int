import React, { useState } from 'react';

export default function NewAppl() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    surveyNo: '',
    taluk: '',
    village: '',
    type: '',
    uploadForm: null,
    uploadRTC: null,
    uploadSurveySketch: null,
    challan: null,
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name of Applicant/Proponent is required';
    if (!formData.email) errors.email = 'Email id is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.surveyNo) errors.surveyNo = 'Survey No. is required';
    if (!formData.taluk) errors.taluk = 'Taluk is required';
    if (!formData.village) errors.village = 'Village is required';
    if (!formData.type) errors.type = 'Type is required';
    if (!formData.uploadForm) errors.uploadForm = 'Upload form - 1 is required';
    if (!formData.uploadRTC) errors.uploadRTC = 'Upload RTC is required';
    if (!formData.uploadSurveySketch) errors.uploadSurveySketch = 'Upload survey sketch is required';
    if (!formData.challan) errors.challan = 'Challan for Rs.200/- is required';
    if (!formData.agree) errors.agree = 'You must agree that the documents are true to the best of your knowledge and belief';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // form submission logic
      console.log('Form submitted', formData);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-blue-50 p-8 shadow-lg lg:w-2/5 w-[90%]">
        <h1 className="text-xl mb-6 text-center">New Application</h1>
        <form onSubmit={handleSubmit} className=''>
          <div className="mb-4">
            <label className="block mb-2">Name of Applicant/Proponent</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Email id</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className={`w-full p-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Survey No.</label>
            <input
              type="text"
              name="surveyNo"
              value={formData.surveyNo}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.surveyNo ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.surveyNo && <p className="text-red-500 text-sm">{errors.surveyNo}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Taluk</label>
            <select
              name="taluk"
              value={formData.taluk}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.taluk ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select Taluk</option>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
            </select>
            {errors.taluk && <p className="text-red-500 text-sm">{errors.taluk}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Village</label>
            <select
              name="village"
              value={formData.village}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.village ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select Village</option>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
            </select>
            {errors.village && <p className="text-red-500 text-sm">{errors.village}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select Type</option>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
            </select>
            {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Upload form - 1</label>
            <input
              type="file"
              name="uploadForm"
              onChange={handleChange}
              className={`w-full p-2 border ${errors.uploadForm ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.uploadForm && <p className="text-red-500 text-sm">{errors.uploadForm}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Upload RTC</label>
            <input
              type="file"
              name="uploadRTC"
              onChange={handleChange}
              className={`w-full p-2 border ${errors.uploadRTC ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.uploadRTC && <p className="text-red-500 text-sm">{errors.uploadRTC}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Upload survey sketch</label>
            <input
              type="file"
              name="uploadSurveySketch"
              onChange={handleChange}
              className={`w-full p-2 border ${errors.uploadSurveySketch ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.uploadSurveySketch && <p className="text-red-500 text-sm">{errors.uploadSurveySketch}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Challan for Rs.200/-</label>
            <input
              type="file"
              name="challan"
              onChange={handleChange}
              className={`w-full p-2 border ${errors.challan ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.challan && <p className="text-red-500 text-sm">{errors.challan}</p>}
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className={`mr-2 ${errors.agree ? 'border-red-500' : 'border-gray-300'}`}
              />
              Documents submitted herein are true to the best of my knowledge and belief
            </label>
            {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
