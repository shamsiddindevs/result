import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Program from "./components/Program";
import Testimonal from "./components/Testimonal";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Result from "./components/Result";
import Tarif from "./components/Tarif";
import Savol from "./components/Savol";

const App = () => {
  return (
    <div style={{background:"linear-gradient(rgb(72, 138, 249) 0%, rgb(81, 163, 254) 100%)"}}>
      <Navbar />     
      <Hero />
      <About />
      <Program />
      <Result/>
      <Tarif/>
      <Savol/>
      <Testimonal />
      <Contact />
      <Shop />
    </div>
  );
};

export default App;
