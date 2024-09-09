"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FaceComponent() {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  const checkScreenSize = () => {
    const screenWidth = window.innerWidth;
    setIsMobileOrTablet(screenWidth <= 768);
  };

  useEffect(() => {
    checkScreenSize();
    const handleMouseMove = (e) => {
      if (!isMobileOrTablet) {
        const { clientX, clientY } = e;
        setEyePosition({
          x: clientX - 700,
          y: clientY - 270,
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobileOrTablet]);

  const desktopAnimate = {
    width: ["28px", "31px", "34px", "34px", "31px", "28px"],
    height: ["28px", "22px", "12px", "12px", "22px", "28px"],
  };

  // Animate properties for mobile/tablet
  const mobileAnimate = {
    width: ["28px", "31px", "34px", "34px", "31px", "28px"],
    height: ["28px", "22px", "12px", "12px", "22px", "28px"],
    translateX: ["0px", "25px", "11px", "-25px", "0px"],
    translateY: ["0px", "-15px", "10px", "20px", "0px"],
  };

  return (
    <div className="relative">
      <div className="w-[240px] h-[350px] bg-gray-50 outline-double outline-gray-600 rounded-full relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex justify-center space-x-5 h-[300px] w-[200px] mt-[25px] ml-5 absolute ">
          <motion.div
            className="w-7 h-7 mt-16 bg-black rounded-full "
            animate={isMobileOrTablet ? mobileAnimate : desktopAnimate}
            transition={{
              duration: 7,
              delay: 1,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 4,
            }}
            style={{
              transform: `translate(${eyePosition.x / 18}px, ${
                eyePosition.y / 18
              }px)`,
            }}
          ></motion.div>
          <motion.div
            className="w-7 h-7 mt-16 bg-black rounded-full "
            animate={isMobileOrTablet ? mobileAnimate : desktopAnimate}
            transition={{
              duration: 7,
              delay: 1,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 4,
            }}
            style={{
              transform: `translate(${eyePosition.x / 18}px, ${
                eyePosition.y / 18
              }px)`,
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
