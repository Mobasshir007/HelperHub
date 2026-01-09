import React, { useState } from "react";
import mechanic2 from "../../assets/mechanic2.jpg";
import maid from "../../assets/maid2.jpg";
import carpenter from "../../assets/carpenter.jpg";
import babysitter from "../../assets/babysitter.jpg";
import babysitter2 from "../../assets/babysitter2.jpg";
import electrician2 from "../../assets/electrician.jpg";
import painter2 from "../../assets/painter2.jpg";
import painter from "../../assets/painter.jpg";
import nurse from "../../assets/nurse.jpg";
import mechanic from "../../assets/Mechanic.jpg";
import maid2 from "../../assets/maid2.jpg";
import { Link } from "react-router-dom";


const ServicesCard = () => {
 
  
  
  const CardData = [
    {
      img: electrician2,
      skill: "Electrician",
      label: "🔌 Electrician",
      desc: "            Electrical repairs, wiring, and appliance installation.",
      alt: "Electrician Image",
    },
    {
      img: painter,
      skill: "Painter",
      label: "🖌 Painter",
      desc: "Wall painting, touch-ups, and home renovation finishes.",
      alt: "Electrician Image",
    },
    {
      img: mechanic,
      skill: "Mechanic",
      label: "🛠 Mechanic",
      desc: " Vehicle repair and maintenance at your location.",
      alt: "Electrician Image",
    },
    {
      img: carpenter,
      skill: "Labour",
      label: "🧹 Labour",
      desc: " Reliable support for household and daily manual work.",
      alt: "Electrician Image",
    },
    {
      img: babysitter,
      skill: "Babysitter",
      label: "👶 Babysitter",
      desc: "Safe and caring childcare support at home.",
      alt: "Electrician Image",
    },
    {
      img: nurse,
      skill: "Nurse",
      label: "🏥 Nurse",
      desc: " Professional home nursing and patient care services",
      alt: "Electrician Image",
    },
    {
      img: maid,
      skill: "House Cleaner",
      label: "🧽 House Cleaner",
      desc: "Thorough home cleaning for a fresh living space",
      alt: "Electrician Image",
    },
    {
      img: painter2,
      skill: "Plumber",
      label: "🚰 Plumber",
      desc: "Leakage fixing, pipe fitting, and bathroom maintenance.",
      alt: "Electrician Image",
    },
  ];
 
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {CardData.map((card) => {
        return (
        <Link to="/our-workers" state={{ skill: card.skill }}>
         <div  
  className="w-full rounded-lg cursor-pointer
             border-2 border-transparent hover:border-gray-400
             overflow-hidden hover:-translate-y-2
             shadow-sm hover:shadow-xl
             transition-all duration-300"
>

           <div className="w-full h-40 sm:h-44 md:h-48">
  <img className="w-full h-full object-cover" src={card.img} />
</div>

            <div className="bg-linear-to-r from-green-300  to-orange-200">
<h1 className="text-sm sm:text-base font-bold bg-cyan-600 rounded px-2 py-1">
                {card.label}
              </h1>
<p className="font-serif text-neutral-700 text-sm sm:text-base min-h-[4rem]">
  {card.desc}
</p>
            </div>
            
          </div></Link>
        );
      })}
    </div>
  );
};

export default ServicesCard;
