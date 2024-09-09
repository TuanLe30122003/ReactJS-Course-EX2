import React from "react";
import styled from "styled-components";
import { asset } from "../../assets/assets";

const Banner5 = () => {
  return (
    <StyledBlog>
      <div className="bg">
        <img src={asset.blogbg} alt="" />
      </div>

      <div className="blur">
        <img src={asset.blogblur} alt="" />
      </div>

      <div className="title">
        <h2>Blog</h2>
        <p>Home • Blog</p>
      </div>
    </StyledBlog>
  );
};

const StyledBlog = styled.div`
  position: relative;
  min-height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -20px;

  .bg,
  .blur {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .bg img,
  .blur img {
    width: 100%;
    object-fit: cover;
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    gap: 945px;
  }

  h2 {
    font-family: Poppins;
    font-size: 36px;
    font-weight: 600;
    line-height: 45px;
    text-align: left;
    color: #ffffff;
  }

  p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: right;
    color: #d9d9d9;
  }

  @media only screen and (max-width: 1224px) {
    .bg img,
    .blur img {
      min-height: 250px;
    }

    .title {
      gap: 745px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .title {
      gap: 400px;
    }
  }

  @media only screen and (max-width: 700px) {
    .title {
      gap: 220px;
    }
  }

  @media only screen and (max-width: 450px) {
    .title {
      gap: 110px;
    }
  }
`;

export default Banner5;
