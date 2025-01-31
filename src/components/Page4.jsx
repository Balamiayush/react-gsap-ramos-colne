import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  const page4 = useRef(null);
  const page4sticky = useRef(null);

  useGSAP(() => {
    // Animation for the sticky div
    gsap.to(page4sticky.current, {
      y: 0, // Moves it up
      scrollTrigger: {
        trigger: page4.current,
        start: "top top", // When the section enters
        end: "bottom center", // Ends when near the center
        scrub: 1, // Smooth transition
        markers: true, // Debug markers (remove in production)
        pin: true, // Keeps it fixed during the animation
      },
    });

    // Background color change animation
    gsap.to(page4.current, {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: page4.current,
        start: "top center", // Background color starts changing at center
        end: "bottom top", // Ends at the top
        scrub: 1, // Smooth transition
      },
    });
  }, []);

  return (
    <div
      ref={page4}
      className="w-full h-screen relative flex justify-center bg-slate-100 items-center gap-10 overflow-hidden"
    >
      <h1 className="text-white text-[10rem] capitalize font-bold relative z-10">ramos.</h1>
      <div
        ref={page4sticky}
        className="w-full h-full bg-red-500 absolute translate-y-[100%] rounded-full"
      ></div>
    </div>
  );
};

export default Page4;
