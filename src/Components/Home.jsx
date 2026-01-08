

import WeDo from "./HomeComponents/WeDo";
import Hero from "./HomeComponents/Hero";
import OurServices from "./HomeComponents/OurServices";

const Home = () => {


  return (
    <div className="bg-linear-to-r from-cyan-100 to-zinc-300 shadow-2xl">
    <Hero/>
      <WeDo/>
      <OurServices/>
    </div>
  );
};

export default Home;
