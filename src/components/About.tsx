import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`
        flex flex-col justify-end
        pt-18 pb-10
        scroll-mt-0
        opacity-0
        ${visible ? "animate-fade-in-up opacity-100" : ""}
      `}
    >
      <div className="text-center mb-10">
        <SectionTitle>About Me</SectionTitle>
      </div>
      
      <div className="max-w-5xl mx-auto relative px-6">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-70"></div>
        
        <div className="
          relative
          bg-gradient-to-br from-secondary/80 to-secondary/40 
          backdrop-blur-xl
          rounded-3xl
          px-10 py-10 md:px-16 md:py-14
          shadow-2xl
          border border-white/5
        ">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
          
          <div className="space-y-6 text-left">
            <p className="text-light-gray text-lg leading-relaxed font-light">
              I am a{" "}
              <span className="text-white-text font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                passionate and dedicated informatics student
              </span>{" "}
              from{" "}
              <span className="text-accent font-semibold">
                Universitas Multimedia Nusantara
              </span>
              , with a strong foundation in{" "}
              <span className="text-white-text font-medium">
                software development and problem-solving
              </span>.
            </p>
            
            <p className="text-light-gray text-lg leading-relaxed font-light">
              I thrive on challenges and continuously seek opportunities to grow in
              the ever-evolving world of technology.
            </p>

            <div className="mt-6 p-5 bg-white/5 border-l-4 border-accent rounded-r-xl">
              <p className="text-light-gray text-lg leading-relaxed font-light">
                <span className="text-accent font-semibold block mb-2">My Goal</span>
                To build{" "}
                <span className="text-white-text font-semibold">
                  impactful, efficient, and scalable solutions
                </span>{" "}
                by leveraging my interest in{" "}
                <span className="text-accent font-medium">
                  full-stack development
                </span>,{" "}
               and{" "}
                <span className="text-accent font-medium">
                  artificial intelligence
                </span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;