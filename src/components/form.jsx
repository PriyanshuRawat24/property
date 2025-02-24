"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="relative bg-gray-900 text-white py-16 px-4 md:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/bg-1.jpg')",
            width: "700",
            height: "700",
          }}
        ></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-gray-900 w-full h-[600px] max-w-md relative top-16">
            <h2 className="text-3xl font-bold mb-4">CONTACT WITH US</h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing.
            </p>
            <div className="space-y-4">
              <div className="flex items-center border rounded-lg p-3">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border rounded-lg p-3">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border rounded-lg p-3">
                <FaPhone className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full outline-none"
                />
              </div>
              <textarea
                name="message"
                placeholder="Type Here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 h-40 outline-none"
              />
              <button className="bg-red-600 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg">
                Submit
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <p className="text-red-500 text-sm font-bold">// CONTACT WITH US</p>
            <h2 className="text-5xl font-bold leading-tight mt-2">
              REACH OUT TO US
              <br />
              VIA CONTACT DETAILS
            </h2>
            <p className="mt-3 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              <br />
              mi. Aliquam in hendrerit urna. Pellente
            </p>
            <div className="mt-6 space-x-6">
              <div className="flex items-center justify-center bg-red-600 text-white rounded-full h-12 w-12 text-xl font-bold ml-6">
                01
              </div>
              <div>
                <h3 className="text-lg font-bold items-start mt-3">
                  Client Centric Approach
                </h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut.
                </p>
              </div>
            </div>
            <div className="mt-6 space-x-6">
              <div className="flex items-center justify-center bg-red-600 text-white rounded-full h-12 w-12 text-xl font-bold ml-6">
                02
              </div>
              <div>
                <h3 className="text-lg font-bold items-start mt-3">
                  Integrity & Transparency
                </h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
