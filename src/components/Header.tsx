import React from "react";
// Import the mermaid image
import mermaidImg from "../image/mermaid3.png";

interface HeaderProps {
  name: string;
  age: number;
}

const Header: React.FC<HeaderProps> = ({ name, age }) => {
  return (
    <header className="relative text-center">
      {/* Background mermaid image */}
      <div className="absolute -left-5 top-0 opacity-4.5 w-60 h-60 pointer-events-none">
        <img
          src={mermaidImg}
          alt=""
          aria-hidden="true"
          className="object-contain w-full h-full"
        />
      </div>

      <h1 className="relative inline-block mb-2 text-5xl font-bold font-mermaid animate-float">
        <span className="inline-block text-[#ff6e9c] animate-shimmer">
          {name}
        </span>
        <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 text-xl font-bold transform translate-x-1/2 -translate-y-1/4 rounded-full bg-[#ff6e9c] text-white animate-bounce">
          {age}
        </span>
      </h1>

      <div className="mt-4 transform -rotate-2">
        <p className="mb-2 text-xl font-medium text-[#78c3fb]">cumple</p>
        <div className="relative">
          <h2 className="text-6xl font-bold text-[#ffaac1] md:text-7xl animate-pulse">
            Cuatro
          </h2>
          <div className="absolute -top-2 -right-2 -left-2 -bottom-2 bg-[#ffaac1]/20 rounded-lg blur-xl animate-pulse-slow"></div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xl text-[#78c3fb]">y te invita a su</p>
        <h3 className="mt-2 text-3xl font-bold tracking-wider text-[#64e9ff] animate-float">
          Aventura de Sirenas
        </h3>
      </div>
    </header>
  );
};

export default Header;
