import { useState, useEffect } from "react";
import { features } from "../constants/Data";
import { Link } from "react-router-dom";

const Services = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slideshow transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % features.length);
    }, 3000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[500px] flex flex-wrap justify-center lg:justify-between">
      {/* Slideshow on the left */}
      <div className="w-full lg:w-auto relative lg:flex-grow">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Image */}
            <img
              src={feature.img}
              alt={feature.text}
              className="h-[400px] w-[650px] object-cover rounded-md border border-[#3a5a40] shadow-sm shadow-[#DAD7CD]"
            />

            {/* Overlay title with shadow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center rounded-md">
              <h5 className="text-3xl lg:text-4xl text-[#DAD7CD] font-bold">
                {feature.text}
              </h5>
            </div>
          </div>
        ))}
      </div>

      {/* Static right section */}
      <div className="w-full lg:w-auto lg:ml-10 flex flex-col justify-center mr-[100px] lg:items-start  lg:mt-0">
        <div className="mb-[80px]">
          {/* Services Title */}
          <h2 className="flex flex-wrap text-4xl sm:text-5xl lg:text-6xl font-bold text-[#dad7cd]">
            Services
          </h2>
        <p className=" font-unbounded text-[#dad7cd]">Navigate Your Global Trade with Us.</p>
          {/* Know More Button */}
          <Link to="/services"><button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#3a5a40] to-[#dad7cd] text-neutral-900 rounded-lg hover:scale-105 transition-transform ">
            Know More
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Services;