import { useState, useEffect } from "react";

const genRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
};

let interval;

const Box = () => {
  const [color, setColor] = useState("black");
  const [isEnter, setIsEnter] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isEnter && !isClicked) {
      interval = setTimeout(() => {
        setColor(genRandomColor());
      }, 500);
    }
  }, [color, isEnter, isClicked]);

  const handleMouseEnter = () => {
    setIsEnter(true);
  };

  const handleMouseLeave = () => {
    setIsEnter(false);
    setIsClicked(false);
    clearTimeout(interval);
  };

  const handleDoubleClick = () => {
    if (!isClicked) {
      clearTimeout(interval);
    }
    setIsClicked(!isClicked);
  };
  return (
    <div
      className="Box"
      style={{ backgroundColor: color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDoubleClick={handleDoubleClick}
    ></div>
  );
};

export default Box;
