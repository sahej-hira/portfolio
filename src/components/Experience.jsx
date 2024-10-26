import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import figma from "../assets/figmaLogo.png";
import github from "../assets/github.png";
import jupyter from "../assets/jupyter.png";
import keras from "../assets/kerasLogo.png";
import node from "../assets/node.png";
import python from "../assets/pythonLogo.png";
import tensorflow from "../assets/tensorFlowLogo.png";
import pytorch from "../assets/pytorchLogo.png";

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: figma,
      title: "Figma",
      style: "shadow-green-500",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImg,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-grey-400",
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: jupyter,
      title: "Jupyter notebooks",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: tensorflow,
      title: "Tensorflow",
      style: "shadow-yellow-500",
    },
    {
      id: 12,
      src: pytorch,
      title: "Pytorch",
      style: "shadow-orange-700",
    },

    {
      id: 13,
      src: keras,
      title: "Keras",
      style: "shadow-red-500",
    },
  ];

  return (
    <div
      id="experience"
      className="bg-gradient-to-b from-black via-black to-pink-300 w-full text-white md:h-full"
    >
      <div className="`max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-cold inline border-b-4 border-pink-300">
            Tech Stack
          </p>
          <p className="py-6">
            Following are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg +
                        " " +
                        ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto"></img>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
