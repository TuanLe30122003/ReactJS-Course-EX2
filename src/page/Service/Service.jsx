import React from "react";
import styled from "styled-components";
import Header from "../Header";
import CoreService3 from "./CoreService3";
import BackToTop from "../../components/BackToTop";
import ServiceDetail from "./ServiceDetail";
import Banner2 from "./Banner2";
import FAQ from "./FAQ";
import Footer from "../Footer";

const Service = () => {
  return (
    <StyledSerVice>
      <Header />
      <CoreService3 />
      <BackToTop />
      <ServiceDetail />
      <Banner2 />
      <FAQ />
      <BackToTop />
      <Footer />
    </StyledSerVice>
  );
};

const StyledSerVice = styled.div``;

export default Service;
