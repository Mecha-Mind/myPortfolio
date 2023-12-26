// react icon
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <section className="h-full bg-primary/30">
      <div className="container mx-auto py-32 h-full flex items-center justify-center">
        {/* text & form */}
        <div className="flex flex-col items-center w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-12"
          >
            {"let's"} <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full"
          >
            {/* inputs */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder="message" className="textarea" />
            <button className="btn rounded-full border border-white/50 flex items-center justify-center max-w-[170px] hover:border-accent transition-all duration-300 group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {"let's"} talk
              </span>
              <BsArrowRight className="opacity-0 group-hover:opacity-100 -translate-y-[120%] group-hover:-translate-y-0 transition-all duration-300 group-hover:flex absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
