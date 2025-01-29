import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Loader = () => {
  const [boxes, setBoxes] = useState(Array.from({ length: 5 })); // Create an array with 5 elements

  useEffect(() => {
    let tl = gsap.timeline();

    tl.to(".line", {
      width: "-0%",
      duration: 2.5, // Slower animation for a smooth effect
      ease: "power4.out",
    })
      .to(
        ".box",
        {
          y: 0,
          height: 0,
          duration: 0.8,
          stagger: {
            amount: 0.5, // Total stagger duration
            from: "end", // Start animation from the last element
          },
          
        },
        "-=1" // Starts slightly before the line disappears completely
      )
      .to(
        ".preloader-mark",
        {
          opacity: 0,
          ease: "power2.out",
        },
        "1" // Starts fading slightly before the boxes finish
      );
      tl.to(".loader",{
      display:"none",
      })
  }, []);

  return (
    <div className="w-full  z-50 overflow-hidden loader h-screen flex absolute ">
      {boxes.map((_, index) => (
        <div key={index} className="box w-[20%] h-full bg-orange-600"></div>
      ))}

      {/* Smooth Line Animation */}
      <div className="line w-full h-[1px] bg-white absolute top-1/2 left-0"></div>

      {/* Centered Text */}
      <h1 className="preloader-mark text-[8rem] font-bold absolute top-1/2  text-white">
        Ramos<span className="preloader-mark-span text-[2rem] relative top-[-4rem] ">®</span>
      </h1>
    </div>
  );
};

export default Loader;
