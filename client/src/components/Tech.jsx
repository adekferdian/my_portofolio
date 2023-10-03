import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, technologiesWeb } from "../constants";

const Tech = ({isMobileWidth}) => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 max-w-7xl'>
      {isMobileWidth ? technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))
      :
      technologiesWeb.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))
      }
    </div>
  );
};

export default SectionWrapper(Tech, "");
