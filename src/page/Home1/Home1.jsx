import React from "react";
import styled from "styled-components";
import Hero from "./Hero.jsx";
import CoreServices from "./CoreServices.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "../Footer.jsx";
import Expert from "./Expert.jsx";
import { useEffect, useState } from "react";

const Home1 = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 700; // Mức cuộn trang mà bạn muốn hiển thị element (300px ở đây)

      if (scrollPosition > threshold) {
        setShowElement(true);
      } else {
        setShowElement(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Cover>
      <Hero />
      <CoreServices />
      <About />
      <Expert />
      <Contact />
      <Footer />

      {showElement && (
        <a className="back-to-top" href="#">
          <ion-icon name="arrow-up-outline"></ion-icon>
        </a>
      )}
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

  @media screen and (max-width: 1224px) {
  .back-to-top {
    right: 40px;
    bottom: 150px;
  }

  @media screen and (max-width: 450px) {
  .back-to-top {
    right: 40px;
    bottom: 250px;
  }
`;

export default Home1;
