import React from "react";
import Homepage from "../../assets/homepageimg.png";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { SiProtonmail } from "react-icons/si";
import SpotlightCard from "../ui/SpotlightCard";
import Ecommerce from "../../assets/Ecommerce.png";
import Igreen from "../../assets/Igreen.png";
import LandingPage from "../../assets/Landingpage.png";
import InnomaticHackathon from "../../assets/Innomatics-hackathon.png";
import InnomaticProject from "../../assets/Innomaticproject.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" ">
      <div className="flex justify-end">
        <button className="bg-gradient-to-b from-[#16a34a] via-[#4ade80] to-[#bbf7d0] font-bold text-black px-3 py-2 rounded-md ">
          <a
            href="https://www.linkedin.com/in/subhiksha-senthilkumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </button>
      </div>
      <div className=" w-7/12 h-48 my-6 ">
        <img
          src={Homepage}
          alt="Homepage"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="text-start ">
        <h1 className=" text-[18px] font-bold">
          Hey, I'm{" "}
          <span className="text-blue-500 font-semibold">
            Subhiksha Senthilkumar
          </span>
        </h1>
        <p className="text-3xl font-bold mt-4">
          I craft innovative{" "}
          <span className=" bg-gradient-to-t from-blue-500 via-teal-500 to-orange-500 text-transparent bg-clip-text">
            {" "}
            Web development{" "}
          </span>{" "}
          digital experiences that engage users and elevate businesses to
          extraordinary{" "}
          <span className=" bg-gradient-to-t from-blue-500 via-teal-500 to-orange-500 text-transparent bg-clip-text">
            {" "}
            success{" "}
          </span>{" "}
          !
        </p>
      </div>
      <div className=" my-4">
        <h1 className=" text-gray-500 text-start">
          A Passionate Software Engineer from Tamilnadu, India
        </h1>
      </div>

      <div className=" flex justify-between  cursor-pointer">
        <div>
          <ul className=" flex gap-4">
            <li className=" text-gray-500 hover:text-white">
              {" "}
              <a
                href="https://github.com/Zubiksha31"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className=" text-gray-500 hover:text-white">
              <a
                href="https://www.linkedin.com/in/subhiksha-senthilkumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin />
              </a>
            </li>
            <li className=" text-gray-500 hover:text-white">
              <a
                href="mailto:subhikshasenthilkumar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiProtonmail />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h1 className=" font-medium my-12">Latest Projects</h1>

          {/* projects */}

          <div className=" flex justify-between gap-4">
            {/* project1 */}
            <div>
            <a
                      href="https://github.com/Zubiksha31/Ecommerce-website.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className=" w-20 h-20 ">
                  <img
                    className=" flex justify-start w-full h-full rounded-full object-cover"
                    src={Ecommerce}
                    alt=""
                  />
                </div>
                <h1 className=" my-4 font-bold">Ecommerce Platform</h1>
                <p className=" text-gray-500">
                  An E-commerce platform enables online buying and selling. Our
                  project uses HTML, CSS, JavaScript, Python, and MySQL/MongoDB,
                  ensuring a seamless shopping experience with secure payments.
                  🚀
                </p>
                <div className=" text-end">
                  <button>
                    <a
                      className=" font-bold "
                    >
                      Github
                    </a>
                  </button>
                </div>
              </SpotlightCard>
              </a>
            </div>

            {/* project 1 over */}

            {/* project 2 */}

            <div>
            <a
                      href="https://github.com/Zubiksha31/landing-page.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className=" w-20 h-20 ">
                  <img
                    className=" flex justify-start w-full h-full rounded-full object-cover"
                    src={LandingPage}
                    alt=""
                  />
                </div>
                <h1 className=" my-4 font-bold">Titanium Landing</h1>
                <p className=" text-gray-500">
                  Titanium – A cross-platform mobile app development framework.
                  It is a responsive page built with HTML, CSS & React, ensuring
                  fast performance and an engaging user experience. 🚀
                </p>
                <div className=" text-end">
                  <button>
                    <a
                      href="https://github.com/Zubiksha31/landing-page.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" font-bold "
                    >
                      Github
                    </a>
                  </button>
                </div>
              </SpotlightCard>
              </a>
            </div>

            {/* project 2 over */}

            <div>
            <a
                      href="https://github.com/Zubiksha31/Ecommerce-website.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className=" w-20 h-20 ">
                  <img
                    className=" flex justify-start w-full h-full rounded-full object-cover"
                    src={Igreen}
                    alt=""
                  />
                </div>
                <h1 className=" my-4 font-bold">Igreen</h1>
                <p className=" text-gray-500">
                  iGreen lets users scan a QR code on trees to access details,
                  promoting sustainability and digital learning on campus. 🌿📲
                </p>
                <div className="  text-end">
                  <button>
                    <a
                      className="  font-bold "
                    >
                      Github
                    </a>
                  </button>
                </div>
              </SpotlightCard>
              </a>
            </div>

            {/* project 3 over */}

            {/* projects */}
          </div>

          {/* row-1 over */}
          <div className=" flex justify-start gap-9 my-6">
            <div>
            <a
                      href="https://github.com/Zubiksha31/innomatic-hackathon.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className=" w-20 h-20 ">
                  <img
                    className=" flex justify-start w-full h-full rounded-full object-cover"
                    src={InnomaticHackathon}
                    alt=""
                  />
                </div>
                <h1 className=" my-4 font-bold">Innomatics Hackathon</h1>
                <p className=" text-gray-500">
                  In the Innomatics Hackathon, I built innovative projects using
                  HTML, CSS, JavaScript, and Python/Node.js, focusing on
                  real-world solutions and UI/UX design. 🚀
                </p>
                <div className="  text-end">
                  <button>
                    <a
                      className="  font-bold "
                    >
                      Github
                    </a>
                  </button>
                </div>
              </SpotlightCard>
              </a>
            </div>

            <div><a
                      href="https://github.com/Zubiksha31/innomatics-project1.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className=" w-20 h-20 ">
                  <img
                    className=" flex justify-start w-full h-full rounded-full object-cover"
                    src={InnomaticProject}
                    alt=""
                  />
                </div>
                <h1 className=" my-4 font-bold">Innomatics Project</h1>
                <p className=" text-gray-500">
                  I developed a project using HTML, CSS, JavaScript, and Python/Node.js, focusing on real-world solutions and UI/UX design. �
                </p>
                <div className="  text-end">
                  <button>
                    <a
                      className="  font-bold "
                    >
                      Github
                    </a>
                  </button>
                </div>
              </SpotlightCard>
              </a>
            </div>
          </div>


          {/* row 2 over */}
        </div>
        <div className=" font-normal ">
        See a list of all my projects  <Link to="/portfolio" className="cursor-pointer text-sky-700 text-[20px]"> here..!
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;



