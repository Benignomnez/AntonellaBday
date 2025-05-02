import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 mt-12 text-center">
      <p className="flex items-center justify-center text-[#ffccd5]">
        Hecho con <Heart className="w-4 h-4 mx-1 text-[#ff6e9c]" /> para
        Antonella
      </p>
      <p className="mt-2 text-sm text-[#78c3fb]">
        Para preguntas, contactar a: benigno@bmgwebdevelop.com
      </p>
    </footer>
  );
};

export default Footer;
