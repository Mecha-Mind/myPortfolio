// react hooks
import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// components
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2025 - 2025",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2025 - 2025",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2025 - 2025",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2025 - 2025",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2025 - 2025",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2025",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2025",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2025",
      },
    ],
  },
];

// framer motion and variants
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full py-32 xl:text-left bg-primary/30 text-center">
      {/* circles */}
      <Circles />
      {/* avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex w-[400px] absolute bottom-0 -left-[170px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col xl:flex-row gap-x-6 items-center lg:items-start">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent sites.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[450px] mb-6 xl:mb-12 mx-auto xl:mx-0 px-2 xl:px-0"
          >
            2 years ago, i began freelancing as a developer. since then, I've
            done remote work for agencies, consulted for startups, and
            collaborated for a digital products for business and consumer use.
          </motion.p>
        </div>
        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-8"
          >
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-red-600 after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:absolute after:w-8 after:h-[2px] after:bg-white after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col py-2 xl:py-5 gap-y-2 xl:gap-y-5 items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="mb-2 md:mb-0 font-light">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-3">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
