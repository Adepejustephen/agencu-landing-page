import { HeroImage } from "../../../assets";
import { Button } from "../../generalComponents";
import {motion} from  'framer-motion'
import { blueBtn, buttonFadeInLeft, fadeInLeft, fadeInRight, staggerBtns, staggerContainer, staggerTextContainer, whiteBtn } from "../../../utils/variants";


export const Hero = () => {
  return (
    <section className="w-full min-h-screen px-10 md:px-12 lg:px-20 py-10">
      <motion.div
        className=" w-full flex flex-col-reverse md:flex-row items-center justify-between min-h-full gap-6"
        variants={staggerContainer}
        initial="initial"
        viewport={{ once: false, amount: 0.4 }}
        whileInView="animate"
      >
        {/* HERO LEFT */}

        <motion.div
          className="flex flex-col justify-center text-center gap-8 md:w-6/12 md:justify-start md:text-left "
          variants={staggerTextContainer}
          initial="initial"
          viewport={{ once: false, amount: 0.4 }}
          whileInView="animate"
        >
          <motion.h2
            className="text-black text-3xl md:text-4xl lg:text-6xl font-bold"
            variants={fadeInRight}
          >
            We are the best agency in the world
          </motion.h2>
          <motion.p
            className="text-black text-sm md:text-base font-normal"
            variants={fadeInRight}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row gap-5"
            variants={staggerBtns}
            initial="initial"
            viewport={{ once: false, amount: 0.4 }}
            whileInView="animate"
          >
            <Button variants={blueBtn}>Start a Project</Button>
            <Button whiteBg variants={whiteBtn}>
              Learn more
            </Button>
          </motion.div>
        </motion.div>

        {/* HERO RIGHT */}

        <motion.div className="md:w-6/12" variants={fadeInLeft}>
          <img src={HeroImage} alt="hero" className="object-cover w-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
