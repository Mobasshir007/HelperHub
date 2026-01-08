import React from "react";

const steps = [
  {
    id: 1,
    title: "Choose a Service",
    desc: "Select the service you need from our wide range of trusted helpers.",
    icon: "🛠️",
  },
  {
    id: 2,
    title: "Select a Helper",
    desc: "Compare verified helpers based on ratings, experience, and pricing.",
    icon: "👤",
  },
  {
    id: 3,
    title: "Book & Relax",
    desc: "Confirm your booking and get the job done at your doorstep.",
    icon: "✅",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-20 bg-linear-to-r from-cyan-100 to-zinc-300 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-amber-700">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Hiring a helper is simple, fast, and reliable with HelperHub.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl 
                         transition-all duration-300 border border-transparent 
                         hover:border-cyan-400"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="text-sm text-gray-400 mb-1">
                Step {step.id}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-700 font-medium">
          <span>✔ Verified Helpers</span>
          <span>✔ Transparent Pricing</span>
          <span>✔ Safe & Reliable Services</span>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
