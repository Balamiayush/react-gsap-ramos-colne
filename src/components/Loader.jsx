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
          duration: 1,
          stagger: {
            amount: 1, // Total stagger duration
            from: "end", // Start animation from the last element
          },
          ease: "power2.out",
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
  }, []);

  return (
    <div className="w-full overflow-hidden loader h-screen flex relative bg-black">
      {boxes.map((_, index) => (
        <div key={index} className="box w-[20%] h-full bg-orange-600"></div>
      ))}

      {/* Smooth Line Animation */}
      <div className="line w-full h-[5px] bg-red-500 absolute top-1/2 left-0"></div>

      {/* Centered Text */}
      <h1 className="preloader-mark text-[8rem] font-bold absolute top-1/2  text-white">
        Ramos<span className="preloader-mark-span">®</span>
      </h1>
    </div>
  );
};

export default Loader;
