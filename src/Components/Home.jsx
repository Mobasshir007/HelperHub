import banner from "../assets/bannermain.png";
import electrician from "../assets/electrician.png";

const Home = () => {
  return (
    <div>
      <div className=" w-full ">
        <img className="w-500 h-160" src={banner} alt="Banner" />
        <div className="absolute top-50 px-20">
          <h1 className="text-8xl font-extrabold text-blue-500 ">
            Helper<span className="text-amber-600">Hub</span>{" "}
          </h1>
          <p className=" py-4 text-4xl font-bold bg-linear-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">
            Hire Trusted Helpers Near You
          </p>
          <div className="py-4 ">
            <p className="font-bold text-xl">
              Electricians, plumbers, nurses, mechanics, and even Babysitter —
              all <span className="text-cyan-600">at one place</span>. <br />
              <span className="text-gray-500">
                Verified professionals
              </span>,{" "}
              <span className="text-gray-500">transparent pricing</span>, and{" "}
              <span className="text-lime-600">quick booking</span>. <br />
              <span className="bg-linear-to-r from-blue-500 to-red-400 bg-clip-text text-transparent">
                Trusted local help for every home need
              </span>
            </p>
          </div>
          <div className="flex gap-24 h-16 mt-10  font-medium ">
            {" "}
            <button className="w-36  bg-blue-400 hover:bg-green-600 rounded-lg cursor-pointer">Find Helpers</button>
            <button className="w-36 bg-cyan-300 hover:bg-amber-600 rounded-lg cursor-pointer">Register as Helper</button>
          </div>

          {/* / <p className=' text-2xl font-bold'>Electricians, plumbers, nurses, labourers, and mechanics <br /> etc — all at one place.</p> */}
        </div>
      </div>
      <div>
        <div><h1>Our Services</h1></div>
      </div>
    </div>
  );
};

export default Home;
