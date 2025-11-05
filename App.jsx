import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />
      <main className="px-6 md:px-16">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
