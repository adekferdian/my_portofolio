import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologiesWeb } from "../constants";

const TechWeb = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 max-w-7xl'>
      {
        technologiesWeb.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))
      }
    </div>
  );
};

export default SectionWrapper(TechWeb, "");
