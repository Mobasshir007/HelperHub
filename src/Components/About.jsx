import React from "react";

const About = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Helper</span>
            <span className="text-amber-600">Hub</span>
          </h2>

          <p className="text-gray-600 text-lg mb-4">
            HelperHub is a service-hiring platform built to simplify everyday
            needs by connecting people with trusted local professionals.
          </p>

          <p className="text-gray-600 mb-6">
            From electricians and plumbers to nurses, painters, and labourers,
            we bring reliable helpers onto one platform — making hiring fast,
            transparent, and stress-free.
          </p>

          <div className="space-y-3 text-gray-700 font-medium">
            <p>✔ Trusted & verified local helpers</p>
            <p>✔ Simple booking with clear pricing</p>
            <p>✔ Designed for homes and everyday needs</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-gradient-to-br from-cyan-50 to-slate-100 p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 mb-6">
            To make hiring skilled helpers simple, safe, and accessible while
            creating meaningful work opportunities for local professionals.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To become a trusted household name for reliable local services
            across cities.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
