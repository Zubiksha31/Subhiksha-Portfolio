import React from "react";
import Internpe from '../../assets/Internpe.png'
import Gdscbadge from '../../assets/Gdscbadge.png'
import Gdgbsdge from '../../assets/Gdgbadge.png'

const experiences = [
  {
    role: "Web Development Intern",
    company: "InternPE",
    duration: "Aug 2024 - Sep 2024",
    description:
      "Developed an e-commerce website, to-do list app, and more using HTML, CSS, and JavaScript.",
    logo: Internpe, // Replace with actual company logo URL
  },
  {
    role: "Web Development Core Team",
    company: "GDSC IIE",
    duration: "2023 - 2024",
    description:
      "Collaborated on web projects and helped organize tech events.",
    logo: Gdscbadge,
  },
  {
    role: "Web Development Core Team HEAD",
    company: "GDG IIE",
    duration: "2024 - 2025",
    description:
      "Lead the Web Development Core Team and collaborated on web projects and helped organize tech events.",
    logo: Gdgbsdge,
  },
  {
    role: "Web Development Intern",
    company: "Code Booster",
    duration: "Aug 2024 - Sep 2024",
    description:
      "Designed user-friendly interfaces for various projects with a focus on usability and accessibility.",
    logo: Gdgbsdge,
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Experience Timeline
      </h2>
      <div className="relative border-l border-neutral-600  pl-8 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            {/* Timeline Indicator */}
            <div className="absolute -left-14 top-4 w-12 h-12 border  flex items-center justify-center rounded-full  border-gray-900">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-8 h-8 border   rounded-full"
              />
            </div>

            {/* Experience Details */}
            <span className="text-sm text-gray-400">{exp.duration}</span>
            <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
            <p className="text-gray-300 font-medium">{exp.company}</p>
            <p className="text-gray-400 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
