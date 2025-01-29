import React from "react";

const Header = () => {
  return (
    <div className="w-full h-screen relative  flex justify-center items-center  ">
      <div className="container w-[20%] h-[20%] bg-orange-600  "></div>
      <h1 className="text-[8rem] font-semibold leading-none  ">
        <span className="flex items-center justify-left">Analytics <div className="video w-[30svw] h-[15vw] bg-red-500 rounded-[15px] mt-[-10vw]"></div> </span>
        <span className="flex items-center justify-center">
          that helps you
        </span>
        <span className="flex items-center justify-center">
        
          shape the future
        </span>
      </h1>
    </div>
  );
};

export default Header;
