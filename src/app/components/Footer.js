"use client";

import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: '',
    budget: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.company) newErrors.company = "Company is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.services) newErrors.services = "Service selection is required.";
    if (!formData.budget) newErrors.budget = "Budget is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Example API call to Brevo (Sendinblue) can go here
    // If successful:
    setSuccessMessage("Form submitted successfully!");
    setErrorMessage("");
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      services: '',
      budget: '',
      message: '',
    });
  };

  return (
    <footer id="contact" className="bg-black mt-32 px-4 sm:px-0 lg:px-0 text-white">
      <div className="flex mx-auto w-full container px-4 sm:px-6 lg:px-8">
        {/* Left Column - Text */}
        <div className="w-1/2 flex flex-col justify-center p-12 pr-12">
          <h2 className="text-xl mb-2">Grow Your Business with Us!</h2>
          <h1 className="text-5xl font-bold mb-4">Let's Collaborate!</h1>
          <p className="text-gray-400">
            Our unique process will help you define your ideal customer and goals,
            so we know who to target with your website and online marketing.
          </p>
        </div>

        {/* Right Column - Form */}
        <div className="w-1/2 bg-zinc-900 p-12 text-gray-500">
          {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
          {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Row 1 - Name and Company */}
            <div className="flex gap-4">
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500"
                />
                {errors.name && (
                  <span className=" text-red-500 text-sm">{errors.name}</span>
                )}
              </div>
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1" htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500"
                />
                {errors.company && (
                  <span className=" text-red-500 text-sm">{errors.company}</span>
                )}
              </div>
            </div>

            {/* Row 2 - Email and Phone */}
            <div className="flex gap-4">
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500"
                />
                {errors.email && (
                  <span className=" text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500"
                />
                {errors.phone && (
                  <span className=" text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>
            </div>

            {/* Row 3 - Services and Budget */}
            <div className="flex gap-4">
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1" htmlFor="services">Services</label>
                <select
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  className="p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500"
                >
                  <option value="Branding & Design">Branding & Design</option>
                  <option value="Web Design">Web Design</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Google Ads Management">Google Ads Management</option>
                  <option value="Email Marketing">Email Marketing</option>
                  <option value="Full-Suite Marketing">Full-Suite Marketing</option>
                </select>
                {errors.services && (
                  <span className=" text-red-500 text-sm">{errors.services}</span>
                )}
              </div>
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1" htmlFor="budget">Budget</label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="Budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500"
                />
                {errors.budget && (
                  <span className=" text-red-500 text-sm">{errors.budget}</span>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label className="text-sm mb-1" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Details of services you require...."
                value={formData.message}
                onChange={handleChange}
                className="p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 h-24"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
