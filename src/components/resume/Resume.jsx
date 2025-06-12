import React from "react";
import { FaFileAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">View My Resume</h1>
      <a
        href="https://drive.google.com/file/d/1mOc0QrTIS8FphsQxdIn0yDydH6Gxy-A9/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        View Resume
      </a>
    </div>
    </div>
  );
};

export default Resume;
