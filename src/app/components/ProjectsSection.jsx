"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Comics - API MARVEL",
    description: "Web App that allows you to list comics, characters and obtain information about them.",
    image: "/images/marvel-comic.jpg",
    tag: ["All", "Dev"],
    gitUrl: "https://github.com/Molly2605/Comics-MARVEL",
    previewUrl: "https://molly2605.github.io/Comics-MARVEL/",
  },
  {
    id: 2,
    title: "Expense Calculator",
    description: "Web App allows users to enter their expenses and get a clear summary of their finances.",
    image: "/images/expense-calculator.jpg",
    tag: ["All", "Dev"],
    gitUrl: "https://github.com/Molly2605/Expense-Calculator",
    previewUrl: "https://molly2605.github.io/Expense-Calculator/",
  },
  {
    id: 3,
    title: "✨My first portfolio✨",
    description: "my first portfolio with pure HTML and CSS",
    image: "/images/baby-bunny.jpg",
    tag: ["All", "Dev"],
    gitUrl: "https://github.com/Molly2605/portfolio-DEMO",
    previewUrl: "https://molly2605.github.io/portfolio-DEMO/#about-me",
  },
  {
    id: 4,
    title: "IA:mæv",
    description: "AI fashion assistant called :mæv",
    image: "/images/ia-app.jpg",
    tag: ["All", "UX/UI"],
    gitUrl: "",
    previewUrl: "https://docs.google.com/presentation/d/18G7e6cL6IMx84EpDNUdF5yKVHJMHgmYHgQyWP5rkJZY/edit?usp=sharing",
  },
  {
    id: 5,
    title: "Icon design - Bad Moon",
    description: "Instagram and Discord designs for a group of gamer girls called 'Legión Lunari'",
    image: "/images/bad-moon.gif",
    tag: ["All", "UX/UI"],
    gitUrl: "",
    previewUrl: "https://drive.google.com/file/d/1HjiLBVskDmMLKzlRM2T1END5X3DJOfWX/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Icon design - Blackpink Moon",
    description: "Instagram and Discord designs for a group of gamer girls called 'Legión Lunari'",
    image: "/images/blackpink-moon.jpg",
    tag: ["All", "UX/UI"],
    gitUrl: "",
    previewUrl: "https://drive.google.com/file/d/1ExH_WRWDYKIY6_t5reULfwp5RgdT_W_7/view?usp=sharing",
  },
  {
    id: 7,
    title: "Icon design - All Colors",
    description: "Instagram and Discord designs for a group of gamer girls called 'Legión Lunari'",
    image: "/images/all-colors.gif",
    tag: ["All", "UX/UI"],
    gitUrl: "",
    previewUrl: "https://drive.google.com/file/d/1xeezrE_3tlvwp01o_olZwlC8tsyrMHKF/view?usp=sharing",
  },
  {
    id: 8,
    title: "Icon design - Black Cat",
    description: "Instagram and Discord designs for a group of gamer girls called 'Legión Lunari'",
    image: "/images/tarot-cat.gif",
    tag: ["All", "UX/UI"],
    gitUrl: "",
    previewUrl: "https://drive.google.com/file/d/1rhxFnbYza5oDE9YsM1u_k6FMZ3bSZ9pJ/view?usp=sharing",
  },
  {
    id: 9,
    title: "Icon design - Red Moon",
    description: "Instagram and Discord designs for a group of gamer girls called 'Legión Lunari'",
    image: "/images/red-moon.gif",
    tag: ["All", "UX/UI"],
    gitUrl: "",
    previewUrl: "https://drive.google.com/file/d/1kXr--z7G_NsdVyECpxt58209JIHNhnv2/view?usp=sharing",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="lg:py-20">
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Dev"
          isSelected={tag === "Dev"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UX/UI"
          isSelected={tag === "UX/UI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
