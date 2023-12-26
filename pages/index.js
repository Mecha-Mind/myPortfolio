// next image
import Image from "next/image";
// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
// frame motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container flex flex-col justify-center h-full text-center lg:text-left lg:pt-40 mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas
            <br />
            into
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto lg:mx-0 mb-10 lg:mb-15 max-w-sm lg:max-w-xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            totam, exercitationem libero consectetur adipisicing elit sed
            similique enim.
          </motion.p>
          {/* btn */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:hidden relative"
          >
            <ProjectsBtn />
          </motion.div>
          {/* xl screen btn */}
          <motion.div
            className="hidden xl:flex"
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat w-full h-full mix-blend-color-dodge absolute"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar image */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-20 lg:bottom-40 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
