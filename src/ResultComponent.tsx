import React from "react";

interface IResultComponent {
  element: { icon: string; score: number; category: string };
}

const ResultComponent = ({ element }: IResultComponent) => {
  return (
    <div className="flex gap-2">
      <img src={element.icon} alt="" /> {element.icon}
      {element.category} {element.score} / 100
    </div>
  );
};

export default ResultComponent;
