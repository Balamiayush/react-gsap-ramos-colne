import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Page3 = () => {
  const buttonRef = useRef(null);
  const buttonMainRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const buttonMain = buttonMainRef.current;
    const tl = gsap.timeline({ paused: true });

    if (!button || !buttonMain) return;

    tl.to(button, {
      opacity: 1,
      scale: 18,
      duration: 0.5,
      ease: "power1.inOut",
    });

    const onMouseEnter = () => {
      tl.play();
    };

    const onMouseLeave = () => {
      tl.reverse();
    };

    const onMouseMove = (e) => {
      gsap.to(button, {
        x: e.clientX - buttonMain.getBoundingClientRect().left - button.offsetWidth / 2,
        y: e.clientY - buttonMain.getBoundingClientRect().top - button.offsetHeight / 2,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    buttonMain.addEventListener("mouseenter", onMouseEnter);
    buttonMain.addEventListener("mouseleave", onMouseLeave);
    buttonMain.addEventListener("mousemove", onMouseMove);

    return () => {
      buttonMain.removeEventListener("mouseenter", onMouseEnter);
      buttonMain.removeEventListener("mouseleave", onMouseLeave);
      buttonMain.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="w-full  h-screen flex flex-col justify-center items-center font-semibold p-10 ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="content text-center text-[9rem] leading-[1]"
      >
        Maximize <span className="text-[#CCCCCC]">efficiency</span> <br /> with our intuitive
      </motion.div>

      <div className="w-full h-40 bg-red-500 mt-10 flex justify-between px-2 items-center rounded-xl shadow-lg">
        <div className="flex gap-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
            className="circle bg-orange-500 rounded-full w-[10vw] h-[10vw]"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
            className="circle bg-orange-500 rounded-full w-[10vw] h-[10vw]"
          />
        </div>

        <div
          ref={buttonMainRef}
          className="flex buttonmain w-[25vw] h-[10vw] items-center relative cursor-pointer overflow-hidden rounded-full bg-blue-500 shadow-lg"
        >
          <div
            ref={buttonRef}
            className="button w-[2vw] h-[2vw] bg-green-500 absolute rounded-full opacity-0 scale-1"
          ></div>
          <marquee behavior="scroll" repeat="Infinity" direction="left" className="flex text-nowrap text-5xl">
            <div className="track-block flex block text-nowrap gap-5">
              {Array(20)
                .fill("analytics service")
                .map((text, i) => (
                  <h2 key={i} className="headline-h1 track">
                    {text}
                  </h2>
                ))}
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Page3;
