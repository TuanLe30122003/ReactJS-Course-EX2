import React from "react";
import Header from "../Header";
import BackToTop from "../../components/BackToTop";
import styled from "styled-components";
import Banner5 from "./Banner5";
import BlogMain from "./BlogMain";
import Footer from "../Footer";

const Blog = () => {
  return (
    <StyledBlog>
      <Header />
      <BackToTop />
      <Banner5 />
      <BlogMain />
      <Footer />
    </StyledBlog>
  );
};

const StyledBlog = styled.div`
  .footer {
    margin-top: 290px;
  }
`;

export default Blog;
