import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-sm bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Dulana Chathurma</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
    </nav>
  );
}
