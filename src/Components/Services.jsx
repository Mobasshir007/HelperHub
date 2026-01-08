import { Link } from "react-router-dom";


const OurServices = [
  {
    id: 1,
    title: "Electrician",
    desc: "Professional electricians for all household electrical needs.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    position: "left",
  },
  {
    id: 2,
    title: "Plumber",
    desc: "Reliable plumbers for fittings, leakage and repair services.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    position: "right",
  },
  {
    id: 3,
    title: "Nurse",
    desc: "Certified home nurses for elderly care and medical support.",
    image: "https://imgs.search.brave.com/sROEl2so5oK_PKI-dBpdq9aOJ4_H7FrwTjMcGZz0V9k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zZW5p/b3ItbnVyc2UtMjg4/ODUyNzQuanBn",
    position: "left",
  },
];


const Services = () => {
  return (
     <section className="w-full py-20 bg-linear-to-r from-cyan-100 to-zinc-300 shadow-2xl">
        <div className="text-center mb-14" >
          <h1 className="text-5xl font-bold text-amber-700"> Our Services</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-10">
          {OurServices.map((item) => (
            <div
              key={item.id}
              className={`col-span-2 ${
                item.position === "left" ? "md:col-start-1" : "md:col-start-2"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-lg shadow-sm">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-1/2 h-64 object-cover rounded-md"
                />

                {/* Content */}
                <div>
                  <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                <Link to="/services/our-workers">  <button className="px-5 py-2 bg-blue-600 text-white rounded-md">
                    View Helpers
                  </button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Services
