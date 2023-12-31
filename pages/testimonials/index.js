// components
import TestimonialSlider from "../../components/TestimonialSlider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// meta data
export const metadata = {
  title: "Hani Abdallah - Testimonials",
  description:
    "Welcome To 'my personal portfolio' Discover best techs in the whole world!",
};

const Testimonials = () => {
  return (
    <section className="h-full bg-primary/30 text-center py-32">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          what clients <span className="text-accent">say.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
