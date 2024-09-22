import { useState, useEffect } from "react";
import { features } from "../constants/Data";

const Products = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slideshow transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % features.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[500px] w-full flex flex-wrap justify-center lg:justify-between">
      
      {/* Static left section (Services) */}
      <div className=" lg:w-auto lg:mr-10 flex flex-col  lg:items-start mt-10 lg:mt-0">
        <div className="">
          {/* Services Title */}
          <h2 className="flex flex-wrap  text-4xl sm:text-5xl lg:text-6xl font-bold text-[#dad7cd]">
            Products
          </h2>
        <p className="font-unbounded text-[#dad7cd]">From Our Inventory To Your Market.</p>
          {/* Know More Button */}
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#3a5a40] to-[#dad7cd] text-neutral-900 rounded-lg hover:scale-105 transition-transform">
            Know More
          </button>
        </div>
      </div>

      {/* Slideshow on the right */}
      <div className="w-full lg:w-auto relative lg:flex-grow">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`absolute  transition-opacity duration-1000 ml-[200px] ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Image */}
            <img
              src={feature.img}
              alt={feature.text}
              className="h-[400px] w-[750px] object-cover rounded-md border border-[#3a5a40] shadow-sm shadow-[#DAD7CD]"
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
    </div>
  );
};

export default Products;
