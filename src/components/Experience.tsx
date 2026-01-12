import React, { useEffect, useRef, useState } from "react";
import { EXPERIENCES } from "../constants";
import { MdWork } from "react-icons/md";
import SectionTitle from "./SectionTitle";

const Experience: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="experience"
      className="py-20 sm:py-24 lg:py-28"
    >
      <SectionTitle>Experience</SectionTitle>

      <div className="max-w-3xl mx-auto relative py-8 sm:py-10">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-secondary -translate-x-1/2" />

        {EXPERIENCES.map((item, index) => (
          <div
            key={index}
            className={`
              mb-14 relative
              opacity-0
              ${visible ? "animate-fade-in-up opacity-100" : ""}
            `}
          >
            <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 z-10">
              <div className="
                w-8 h-8 sm:w-9 sm:h-9
                rounded-full bg-accent
                flex items-center justify-center
                ring-4 ring-primary
              ">
                <MdWork className="text-primary text-sm" />
              </div>
            </div>

            <div
              className={`pl-12 md:pl-0 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-8 md:text-right"
                  : "md:ml-auto md:pl-8"
              }`}
            >
              <div className="bg-secondary p-5 sm:p-6 rounded-lg shadow-lg">
                <h3 className="text-accent font-bold">{item.role}</h3>
                <p className="text-white-text">{item.company}</p>
                <p className="text-light-gray text-sm">{item.period}</p>
                <p className="text-light-gray text-sm mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
