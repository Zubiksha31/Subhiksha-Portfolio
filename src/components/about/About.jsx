import React from "react";
import AnimatedList from "../ui/Animatedlist";
import Stepper, { Step } from "../ui/Stepper";
import Gdsc from "../../assets/GDSCPIC.png";
import RollingGallery from "../ui/RollingGallery";
import Ecommerce from "../../assets/Ecommerce.png";
import Igreen from "../../assets/Igreen.png";
import LandingPage from "../../assets/LandingPage.png";
import Innomatics from "../../assets/innomatic.png";
import InnomaticHackathon from "../../assets/Innomatics-hackathon.png";
import InnomaticProject from "../../assets/Innomaticproject.png";
import Recipe from "../../assets/Recipe.png";
import ExperienceTimeline from "../ui/ExperienceTimeline";

const items = [
  "HTML",
  "CSS",
  "Tailwind",
  "React",
  "Python",
  "JavaScript",
  "Java",
  "UI/UX design",
  "No-Code development",
];

const data = [
  {
    id: 1,
    image: Ecommerce,
    title: "E-Commerce Website",
    para: "An online shopping platform with a seamless user experience.",
    height: 400,
  },
  {
    id: 2,
    image: Igreen,
    title: "Igreen Project",
    para: "A sustainability-focused website promoting eco-friendly products.",
    height: 300,
  },
  {
    id: 3,
    image: LandingPage,
    title: "Landing Page",
    para: "A beautifully designed landing page with responsive design.",
    height: 300,
  },
  {
    id: 4,
    image: Innomatics,
    title: "Innomatics Website",
    para: "A project built for Innomatics with interactive UI.",
    height: 300,
  },
  {
    id: 5,
    image: InnomaticHackathon,
    title: "Innomatic Hackathon",
    para: "A hackathon project showcasing innovation and problem-solving.",
    height: 300,
  },
  {
    id: 6,
    image: InnomaticProject,
    title: "Innomatic Project",
    para: "A major project developed under Innomatic's initiative.",
    height: 300,
  },
  {
    id: 7,
    image: Recipe,
    title: "Recipe Website",
    para: "A food recipe website that promotes healthy eating habits.",
    height: 300,
  },
];

const About = () => {
  return (
    <div className="  ">
      <div className=" my-6">
        <h1 className=" text-2xl font-bold my-4">
          Hey , Im{" "}
          <span className=" text-sky-700 text-3xl">
            {" "}
            Subhiksha Senthilkumar{" "}
          </span>{" "}
          🤟
        </h1>
      </div>
      <div>
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
      <div className=" my-10">
        <h1 className=" my-4 font-medium text-[18px]">Short Bio</h1>
        <p className=" text-gray-600 font-medium">
          I'm a Web developer and UI/Ux Designer based in Tamilnadu, India. I'm
          <span className=" text-sky-500"> Passionate about building innovative tech solutions </span> and leveraging
          data for impact. I'm a big advocate of open source software, and
          almost everything I build is <span className=" text-sky-500">  open source </span> I love educating others
          about technology and programming. Let's <span className=" text-sky-500"> connect </span>  and collaborate to
          push the boundaries of what's possible with data and tech!
        </p>
      </div>
      <div className=" p-5">
        <ExperienceTimeline/>
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

export default About;
