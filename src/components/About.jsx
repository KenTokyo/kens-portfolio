import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "./../utils/motion";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";

//ServiceCard ist eine Komponente mit Parameter (Props), welche sie reinbekommt
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Einführung</p>
        <h2 className={styles.sectionHeadText}>Übersicht.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        Ich bin Omed, ein Junior-Softwareentwickler mit Fachkenntnissen in
        React, Svelte, Java, C#, HTML und CSS. Ich zeichne mich durch die
        Erstellung dynamischer Webanwendungen aus und habe ein Talent dafür,
        schnell neue Technologien zu erlernen. Mit einer soliden Grundlage in
        der Front-End-Entwicklung und einem fundierten Verständnis für
        Back-End-Systeme gedeihe ich in schnelllebigen Umgebungen. Lass uns
        gemeinsam innovative Lösungen entwickeln!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(About, "about");
