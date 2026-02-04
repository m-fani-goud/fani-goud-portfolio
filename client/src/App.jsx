import { useState } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollIndicator from "./components/ScrollIndicator";
import AnimatedCursor from "./components/AnimatedCursor";
import SocialBar from "./components/SocialBar";
function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <Navbar />
          <AnimatedCursor />
          <ScrollIndicator />

          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />

          <ScrollToTop />
          <SocialBar />
        </>
      )}
    </>
  );
}

export default App;
