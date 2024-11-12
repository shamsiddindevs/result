import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";
import Testimonal from "./components/Testimonal";
import Contact from "./components/Contact";
import Shop from "./components/Shop";

const App = () => {
  return (
    <div style={{background:"linear-gradient(rgb(72, 138, 249) 0%, rgb(81, 163, 254) 100%)"}}>
      <Navbar />
      
      <Hero />
      <About />
      <News />
      <Testimonal />
      <Contact />
      <Shop />
    </div>
  );
};

export default App;
