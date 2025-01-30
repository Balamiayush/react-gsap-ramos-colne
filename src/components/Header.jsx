import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null); // Reference for the header section

  useGSAP(() => {
    gsap.from(".circle", {
      scale: 1.5,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.from("h1", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      y: "100%",
      stagger: 0.5,
    });

    gsap.to(".that", {
      x: "-10%",
      scrollTrigger: {
        trigger: headerRef.current, // Use the ref for targeting
        start: "40% 50%",
        end: "100% 50%",
        scrub: 1,
        duration: 0.5,
      },
    });
    gsap.to(".shape", {
      x: "10%",
      scrollTrigger: {
        trigger: headerRef.current, // Use the ref for targeting
        start: "40% 50%",
        end: "100% 50%",
        scrub: 1,
        duration: 0.5,
    
      },
    });
  }, []);

  return (
    <div ref={headerRef} className="w-full header h-screen relative flex justify-center items-center">
      <div className="text-[8rem] font-semibold leading-none">
        <span className="flex items-center">
          <div className="container w-full h-[20vh] flex items-center justify-center gap-2 overflow-hidden">
            <div className="circle w-[10vw] h-[10vw] bg-orange-500 rounded-full"></div>
            <div className="circle w-[10vw] h-[10vw] bg-green-500 rounded-full"></div>
          </div>
          <span className="analytics">Analytics</span>
          <div className="video w-full h-[15vw] rounded-[15px] mt-[-10vw]">
            <video
              className="w-full h-full object-cover rounded-[15px]"
              src="https://dl.dropboxusercontent.com/s/87iozgh1s9pw46j3cn49i/ramos-promo-half.mp4?rlkey=6irgep027719wp14r57the1nx&st=ju51r4id&dl=0"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </span>
        <div className="that flex items-center justify-center gap-5">
          that <span className="text-[#CCCCCC]">helps</span> you
        </div>
        <div className="flex shape gap-2 items-center  justify-center">shape the   <div className="circle w-[10vw] h-[10vw] bg-green-500 rounded-full"></div> future</div>
      </div>
    </div>
  );
};

export default Header;
