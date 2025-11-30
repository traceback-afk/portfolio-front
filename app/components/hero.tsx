"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "motion/react";
import Balatro from "./balatro";

export default function Hero() {
  return (
    <div
      className="hero h-screen flex flex-col justify-center items-center"
      id="hero"
    >
      <Balatro isRotate={false} mouseInteraction={false} pixelFilter={130} />
      <div className="absolute w-full h-full bg-gradient-to-b from-blue-500/0 via-purple-500/0 to-base-200"></div>
      <div className="absolute">
        <h1 className="font-medium text-6xl lg:text-7xl text-center mb-8">
          KHASHAYAR SOURMI
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5, // seconds
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mt-2 text-md lg:text-2xl text-center"
        >
          FRONT & BACK-END DEVELOPER
        </motion.p>
        {/* <h1 className="mt-2 text-md lg:text-2xl text-center text-gray-200">
          FRONT & BACK-END DEVELOPER.
        </h1> */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5, // seconds
            duration: 0.6,
            ease: "easeOut",
          }}
          className="flex justify-center gap-4 mt-5"
        >
          <a href="https://github.com/traceback-afk" target="_blank">
            <i className="bi bi-github text-3xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/khashayar-khosrosourmi-1b492a270/"
            target="_blank"
          >
            <i className="bi bi-linkedin text-3xl"></i>
          </a>
        </motion.div>
      </div>
      <div className="flex flex-col items-center z-1 absolute"></div>

      <ScrollLink
        to="writeups"
        smooth="easeOutQuad"
        duration={600}
        className="flex flex-col items-center mt-20 cursor-pointer absolute bottom-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.9,
            ease: "easeIn",
          }}
          className="rounded-2xl border-2 text-gray-300 h-15 py-1"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <ChevronDownIcon className="size-11 text-primary" />
          </motion.div>
        </motion.div>
      </ScrollLink>
    </div>
  );
}
