import { features } from "../constants/Data";

const SeparateServices = () => {
  return (
    <div className="relative  mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-gradient-to-r from-[#DAD7CD] to-[#3a5a40] rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Services
        </span>
        {/* <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-[#DAD7CD] to-[#3a5a40] text-transparent bg-clip-text">
            your code
          </span>
        </h2> */}
      </div>
      <div className="grid grid-cols-3 mx-[100px] w-full mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="">
            <div className="">
              
                <img src={feature.img} className="h-[250px] w-[350px] rounded-md border border-[#3a5a40] shadow-sm shadow-[#DAD7CD] " />
             
              <div>
                <div className="flex items-center space-x-2 ">
                <span className="p-2 mt-[-10px] w-10 h-10  bg-neutral-900 text-[#3A5A40] justify-center items-center rounded-full ">{feature.icon}</span> 
                <h5 className="mt-1 mb-6 text-xl mt-[10px] text-[#dad7cd] ">{feature.text}</h5>
                </div>
                
                <p className="text-md  mb-20 text-neutral-500 w-[350px] text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeparateServices;