import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-linear-to-r from-cyan-100 to-gray-100 py-16 px-4 sm:px-8 lg:px-20">
      
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-800">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-600 text-sm sm:text-lg">
          Need help? Get in touch with us anytime.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-800">
            We’re here to help you
          </h2>

          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            Whether you are looking for trusted helpers or want to join
            HelperHub as a professional, our support team is always ready
            to assist you.
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-4">
            <p className="flex items-center gap-3 text-gray-700">
              📞 <span className="font-medium">+91 98765 43210</span>
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              📧 <span className="font-medium">support@helperhub.in</span>
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              📍 <span className="font-medium">Gurugram & Noida</span>
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <form className="space-y-5">

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Service Required
              </label>
              <select className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>Select a service</option>
                <option>Electrician</option>
                <option>Plumber</option>
                <option>Nurse</option>
                <option>Babysitter</option>
                <option>House Cleaner</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Describe your requirement"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-3 rounded-md font-semibold hover:bg-cyan-700 transition"
            >
              Submit Request
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
