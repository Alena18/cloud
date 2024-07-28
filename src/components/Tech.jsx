import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleBallTouch = () => {
    setButtonVisible(false);
  };

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
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} onBallTouch={handleBallTouch} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
