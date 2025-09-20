// Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-end space-x-8 sticky top-0 z-50">
      <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
      <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
      <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
      <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
    </nav>
  );
};

export default Navbar;
