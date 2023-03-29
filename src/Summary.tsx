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
      <div className="flex">
        {/* Left Column */}
        <div className="w-1/2 bgGradient rounded-lg p-8 flex flex-col items-center gap-4">
          <h2 className="text-xl text-lightLavender">Your Result</h2>
          <div className="circleGradient aspect-square rounded-full text-lightLavender flex flex-col justify-center items-center">
            <span className="text-5xl text-paleBlue">76</span> of 100
          </div>
          <p className="text-2xl text-paleBlue">Great</p>
          <p className="text-center text-lightLavender">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        {/* Right Column */}
        <div className="w-1/2 bg-white p-8">
          <h2 className="text-xl font-bold text-darkGrayBlue">Summary</h2>

          <div className="flex gap-2">
            <img src={Reaction} alt="" /> Reaction 80 / 100
          </div>
          <div className="flex gap-2">
            <img src={Memory} alt="" /> Memory 92 / 100
          </div>
          <div className="flex gap-2">
            <img src={Verbal} alt="" /> Verbal 61 / 100
          </div>
          <div className="flex gap-2">
            <img src={Visual} alt="" /> Visual 72 / 100
          </div>
          <a
            href="#"
            className="bg-darkGrayBlue text-white flex justify-center items-center rounded-full p-2"
          >
            Continue
          </a>
        </div>
      </div>
    </section>
  );
};

export default Summary;
