import React, { useState } from "react";
import styled from "styled-components";
import Introduction from "../Introduction";
import MainLogo from "../../components/MainLogo";
import Navigation from "../../components/Navigation";
import Header from "../Header";

const Hero = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <>
      <StyledHero>
        <Header />

        <Introduction />
      </StyledHero>
    </>
  );
};

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;
`;

export default Hero;
