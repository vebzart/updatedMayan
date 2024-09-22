import video1 from "../assets/video1.mp4";
import video2 from "../assets/video-3.mp4";

import Contacts from "./Contacts";
import Services from "./Services";
import Products from "./Products";
const HeroSection = () => {
  return (
    <div>
        <div className="max-w-7xl mx-auto pt-20 px-6">
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Great Voyages
        <span className="bg-gradient-to-r from-[#3a5a40] to-[#DAD7CD]  text-transparent bg-clip-text">
          {" "}
          Begins Here
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-[#3a5a40] to-[#DAD7CD]  py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
       
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#3a5a40] shadow-sm shadow-[#DAD7CD] mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
         <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#3a5a40] shadow-sm shadow-[#DAD7CD] mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> 
    </div>
    <Services />
       <Products />
       
        <Contacts/>
        </div>
    </div>
  );
};

export default HeroSection;
