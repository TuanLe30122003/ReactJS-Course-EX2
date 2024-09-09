import React from "react";
import Header from "../Header";
import BackToTop from "../../components/BackToTop";
import Form from "./Form";
import GetInTouch from "./GetInTouch";
import Footer from "../Footer";
import styled from "styled-components";

const ContactPage = () => {
  return (
    <StyledContactPage>
      <Header />
      <BackToTop />
      <Form />
      <GetInTouch />
      <Footer />
    </StyledContactPage>
  );
};

const StyledContactPage = styled.div`
  .footer {
    margin-top: 353px;
  }

  @media only screen and (max-width: 700px) {
    .footer {
      margin-top: 153px;
    }
  }
`;

export default ContactPage;
