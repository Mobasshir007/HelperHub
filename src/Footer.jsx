import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">
            Helper<span className="text-amber-600">Hub</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            HelperHub connects households with trusted local professionals
            for everyday services. Simple, reliable, and transparent.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Electrician</li>
            <li>Plumber</li>
            <li>Nurse</li>
            <li>Labour</li>
            <li>Car Washer</li>
            <li>Painter</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>How It Works</li>
            <li>Become a Helper</li>
            <li>Why Choose Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Gurugram, Noida</li>
            <li>📧 support@helperhub.com</li>
            <li>📞 +91 9XXXXXXXXX</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} HelperHub. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
