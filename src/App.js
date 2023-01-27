import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter, Link } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import hero from "./images/hero.jpg";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#EAF6F6] text-[#000F17] font-body h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scroll-smooth">
        <Header />
        {/* Hero */}
        <section id="hero" className="-mt-24">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
