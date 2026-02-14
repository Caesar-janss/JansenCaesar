import React from "react";
import { Download, Smile } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

const Hero: React.FC = () => {
  return (
   <section 
  id="home" 
  className="
    min-h-screen 
    flex items-start 
    px-6
    pt-24 lg:pt-28
  "
>

      <div className="w-full max-w-6xl mx-auto py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16">

        <div
          className="
            flex-1 space-y-8 text-center lg:text-left
            opacity-0 animate-fade-up
          "
          style={{ animationDelay: "100ms" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sky-400 text-xs font-semibold uppercase">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            Informatics Engineering
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Creative <span className="text-sky-400">Engineer</span> <br />
            at Heart.
          </h1>

          <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
            I'm <span className="text-white font-medium">Jansen Caesar</span>.{" "}
            {PERSONAL_INFO.description}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a
                href={PERSONAL_INFO.cvUrl}
                download
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-3.5 rounded-2xl font-bold transition-all"
            >
              <Download size={20} />
              CV Jansen
            </a>
          </div>
        </div>

        <div
          className="
            relative flex-1 flex justify-center
            opacity-0 animate-scale-in
          "
          style={{ animationDelay: "300ms" }}
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            <img
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-3xl"
            />

            <div className="absolute -bottom-4 -right-4 glass p-4 rounded-2xl animate-bounce">
              <Smile className="text-sky-400" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;