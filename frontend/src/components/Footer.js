import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <hr className="border-red-500 w-1/4 mb-2"/>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">About CRZ</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Important Docs</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Social Media</h2>
            <hr className="border-red-500 w-1/4 mb-2"/>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Facebook</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Instagram</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Twitter</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Help-Line Number</h2>
            <hr className="border-red-500 w-1/4 mb-2"/>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">CRZ-Telephone</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">DC-Office-Telephone</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>Developed by Students, MIT, Manipal</p>
        </div>
      </div>
    </footer>
  );
}
