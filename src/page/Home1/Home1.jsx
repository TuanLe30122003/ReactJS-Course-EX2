import React from "react";
import styled from "styled-components";
import Hero from "./Hero.jsx";
import CoreServices from "./CoreServices.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "../Footer.jsx";
import Expert from "./Expert.jsx";

const Home1 = () => {
  return (
    <Cover>
      <Hero />
      <CoreServices />
      <About />
      <Expert />
      <Contact />
      <Footer />

      <a className="back-to-top" href="#">
        <ion-icon name="arrow-up-outline"></ion-icon>
      </a>
    </Cover>
  );
};

const Cover = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .back-to-top {
    position: fixed;
    bottom: 175px;
    right: 70px;
    z-index: 99;
    padding: 9px;
    background-color: #ff64ae;
    border-radius: 5px;
    width: 36px;
    height: 36px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .back-to-top {
    color: #fff;
    font-size: 18px;
  }
`;

export default Home1;
