import React from "react";
import styles from "./Home.module.css";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Artists from "./Components/Artists/Artists";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Gallery />
      <Artists />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
