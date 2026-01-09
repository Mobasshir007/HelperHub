import maid from "../assets/maid2.jpg";
import carpenter from "../assets/carpenter.jpg";
import babysitter from "../assets/babysitter.jpg";
import babysitter2 from "../assets/babysitter2.jpg";
import electrician2 from "../assets/electrician.jpg";
import painter2 from "../assets/painter2.jpg";
import painter from "../assets/painter.jpg";
import nurse from "../assets/nurse.jpg";
import mechanic from "../assets/Mechanic.jpg";
import maid2 from "../assets/maid2.jpg";
import { Link } from "react-router-dom";

const OurServices = [
  {
    id: 1,
    title: "Electrician",
    desc: "Professional electricians for all household electrical needs.",
    image: electrician2,
    position: "left",
  },
  {
    id: 2,
    title: "Plumber",
    desc: "Reliable plumbers for fittings, leakage and repair services.",
    image: painter2,
    position: "right",
  },
  {
    id: 3,
    title: "Nurse",
    desc: "Certified home nurses for elderly care and medical support.",
    image: nurse,
    position: "left",
  },
  {
    id: 4,
    title: "House Cleaner",
    desc: "Thorough home cleaning for a fresh living space",

    image: maid,
    position: "right",
  },
  {
    id: 5,
    title: "Babysitter",
    desc: "Safe and caring childcare support at home.",
    image: babysitter,
    position: "left",
  },
  {
    id: 6,
    title: "Labour",
    desc: " Reliable support for household and daily manual work.",

    image: carpenter,
    position: "right",
  },
  {
    id: 7,
    title: "Mechanic",
    desc: " Vehicle repair and maintenance at your location.",
    image: mechanic,
    position: "left",
  },
  {
    id: 8,
    title: "Painter",
    desc: "Wall painting, touch-ups, and home renovation finishes.",
    image: painter,
    position: "right",
  },
];

const Services = () => {
  return (
    <section className="w-full py-20 bg-linear-to-r from-cyan-100 to-zinc-300 shadow-2xl">
      <div className="text-center mb-14">
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
                <Link to="/services/our-workers" state={{ skill: item.title }}>
                  {" "}
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-md">
                    View Helpers
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
