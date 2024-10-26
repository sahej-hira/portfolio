import React from "react";
import myImage from "../assets/heroImage.jpg";
import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-pink-300 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-centr justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            A learner, developer, and problem solver
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center ">
            <p className="text-white py-4 max-w-md">
              {" "}
              I am passionate about crafting innovative and user-friendly
              digital experiences. With a strong foundation in Python, Java and
              MERN. My goal is to leverage my skills to create impactful
              solutions that solve real-world problems and make a positive
              difference.
            </p>
            <div className="mx-auto h-40 w-40 rounded-full overflow-hidden">
              <img
                src={myImage}
                alt="my profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-400 via-pink-400 to-pink-300 cursor-pointer">
              Explore
              <span className="group-hover:cursor-zoom-in duration-200">
                <FaMagnifyingGlassArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
