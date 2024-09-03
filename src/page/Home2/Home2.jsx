import React from "react";
import Header from "../Header";
import styled from "styled-components";
import Hero2 from "./Hero2";
import About2 from "./About2";
import CoreServices2 from "./CoreServices2";
import Banner from "./Banner";
import BackToTop from "../../components/BackToTop";
import Blog from "./Blog";
import Footer from "../Footer";

const Home2 = () => {
  return (
    <StyledCover>
      <Hero2 />
      <About2 />
      <CoreServices2 />
      <Banner />
      <BackToTop />
      <Blog />
      <Footer />
    </StyledCover>
  );
};

const StyledCover = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home2;
