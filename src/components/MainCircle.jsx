import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MainCircle = () => {
  const circleRef = useRef(null);

  useGSAP(() => {
    const circle = circleRef.current;
    window.addEventListener("mousemove", (e) => {
      gsap.to(circle, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
        overwrite: true,
        ease: "bounce.out",
      });
    });
  });

  useEffect(() => {
    const circleElement = circleRef.current;

    const mouse = { x: 0, y: 0 };
    const previousMouse = { x: 0, y: 0 };
    const circle = { x: 0, y: 0 };

    let currentScale = 0;
    let currentAngle = 0;

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const speed = 0.17;

    const tick = () => {
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;
      const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;
      const mouseVelocity = Math.min(
        Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 8,
        150
      );
      const scaleValue = (mouseVelocity / 150) * 0.5;
      currentScale += (scaleValue - currentScale) * speed;
      const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

      const angle =
        (Math.atan2(circle.y - mouse.y, circle.x - mouse.x) * 180) / Math.PI;
      if (mouseVelocity > 20) {
        currentAngle = angle;
      }
      const rotateTransform = `rotate(${currentAngle}deg)`;

      circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

      window.requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", handleMouseMove);
    tick();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className="circle p-2 rounded-full bg-orange-500 absolute z-1000"
      ref={circleRef}
    ></div>
  );
};

export default MainCircle;
