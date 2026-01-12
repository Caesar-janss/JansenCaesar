import React, { useEffect, useRef, useState } from "react";
import { SKILLS } from "../constants";
import type { Skill } from "../types";
import SectionTitle from "./SectionTitle";

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div
      className="
        bg-secondary/90 backdrop-blur
        px-6 py-4 rounded-xl
        flex flex-col items-center justify-center
        min-w-[120px] shrink-0
        cursor-pointer
        hover:-translate-y-2
        hover:shadow-xl hover:shadow-accent/20
        border border-transparent hover:border-accent/10
        transition-all duration-300
        group
      "
    >
      <skill.icon 
        size={36} 
        style={{ color: skill.color }} 
        className="transition-transform duration-300 group-hover:scale-110"
      />
      
      <span className="mt-2 text-sm font-semibold text-white-text group-hover:text-accent transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const duplicatedSkills = [...SKILLS, ...SKILLS];

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`
        pt-24 pb-40
        overflow-hidden 
        opacity-0 
        ${visible ? "animate-fade-up opacity-100" : ""}
      `}
    >
      <SectionTitle>Technical Skills</SectionTitle>

      <div className="relative mt-8">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-primary to-transparent" />

        <div
          className={`
            flex w-max
            will-change-transform
            ${visible ? "animate-marquee" : ""}
            hover:[animation-play-state:paused]
          `}
        >
          <div className="flex gap-6 pr-6">
            {duplicatedSkills.map((skill, i) => (
              <SkillItem key={`a-${i}`} skill={skill} />
            ))}
          </div>

          <div className="flex gap-6 pr-6">
            {duplicatedSkills.map((skill, i) => (
              <SkillItem key={`b-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;