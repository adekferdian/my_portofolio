import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Contact = () => {
  const [text] = useTypewriter({
    words: ["Mobile applications", "interfaces", "Web applications"],
    loop: {},
  });

  return (
    <div className="relative">
      <div>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          <section 
            className={`relative w-full mx-auto bg-black`}
          >
            <div
              className={`absolute inset-0 top-[120px]  max-w-9xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
              <motion.div
                variants={fadeIn("bottom", "tween", .2, 1)}
              >
                <div className="flex flex-col justify-center items-center mt-5">
                  <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                  <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("bottom", "tween", 1, 1)}
              >
                <div>
                  <h1 className={`${styles.heroHeadText} text-white`}>
                    Hi, I'm <span className="text-[#915EFF]">Adek Ferdian.</span>
                  </h1>
                  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    I develop
                    <span className="text-[#915EFF] ml-2">{text}</span>
                    <span>
                      <Cursor />
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "");
