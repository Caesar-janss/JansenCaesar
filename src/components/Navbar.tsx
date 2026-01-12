import React, { useEffect } from "react";
import {
  Home,
  Book,
  Linkedin,
  Instagram,
  Smile,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../constants";

/* =========================
   NAV ITEM COMPONENT
========================= */

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  external?: boolean;
  href?: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  active,
  external,
  href,
  onClick,
}) => {
  // ===== EXTERNAL LINK =====
  if (external && href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="relative p-3 rounded-full text-slate-300 hover:text-white hover:bg-white/10"
      >
        {icon}

        <span
          className="
            absolute -top-9 left-1/2 -translate-x-1/2
            bg-black/80 backdrop-blur-md
            px-2 py-1 rounded
            text-[10px] font-semibold
            opacity-0 group-hover:opacity-100
            transition-opacity
            pointer-events-none
            uppercase tracking-wide
            whitespace-nowrap
          "
        >
          {label}
        </span>
      </motion.a>
    );
  }

  // ===== INTERNAL SCROLL BUTTON =====
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`
        relative p-3 rounded-full group
        transition-colors duration-300
        ${
          active
            ? "bg-sky-500 text-white shadow-lg shadow-sky-500/40"
            : "text-slate-300 hover:text-white hover:bg-white/10"
        }
      `}
    >
      <motion.div
        animate={{
          rotate: active ? 360 : 0,
          scale: active ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        {icon}
      </motion.div>

      <span
        className="
          absolute -top-9 left-1/2 -translate-x-1/2
          bg-black/80 backdrop-blur-md
          px-2 py-1 rounded
          text-[10px] font-semibold
          opacity-0 group-hover:opacity-100
          transition-opacity
          pointer-events-none
          uppercase tracking-wide
          whitespace-nowrap
        "
      >
        {label}
      </span>
    </motion.button>
  );
};

/* =========================
   NAVBAR
========================= */

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
}) => {
  // ===== Scroll Spy =====
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveSection]);

  // ===== Smooth Scroll =====
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-8 inset-x-0 z-[200] flex justify-center"
    >
      <nav className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 shadow-xl">
        <NavItem
          label="Home"
          icon={<Home size={20} />}
          active={activeSection === "home"}
          onClick={() => scrollTo("home")}
        />

        <NavItem
          label="About"
          icon={<Smile size={20} />}
          active={activeSection === "about" || activeSection === "skills"}
          onClick={() => scrollTo("about")}
        />

        <NavItem
          label="Projects"
          icon={<Book size={20} />}
          active={activeSection === "projects"}
          onClick={() => scrollTo("projects")}
        />

        <div className="w-px h-6 bg-white/10 mx-1" />

        <NavItem
          label="LinkedIn"
          icon={<Linkedin size={20} />}
          external
          href={PERSONAL_INFO.linkedin}
        />

        <NavItem
          label="WhatsApp"
          icon={<MessageCircle size={20} />}
          external
          href={PERSONAL_INFO.whatsapp}
        />

        <NavItem
          label="Instagram"
          icon={<Instagram size={20} />}
          external
          href={PERSONAL_INFO.instagram}
        />
      </nav>
    </motion.div>
  );
};

export default Navbar;
