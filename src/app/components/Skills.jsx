"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Languages",
    id: "Languages",
    content: (
      <div className="flex flex-wrap gap-4 justify-center">
        <image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-20 w-20" />
        <image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="h-20 w-20" />
        <image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="h-20 w-20" />
        <image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-20 w-20" />
      </div>
    ),
  },

  {
    title: "FrameworksAndLibs",
    id: "FrameworksAndLibs",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Angular</li>
        <li>Vue.js</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
      </ul>
    ),
  },

  {
    title: "ToolsAndTech",
    id: "ToolsAndTech",
    content: (
      <ul className="list-disc pl-2">
        <li>Github</li>
        <li>Visual Code Studio</li>
        <li>Trello</li>
        <li>Notion</li>
        <li>Behance</li>
        <li>Figma</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Ilustrator</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>UTN - Universidad Tecnológica Nacional  - Argentina 2020</li>
        <li>ADA IT Woman - Front end - Argentina 2024</li>
        <li>ADA IT Woman- UX/UI - Argentina 2024</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Pinterest Advertising Essentials</li>
      </ul>
    ),
  },
];


const Skills = () => {
  const [tab, setTab] = useState("Languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="skills">
      <div>
        <h2 className="text-center text-4xl font-bold text-white mb-4" >Skills</h2>
        <p></p>
      </div>
      <div className="justify-center flex flex-row text-2xl md:mb-12 mt-8 gap-x-8">
        <TabButton
          selectTab={() => handleTabChange("Languages")}
          active={tab === "Languages"}
        >
          {" "}
          Languages{" "}
        </TabButton>

        <TabButton
          selectTab={() => handleTabChange("FrameworksAndLibs")}
          active={tab === "FrameworksAndLibs"}
        >
          {" "}
          Frameworks and Libraries{" "}
        </TabButton>

        <TabButton
          selectTab={() => handleTabChange("ToolsAndTech")}
          active={tab === "ToolsAndTech"}
        >
          {" "}
          Other Tools and Technologies{" "}
        </TabButton>

        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          {" "}
          Education{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          {" "}
          Certifications{" "}
        </TabButton>
      </div>
      <div className="mt-8">
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>
    </section>
  );
};

export default Skills;
