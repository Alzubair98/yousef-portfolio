import React from "react";
import Navbar from "../Nabar/Navbar";
import Intro from "../Intro/Intro";
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import Works from "../Works/Works";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
