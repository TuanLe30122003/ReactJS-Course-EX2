import React from "react";
import styled from "styled-components";
import Header from "../Header";
import BackToTop from "../../components/BackToTop";
import Footer from "../Footer";
import Picture from "./Picture";
import Banner3 from "./Banner3";
import Appointment from "./Appointment";

const Gallery = () => {
  return (
    <StyledGallery>
      <Header />
      <Picture />
      <Banner3 />
      <Appointment />
      <Footer />
      <BackToTop />
    </StyledGallery>
  );
};

const StyledGallery = styled.div``;

export default Gallery;
