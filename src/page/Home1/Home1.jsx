import React from "react";
import styled from "styled-components";
import Hero from "./Hero.jsx";
import CoreServices from "./CoreServices.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "../Footer.jsx";
import Expert from "./Expert.jsx";
import BackToTop from "../../components/BackToTop.jsx";

const Home1 = () => {
  return (
    <Cover>
      <Hero />
      <CoreServices />
      <About />
      <Expert />
      <Contact />
      <Footer />
      <BackToTop />
    </Cover>
  );
};

const Cover = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default Home1;
