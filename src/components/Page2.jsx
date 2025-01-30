import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const containerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);

  useGSAP(() => {
    gsap.from(box1Ref.current, {
      x: "-100%",
      rotate: -10,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "20%",
        scrub: true,
        duration: 0.5,
      },
    });

    gsap.from(box2Ref.current, {
      x: "100%",
      rotate: 10,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "20%",
        scrub: true,
        duration: 0.5,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen main-container relative px-10">
      <div className="w-full h-20 flex justify-between items-center">
        <h1 className="text-[2rem] font-semibold leading-[1.2]">
          Your key to strategic <br /> success through analytics
        </h1>
        <h1 className="text-[1.2rem] font-light leading-none">
          Ready for exciting, instantaneous,
          <br /> all-accessible insights in real time?
        </h1>
      </div>
      <div className="w-full h-full flex justify-between gap-5 mt-10">
        <div
          ref={box1Ref}
          className="box1 w-[50%] h-[60vh] bg-orange-500 rounded-lg"
        ></div>
        <div
          ref={box2Ref}
          className="box2 w-[50%] h-[60vh] bg-green-500 rounded-lg"
        ></div>
      </div>
      <div className="w-full absolute bottom-[-10%] flex items-center  justify-center  gap-5 ">
        <div>
          Up to
          <span className="text-[9rem] font-bold"> 45%</span>
        </div>
        <div>
          Increase your analytics efficiency by up to 45%. Unique algorithms <br />
          provide insights from data, reduce time for analysis and save time for <br />
          making important, informed decisions
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Page2;
