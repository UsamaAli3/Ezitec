import React from "react";
import HomeComp2 from "./HomeComp2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function RecoCourseComp() {
  return (
    <>
      <div className="font-bold text-4xl pt-16 pb-10 text-gray-700 text-center">
        Recommended Course's
      </div>
      <div className="flex gap-2 mx-24 justify-center">
        <HomeComp2 />
        <HomeComp2
          image="https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-_FILEminimizer_.webp"
          tital="Online Arbitrage Mastermind 2.0[Resell Products from Home]"
          duration="3 Months"
          price="34,000"
          course="Amazon"
        />
        <HomeComp2 />
        <HomeComp2
          image="https://ezitech.org/wp-content/uploads/2023/07/photoshop-course.webp"
          tital="Adobe Photoshope Course"
          duration="1 Month"
          price="15,000"
        />
      </div>
      <div className="flex justify-center items-center my-4 ">
        <div className="border-2 border-blue-700 text-center  w-8 h-8 cursor-pointer flex justify-center items-center my-4 hover:bg-blue-700">
          <IoIosArrowBack className="text-blue-600"/>
        </div>
        <div className="border-2 border-blue-700 text-center  w-8 h-8 cursor-pointer flex justify-center items-center my-4 hover:bg-blue-700">
          <IoIosArrowForward className="text-blue-600" />
        </div>
      </div>
    </>
  );
}

export default RecoCourseComp;
