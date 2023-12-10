import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { openurl, viewmore } from "../assets";
import { SectionWrapper } from "../hoc";
import { modals, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useContext } from "react";
import { AppContext } from "../App";

const ProjectCard = ({
  id,
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const { setOpen } = useContext(AppContext);
  const { setId } = useContext(AppContext);

  let modal;
  for (let i = 0; i < modals.length; i++) {
    if (modals[i].id == id) {
      modal = modals[i];
    }
  }

  return (
    <motion.div
      onClick={() => {
        if (modal) {
          setOpen(true);
          setId(id);
        }
      }}
      className={modal && "cursor-pointer"}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] z-0">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* if you want something on top of an image then use absolute */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
            {modal && (
              <div className="bg-zinc-900 w-7 h-7 rounded-md flex justify-center items-center">
                <img
                  src={viewmore}
                  alt="source code"
                  className="w-[90%] h-[90%] object-contain"
                />
              </div>
            )}
            {source_code_link && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className="bg-zinc-900 w-7 h-7 rounded-md flex justify-center items-center cursor-pointer"
              >
                <img
                  src={openurl}
                  alt="source code"
                  className="w-[80%] h-[80%] object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div>
        <p id="projects" className={`${styles.sectionSubText} `}>
          Meine Projekte
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Projekte.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Die folgenden Projekte zeigen meine Fähigkeiten und Erfahrungen anhand
          von realen Beispielen meiner Arbeit. Jedes Projekt wird kurz
          beschrieben und kann Links zum Projekt und/oder weitere Informationen
          enthalten. Sie spiegeln meine Fähigkeit wider, komplexe Probleme zu
          lösen, mit verschiedenen Technologien zu arbeiten und Projekte
          effektiv zu managen.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            id={project.id}
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");
