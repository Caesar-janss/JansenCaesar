import React from 'react';
import { Linkedin, MessageCircle, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="connect" className="py-40 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
          Get <span className="inline-block relative">
            In Touch
            <span className="absolute left-0 bottom-1 w-full h-1.5 bg-teal-400 rounded-full opacity-80"></span>
          </span>
        </h2>
        
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
          I'm currently open to new opportunities and collaborations. 
          Feel free to reach out via Instagram DM or other platforms below.
        </p>

        <div className="pt-4 flex flex-col items-center gap-10">
          <a 
            href={PERSONAL_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-400 hover:bg-teal-300 text-slate-900 px-10 py-4 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-teal-500/20"
          >
            let's be friends
          </a>

          <div className="flex items-center gap-10 pt-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-all transform hover:scale-110"
            >
              <Linkedin size={32} strokeWidth={1.5} />
            </a>

            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-all transform hover:scale-110"
            >
              <MessageCircle size={32} strokeWidth={1.5} />
            </a>

            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-all transform hover:scale-110"
            >
              <Instagram size={32} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
