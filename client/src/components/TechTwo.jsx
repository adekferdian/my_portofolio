import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies2 } from "../constants";

const TechTwo = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 max-w-7xl' style={{marginTop: -60}} >
      {technologies2.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(TechTwo, "");
