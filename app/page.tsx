"use client";

import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import Interview from "./components/Interview";
import Section from "./components/Section";
import Timer from "./components/Timer";

export default function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <Interview />
      {/* <ImageSlider /> */}
      {/* <Timer /> */}
      <Section bg="bg-sky-600">Section Test</Section>
    </div>
  );
}
