"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Timer = () => {
  const images = [
    "https://images.unsplash.com/photo-1542397284385-6010376c5337?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1599121869368-252d3ebd81ce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1670509916735-1f8aa3791215?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [seconds, setSeconds] = useState(0);
  const [anim, setAnim] = useState("in");
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
      setAnim("in");
      setTimeout(() => {
        setAnim("out");
      }, 500);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const variants = {
    out: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      animate={anim}
      variants={variants}
      className="App"
      style={{ fontSize: 100 }}
    >
      {/* <Image src=""/> */}
      {seconds}
    </motion.div>
  );
};

export default Timer;
