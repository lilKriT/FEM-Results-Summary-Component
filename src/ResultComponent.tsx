import React, { useEffect, useState } from "react";

interface IResultComponent {
  element: { icon: string; score: number; category: string };
}

const ResultComponent = ({ element }: IResultComponent) => {
  const [url, seturl] = useState("");

  const getImage = async () => {
    const img = await import(element.icon);
    // const res = await img.blob();
    console.log(element.icon);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="flex gap-2">
      <img src={""} alt="" /> {url}
      {element.category} {element.score} / 100
    </div>
  );
};

export default ResultComponent;
