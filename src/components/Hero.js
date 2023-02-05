import React from "react";
import laptop from "../assets/laptop.png";
import offers from "../assets/offers.jpg"
const Hero = () => {
  return (
    <div className="">
      <div className="flex item-center max-sm:h-[50vw] md:w-max xl:w-[90vw] mx-auto gap-5">
        {/* Fist Deal */}
        <div className=" relative flex justify-center rounded-[1rem] md:w-[60vw]   overflow-hidden  mt-4 w-screen mx-4 md:mx-0  ">
          <img
            src={offers}
            alt=""
            className="absolute object-cover w-full h-[80%] max-sm:h-[100%]  rounded-[1rem] "
          />
          <div className="grad absolute w-full md:w-[70vw] h-[55rem] p-4"></div>
          <div className="  text-[20px] lg:text-[30px] font-semibold  text-white   ">
            <h1 className="relative text-left max-sm:mr-40 mr-80">Up to 65% 
            <p className="text-sm font-thin">New savings every week! <br /> Hurry to score low, low prices. <br />
            <button className="bg-gray-100 border border-black rounded-full px-2 py-1 text-black mt-2 ">Shop now</button>
            </p>
            </h1>
          </div>
        </div>

        {/* Second Deal */}
        <div className="hidden w-full   h-[35rem]   md:flex   md:w-[30vw]  relative  rounded-[1rem] mt-4  ">
          <img
            src={laptop}
            alt=""
            className="absolute object-cover top-32 h-[60%] rounded-[1.8rem]"
          />
          <div className=" h-[80%]  p-4 flex flex-col justify-between w-full bg-gray-100 rounded-[1rem] ">
            <div className=" flex items-center justify-between pt-2">
              <p className="font-bold text-[20px] text-[]">Special Deals</p>
              <p className=" text-[#0071dc] cursor-pointer">More info</p>
            </div>
            <div className="  gap-4 pb-2 relative">
              <div className="flex items-center justify-between">
                <div className="bg-[#ffc220] w-[7.5rem] flex items-center justify-center h-[2.5rem] rounded-full">
                  <p className="font-bold text-[16px]  cursor-pointer ">BUY NOW</p>
                </div>
                <div className="h-full flex items-center ">
                  <p className="font-bold text-[26px] ">$34.99</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="font-semibold ">Best sold laptop in 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;