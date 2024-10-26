import React from "react";
import QuestionBox from "../assets/portfolio_pics/QuestionBox.png";
import RandomQuoteGenerator from "../assets/portfolio_pics/RandomQuoteGenerator.png";
import VFierce from "../assets/portfolio_pics/VFierce.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: QuestionBox,
      URL: "https://github.com/shark-lamp/RandomQuoteGenerator",
    },
    {
      id: 2,
      src: VFierce,
      URL:"https://github.com/shark-lamp/vfierce",
    },
    {
      id: 3,
      src: RandomQuoteGenerator,
      URL:"https://github.com/shark-lamp/QuestionBox.ai",
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-pink-300 w-full text-white md:h-screen"
    >
      <div className="max-w-screem-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-cold inline border-b-4 border-pink-300">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, URL }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  
                  <a href={URL}>Code</a>

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
