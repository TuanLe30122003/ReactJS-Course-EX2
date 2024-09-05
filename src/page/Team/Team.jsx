import React from "react";
import styled from "styled-components";
import Header from "../Header";
import BackToTop from "../../components/BackToTop";
import Expert from "../Home1/Expert";
import Assist from "./Assist";
import Banner4 from "./Banner4";
import Slider from "./Slider";
import Footer from "../Footer";

const Team = () => {
  return (
    <StyledTeam>
      <Header />
      <BackToTop />
      <Expert subTitle="Our Team" title="We are Professional" />
      <Assist />
      <Banner4 />
      <Slider />
      <Footer />
    </StyledTeam>
  );
};

const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .expert {
    transform: translate(0, -72px);
  }

  .expert > .title-and-des {
    transform: translate(-39px, 0);
  }

  .expert > .title-and-des p {
    margin-top: 8px;
  }

  .expert .expert-section {
    transform: translate(0, -15px);
  }

  @media screen and (max-width: 1224px) {
    .expert > .title-and-des {
      transform: translate(0, 0);
    }
  }
`;

export default Team;
