  import { useEffect, useState } from "react";

  import Background from "./components/Background";
  import Navbar from "./components/Navbar";
  import Hero from "./components/Hero";
  import About from "./components/About";
  import Skills from "./components/Skills";
  import Projects from "./components/Project";
  import Experience from "./components/Experience";
  import Education from "./components/Education";
  import Contact from "./components/Contact";
  
function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-white">

      <Background />

      <div className="relative z-10">
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <main className="relative z-10">
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="education"><Education /></section>
          <section id="contact"><Contact /></section>
        </main>
      </div>
    </div>
  );
}

export default App;
