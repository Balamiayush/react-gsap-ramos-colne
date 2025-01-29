import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo.svg";
import { Button } from "./Button";
const Navbar = () => {
  const hoverRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const navLinks = menuRef.current.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        const targetRect = e.target.getBoundingClientRect();
        const menuRect = menuRef.current.getBoundingClientRect();

        gsap.to(hoverRef.current, {
          width: targetRect.width,
          x: targetRect.left - menuRect.left,
          opacity: 1,
          duration: 0.15,
          ease: "power3.out",
        });
      });
    });

    menuRef.current.addEventListener("mouseleave", () => {
      gsap.to(hoverRef.current, { opacity: 0, duration: 0.15 });
    });
  }, []);

  return (
    <div className="w-full h-20 p-2">
      <nav className="w-[90%] h-full flex justify-between items-center p-5 bg-[#1A1A1A] mx-auto rounded-[15px]">
        <h1 className="text-white text-[1.4rem] font-bold">ramos.</h1>
        <div
          ref={menuRef}
          className="relative  w-[40%] glassdiv rounded-[15px] h-[7.5vh] p-5 flex justify-between items-center text-sm text-white cursor-pointer"
        >
          <span
            ref={hoverRef}
            className="absolute left-0 top-0 h-full bg-white/20 rounded-[15px] transition-all duration-150"
            style={{ width: 0, opacity: 0 }}
          ></span>
          <a
            href=""
            className="relative px-4 py-2 z-10 transition-opacity duration-150"
          >
            Key Features
          </a>
          <a
            href=""
            className="relative px-4 py-2 z-10 transition-opacity duration-150"
          >
            Explore
          </a>
          <a
            href=""
            className="relative px-4 py-2 z-10 transition-opacity duration-150"
          >
            Solutions
          </a>
          <a
            href=""
            className="relative px-4 py-2 z-10 transition-opacity duration-150"
          >
            Tools
          </a>
          <a
            href=""
            className="relative px-4 py-2 z-10 transition-opacity duration-150"
          >
            Contact
          </a>
        </div>
       <Button/>
      </nav>
    </div>
  );
};

export default Navbar;
