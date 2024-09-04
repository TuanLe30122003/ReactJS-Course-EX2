import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Video from "./Video";
import Expert from "../Home1/Expert";
import Slogan from "./Slogan";
import VisionAndMission from "./VisionAndMission";
import Client from "./Client";
import Footer from "../Footer";

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <Header />
      <Video />
      <Expert />
      <Slogan />
      <VisionAndMission />
      <Client />
      <Footer />
    </StyledAboutPage>
  );
};

const StyledAboutPage = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .expert-section {
    margin-top: 2px;
  }
`;

export default AboutPage;
