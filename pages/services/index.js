// components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// meta data
export const metadata = {
  title: "Hani Abdallah - Services",
  description:
    "Welcome To 'my personal portfolio' Discover best techs in the whole world!",
};

const Services = () => {
  return (
    <div className="h-full py-36 flex items-center bg-primary/30">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex flex-col mb-4 xl-mb-0 xl:w-[30vw] lg:text-left">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="h2 xl:mt-8"
            >
              My Services
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              modi. Nisi, corrupti iusto voluptas repellat.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
