import React from "react";
import Reaction from "./assets/images/icon-reaction.svg";
import Memory from "./assets/images/icon-memory.svg";
import Verbal from "./assets/images/icon-verbal.svg";
import Visual from "./assets/images/icon-visual.svg";

import data from "./data.json";
import ResultComponent from "./ResultComponent";

const Summary = () => {
  // console.log(data);

  return (
    <section className="bg-paleBlue h-screen w-screen flex justify-center items-center ">
      <div className="flex max-w-3xl">
        {/* Left Column */}
        <div className="w-1/2 bgGradient rounded-lg p-8 flex flex-col items-center gap-4">
          <h2 className="text-xl text-lightLavender">Your Result</h2>
          <div className="circleGradient w-44 aspect-square rounded-full text-lightLavender flex flex-col justify-center items-center">
            <span className="text-7xl text-paleBlue font-bold">76</span> of 100
          </div>
          <p className="text-2xl text-paleBlue">Great</p>
          <p className="text-center text-lightLavender">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        {/* Right Column */}
        <div className="w-1/2 bg-white p-8 flex flex-col gap-2">
          <h2 className="text-xl font-bold text-darkGrayBlue mb-2">Summary</h2>

          <div className="flex gap-2 bg-lightRed/20 text-lightRed p-2 rounded-xl justify-between items-center">
            <span className="flex flex-row gap-2">
              <img src={Reaction} alt="" /> <p>Reaction</p>
            </span>{" "}
            <span className="flex justify-center items-center">80 / 100</span>
          </div>

          <div className="flex gap-2 bg-orangeYellow/20 text-orangeYellow p-2 rounded-xl  justify-between items-center">
            <span className="flex flex-row gap-2">
              <img src={Memory} alt="" /> <p>Memory</p>
            </span>{" "}
            92 / 100
          </div>

          <div className="flex gap-2 bg-greenTeal/20 text-greenTeal p-2 rounded-xl  justify-between items-center">
            <span className="flex flex-row gap-2">
              <img src={Verbal} alt="" /> <p>Verbal</p>
            </span>{" "}
            61 / 100
          </div>

          <div className="flex gap-2 bg-cobaltBlue/20 text-cobaltBlue p-2 rounded-xl  justify-between items-center">
            <span className="flex flex-row gap-2">
              <img src={Visual} alt="" /> <p>Visual</p>
            </span>{" "}
            72 / 100
          </div>
          <a
            href="#"
            className="bg-darkGrayBlue text-white flex justify-center items-center rounded-full p-2 mt-2"
          >
            Continue
          </a>
        </div>
      </div>
    </section>
  );
};

export default Summary;
