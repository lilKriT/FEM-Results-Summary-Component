import React from "react";

const Summary = () => {
  return (
    <section className="bg-emerald-200 h-screen w-screen flex justify-center ">
      <div>
        {/* Left Column */}
        <div className="bgGradient rounded-lg p-4">
          <h2>Your Result</h2>
          76 of 100 Great You scored higher than 65% of the people who have
          taken these tests.
        </div>
        {/* Right Column */}
        <div></div>
      </div>
    </section>
  );
};

export default Summary;
