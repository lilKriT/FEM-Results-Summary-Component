import React from "react";

const Summary = () => {
  return (
    <section className="bg-paleBlue h-screen w-screen flex justify-center items-center ">
      <div className="flex">
        {/* Left Column */}
        <div className="w-1/2 bgGradient rounded-lg p-4">
          <h2>Your Result</h2>
          <div className="circleGradient rounded-full">
            <span className="text-3xl">76</span> of 100
          </div>
          Great You scored higher than 65% of the people who have taken these
          tests.
        </div>
        {/* Right Column */}
        <div className="w-1/2 bg-white">
          <h2>Summary</h2>
          <div> Reaction 80 / 100</div>
          <div>Memory 92 / 100</div>
          <div>Verbal 61 / 100</div>
          <div>Visual 72 / 100</div>
          <a href="#">Continue</a>
        </div>
      </div>
    </section>
  );
};

export default Summary;
