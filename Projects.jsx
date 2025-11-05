import React from "react";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "Built with React and Tailwind CSS." },
    { title: "Student Management System", desc: "C language console app." },
  ];

  return (
    <section id="projects" className="py-16 text-center">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
