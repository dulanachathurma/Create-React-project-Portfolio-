import React from "react";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="text-center py-16">
      <img
        src={profile}
        alt="Profile"
        className="w-40 h-40 mx-auto rounded-full shadow-md"
      />
      <h2 className="text-3xl font-semibold mt-6">Hello, I'm Dulana 👋</h2>
      <p className="max-w-xl mx-auto mt-4 text-gray-600">
        A passionate Software Engineering undergraduate at the University of Kelaniya, 
        with interest in web development and modern UI design.  
      </p>
    </section>
  );
}
