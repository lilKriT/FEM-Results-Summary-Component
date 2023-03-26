import React from "react";

const Summary = () => {
  return (
    <section className="bg-paleBlue h-screen w-screen flex justify-center ">
      <div>
        {/* Left Column */}
        <div className="bgGradient rounded-lg p-4">
          <h2>Your Result</h2>
          <div className="circleGradient rounded-full">
            <span className="text-3xl">76</span> of 100
          </div>
          Great You scored higher than 65% of the people who have taken these
          tests.
        </div>
        {/* Right Column */}
        <div className="bg-white">
          Summary Reaction 80 / 100 Memory 92 / 100 Verbal 61 / 100 Visual 72 /
          100 Continue
        </div>
      </div>
    </section>
  );
};

export default Summary;
