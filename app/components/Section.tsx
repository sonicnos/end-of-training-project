import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  bg: string;
}

const Section: React.FC<SectionProps> = ({ children, bg }: SectionProps) => {
  return (
    <div className="h-full flex items-center justify-center text-6xl font-bold bg-green-600">
      {children}
      {bg}
    </div>
  );
};

export default Section;
