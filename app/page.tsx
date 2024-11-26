"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Interview from "./components/Interview/Interview";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import Conclusion from "./components/Conclusion";
import Exposition from "./components/Exposition";

export default function Home() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(true);
    } else {
      setShow(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  console.log(show);
  return (
    <div className="h-screen">
      {show && <NavBar />}
      <Hero />
      <Interview />
      <Exposition />
      <Conclusion />
      {/* <Section bg="bg-sky-600">Section Test</Section> */}
    </div>
  );
}
