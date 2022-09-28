import { serviceData } from "../../../utils/data";
import {motion} from 'framer-motion'
import { fadeInLeft, rotateImage, staggerContainer, staggerTextContainer, zoomOut } from "../../../utils/variants";


export const Services = () => {
  return (
    <section
      className="w-full min-h-screen bg-lightBlue py-28 px-10 md:px-12 lg:px-20 "
      id="services"
    >
      <motion.div
        className="flex flex-col gap-16 items-center"
        variants={staggerContainer}
        initial="initial"
        viewport={{ once: false, amount: 0.4 }}
        whileInView="animate"
      >
        {/* TITLE TEXT */}

        <motion.div
          className="flex flex-col gap-8 items-center text-center max-w-lg"
          variants={staggerTextContainer}
          initial="initial"
          viewport={{ once: false, amount: 0.4 }}
          whileInView="animate"
        >
          <motion.p
            className="text-black text-base md:text-xl font-semibold"
            variants={zoomOut}
          >
            Services
          </motion.p>
          <motion.h4
            className="text-black text-3xl md:text-5xl font-bold"
            variants={zoomOut}
          >
            We Provide
          </motion.h4>
          <motion.p
            className="text-bodyColor text-sm md:text-md text-normal"
            variants={zoomOut}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            mattis nunc aliquam tincidunt est non. Viverra nec eu.
          </motion.p>
        </motion.div>

        {/* SERVICES GRID */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          viewport={{ once: false, amount: 0.4 }}
          whileInView="animate"
        >
          {serviceData.map((item, id) => {
            return (
              <motion.div
                key={id}
                className="bg-white px-12 py-12 flex flex-col gap-4  w-full text-center"
                variants={fadeInLeft}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-20"
                 
                />
                <h4 className="text-black text-lg md:text-xl font-bold">
                  {item.title}
                </h4>
                <p className="text-bodyColor text-xs md:text-sm text-normal">
                  {item.txt}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
