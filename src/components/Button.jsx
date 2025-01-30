import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";

export const Button = () => {
  const btnRef = useRef(null);
  const animRef = useRef(null);

  useGSAP(() => {
    const btn = btnRef.current;
    const anim = animRef.current;
    btn.addEventListener("mousemove", (e) => {
      gsap.to(anim, {
        scale: 15,
        duration: 0.5,
        ease: "power2.out",
        opacity:1
      });
    });

    btn.addEventListener("mouseleave", () => {

      gsap.to(anim, {
        scale: 1,
        duration: 0.5   ,
        ease: "power2.out",
        opacity:0
      });
    });
  }, []);

  return (
    <div
      ref={btnRef}
      className="bg-white btn relative z-20 px-8 py-4 rounded-[15px] cursor-pointer overflow-hidden"
    >
      <span>Sign Up</span>
      <div
        ref={animRef}
        className="absolute z-1  anim top-0 left-0 w-6 h-6 rounded-full bg-orange-600"
      ></div>
    </div>
  );
};
