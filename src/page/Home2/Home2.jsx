import React from "react";
import Header from "../Header";
import styled from "styled-components";
import Hero2 from "./Hero2";
import About2 from "./About2";
import CoreServices2 from "./CoreServices2";

const Home2 = () => {
  return (
    <StyledCover>
      <Hero2 />
      <About2 />
      <CoreServices2 />
    </StyledCover>
  );
};

const StyledCover = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default Home2;
