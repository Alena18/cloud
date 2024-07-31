import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust width as needed

  const handleBallTouch = () => {
    setButtonVisible(false);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768); // Adjust width as needed
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine number of balls to display based on screen size
  const visibleTechnologies = isMobile
    ? technologies.slice(0, 4)
    : technologies;

  return (
    <div className="flex flex-col items-center">
      {buttonVisible && (
        <button
          className="button button-top-5"
          onClick={() => setButtonVisible(false)}
        >
          Spin the balls
        </button>
      )}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {visibleTechnologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} onBallTouch={handleBallTouch} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
