import React from "react";
import SpotlightCard from "../ui/SpotlightCard";
import Ecommerce from "../../assets/Ecommerce.png";
import Igreen from "../../assets/Igreen.png";
import LandingPage from "../../assets/LandingPage.png";
import Innomatics from "../../assets/innomatic.png";
import InnomaticHackathon from "../../assets/Innomatics-hackathon.png";
import InnomaticProject from "../../assets/Innomaticproject.png";
import Recipe from "../../assets/Recipe.png";
import Portfolio from "../../pages/Portfolio";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className=" font-medium text-[30px] my-12">
            Take a look at my projects here..!
          </h1>

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
                    An E-commerce platform enables online buying and selling.
                    Our project uses HTML, CSS, JavaScript, Python, and
                    MySQL/MongoDB, ensuring a seamless shopping experience with
                    secure payments. 🚀
                  </p>
                  <div className=" text-end">
                    <button>
                      <a className=" font-bold ">Github</a>
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
                    Titanium – A cross-platform mobile app development
                    framework. It is a responsive page built with HTML, CSS &
                    React, ensuring fast performance and an engaging user
                    experience. 🚀
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
                href="https://github.com/Zubiksha31/igreen-project.git"
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
                    promoting sustainability and digital learning on campus.
                    🌿📲
                  </p>
                  <div className="  text-end">
                    <button>
                      <a className="  font-bold ">Github</a>
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
                    In the Innomatics Hackathon, I built innovative projects
                    using HTML, CSS, JavaScript, and Python/Node.js, focusing on
                    real-world solutions and UI/UX design. 🚀
                  </p>
                  <div className="  text-end">
                    <button>
                      <a className="  font-bold ">Github</a>
                    </button>
                  </div>
                </SpotlightCard>
              </a>
            </div>

            <div>
              <a
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
                    I developed a project using HTML, CSS, JavaScript, and
                    Python/Node.js, focusing on real-world solutions and UI/UX
                    design. �
                  </p>
                  <div className="  text-end">
                    <button>
                      <a className="  font-bold ">Github</a>
                    </button>
                  </div>
                </SpotlightCard>
              </a>
            </div>
          </div>

          {/* row 2 over */}
          <div className=" flex justify-start gap-9 my-6">
            <div>
              <a
                href="https://github.com/Zubiksha31/innomatics-ass-3.git"
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
                      src={Innomatics}
                      alt=""
                    />
                  </div>
                  <h1 className=" my-4 font-bold">Innomatics Project Task</h1>
                  <p className=" text-gray-500">
                    In the Innomatics , same as the previous project- I built
                    innovative projects using HTML, CSS, JavaScript, and
                    Python/Node.js, focusing on real-world solutions and UI/UX
                    design. 🚀
                  </p>
                  <div className="  text-end">
                    <button>
                      <a className="  font-bold ">Github</a>
                    </button>
                  </div>
                </SpotlightCard>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-12">
        <h1 className=" font-medium text-[18px] my-6">Lets Connect</h1>
        <p className=" text-gray-500 w-[60%]">
          I'm excited to connect with others via{" "}
          <a
            href="https://www.linkedin.com/in/subhiksha-senthilkumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400"
          >
            {" "}
            Linkedin{" "}
          </a>{" "}
          and{" "}
          <a
            href="mailto:subhikshasenthilkumar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400"
          >
            {" "}
            mail{" "}
          </a>{" "}
          to chat about projects and ideas. Currently, I am open to hearing
          about potential opportunities, discussing them with you and then
          potentially collaborating if it's a good fit.
        </p>
      </div>
    </div>
  );
};

export default Project;
