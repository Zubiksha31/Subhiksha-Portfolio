import React from "react";
import { Link } from "react-router-dom";
import Gdsc from "../../assets/GDSCPIC.png";
import { FaHome } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-1/5 min-h-screen bg-[#0F172A] border-r border-r-slate-700  text-white flex flex-col items-center p-20 space-y-6">
      {/* Profile Image  */}
       <div className="w-10 h-10 rounded-full bg-gray-500">
        <img
          src={Gdsc}
          alt="Gdsc"
          className="w-full h-full object-cover object-left rounded-full"
        />
      </div>

      
      <ul className="space-y-10">
        <li className="hover:text-blue-400 cursor-pointer">
          <Link to="/">
            <FaHome />
          </Link>
        </li>
        <li className="hover:text-blue-400 cursor-pointer">
          <Link to="/aboutme">
            <FaUserGraduate />
          </Link>
        </li>
        <li className="hover:text-blue-400 cursor-pointer">
          <Link to="/portfolio">
            <GiSkills />
          </Link>
        </li>
        <li className="hover:text-blue-400 cursor-pointer">
            <Link to="/resume">
              <FaFileAlt />
            </Link>{" "}
        </li>
      </ul>


    </div>
  );
};

export default Navbar;


