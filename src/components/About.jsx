import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Link to={title} smooth={true} duration={500} offset={-90}>
    <Tilt className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full sm:w-[250px] xs:w-[200px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] min-w-[180px] flex justify-evenly items-center flex-col w-full"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  </Link>
);

const About = () => {
  return (
    <>
      {/* Scroll Button */}
      <div className="scroll absolute xs:top-0 w-full flex justify-center items-center">
        <Link to="about" smooth={true} duration={500}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>

      {/* About Section */}
      <Element name="about">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As a skilled software developer experienced in Python and JavaScript,
          I specialize in frameworks such as React, Node.js, and Three.js. I am
          a quick learner who excels in collaborating closely with clients to
          develop efficient, scalable, and user-friendly solutions that address
          real-world challenges. Let’s work together to bring your ideas to
          life!
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center flex-col-sm-screen ">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </Element>
    </>
  );
};

export default SectionWrapper(About, "about");
