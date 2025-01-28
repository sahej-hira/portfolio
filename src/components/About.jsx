import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-pink-300 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col jusitfy-center w-full h-full">
        <div className="pt-8">
          <p className="text-4xl justify-center items-center font-bold inline border-b-4 border-pink-200">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi! I am Sahej, a final year student pursuing Bachlors in technology
          with my major in Computer Science from Eternal University.
        </p>
        <br/><br/>
        <p>Here are some pointers, incase you wish to know more About me:</p>
        <br />
        <ul className="text-ml mb-4">
          <li className="flex">
            <span className="mr-2">
              <FaHandPointRight />
            </span>
            Born and brought up in Delhi, I come from a joint family that has
            enriched me with an adventurous and competitive spirit since
            childhood.{" "}
          </li>
          <li className="flex">
            <span className="mr-2">
              <FaHandPointRight />
            </span>
            I don't categorise myself into "introvert" and "extrovert" labels, I
            am someone who adapts to the environment if it goes in accordance
            with my code of conduct.{" "}
          </li>
          <li className="flex">
            <span className="mr-2">
              <FaHandPointRight />
            </span>
            I'm passionate about solving real-world problems and harnessing my
            skills working on hands-on projects.
          </li>
          <li className="flex">
            <span className="mr-2">
              <FaHandPointRight />
            </span>
            By nature curious to implement and having a heads on the concepts
            being discussed.
          </li>
          <li className="flex">
            <span className="mr-2">
              <FaHandPointRight />
            </span>
            With over 222+ problems score on leetcode, I harness my problem
            solving skills to think of innovative solutions to solving problems
            and approaching it in an innovative manner(may include but not
            limited to software).{" "}
          </li>

          <li className="flex">
            <span className="mr-2">
              <FaHandPointRight />
            </span>
            When not coding I usually indulge myself into gaming, sleeping, and
            not to mention, daydreaming about travelling (and as you can guess,
            not being allowed to).
          </li>
        </ul>

       
      </div>
    </div>
  );
};

export default About;
