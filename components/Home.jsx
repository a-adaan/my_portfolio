"use client";
import FaceComponent from "./FaceComponent";
import Resume from "./Resume";
import SkillSec from "./SkillSec";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const contain = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contain,
    offset: ["start start", "end end"],
  });

  const checkScreenSize = () => {
    const screenWidth = window.innerWidth;
    setIsMobileOrTablet(screenWidth <= 768);
  };
  useEffect(() => {
    checkScreenSize();
  }, []);
  const faceWid = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);
  const faceScl = useTransform(scrollYProgress, [0, 1], ["1", "0.5"]);
  const inlaptop = { width: faceWid };
  const inMobile = { scale: faceScl };
  return (
    <div className=" md:h-full flex-col items-center " ref={contain}>
      <motion.div
        className="flex flex-col justify-center items-center  md:sticky top-0 h-[100vh] w-screen "
        style={isMobileOrTablet ? inMobile : inlaptop}
      >
        <FaceComponent />
        <p className="mt-6 font-semibold text-2xl text-center">
          Nafis Abrar Ahmed Adaan
        </p>
        <p className="mt-6 font-medium text-xl text-center">
          Front-End Developer
        </p>
        <Resume />
      </motion.div>
      <div className="relative md:left-1/2 flex flex-col justify-center items-start h-screen md:w-1/2 w-full p-5">
        <SkillSec />
      </div>
    </div>
  );
}
