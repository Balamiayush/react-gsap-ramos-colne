import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "./Button";
import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {
  const hoverRef = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const navLinks = menuRef.current?.querySelectorAll("a") || [];

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        const targetRect = e.target.getBoundingClientRect();
        const menuRect = menuRef.current.getBoundingClientRect();

        gsap.to(hoverRef.current, {
          width: targetRect.width,
          x: targetRect.left - menuRect.left,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    menuRef.current?.addEventListener("mouseleave", () => {
      gsap.to(hoverRef.current, { opacity: 0, duration: 0.3, ease: "power2.out" });
    });
  }, []);

  // Animate mobile menu open/close
  useEffect(() => {
    if (isOpen) {
      gsap.to(".mobile-menu", { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(".mobile-menu", { x: "100%", opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [isOpen]);

  return (
    <div className="w-full h-20 px-4 p-2 sm:px-6 lg:px-10">
            <div className="text-white text-2xl">
        <CiMenuBurger />
        </div>
      <nav className="w-full h-full flex justify-between items-center p-5 bg-[#1A1A1A] mx-auto rounded-[15px]">
        {/* Logo */}
        <h1 className="text-white text-[1.4rem] font-bold">ramos.</h1>

        {/* Desktop Menu */}
        <div
          ref={menuRef}
          className="relative hidden md:flex w-[50%] lg:w-[40%] h-[7.5vh] justify-between items-center text-sm text-white cursor-pointer "
        >
          <span
            ref={hoverRef}
            className="absolute left-0 top-0 px-5 h-full bg-white/20 rounded-lg transition-all duration-150"
            style={{ width: 0, opacity: 0 }}
          ></span>

          {["Key Features", "Explore", "Solutions", "Tools", "Contact"].map((item, index) => (
            <a key={index} href="#" className="relative px-4 py-2 z-10 transition-opacity duration-150">
              {item}
            </a>
          ))}
        </div>
        <div className="hidden md:flex">
          <Button />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed top-0 right-0 h-screen w-[70%] bg-[#1A1A1A] text-white flex flex-col items-center justify-center gap-6 text-lg mobile-menu md:hidden"
        style={{ x: "100%", opacity: 0 }}
      >
        {["Key Features", "Explore", "Solutions", "Tools", "Contact"].map((item, index) => (
          <a key={index} href="#" className="text-white hover:text-gray-300 transition duration-300">
            {item}
          </a>
        ))}
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
