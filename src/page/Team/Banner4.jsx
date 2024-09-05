import React from "react";
import { asset } from "../../assets/assets";
import styled from "styled-components";

const Banner4 = () => {
  return (
    <StyledBanner4>
      <div className="bg">
        <img src={asset.banner4bg} alt="" />
      </div>

      <div className="blur">
        <img src={asset.banner4blur} alt="" />
      </div>

      <div className="main">
        <h1>{"Customer satisfaction is\nour main goal"}</h1>
        <p>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,\npurus sit amet luctus venenatis"
          }
        </p>
      </div>
    </StyledBanner4>
  );
};

const StyledBanner4 = styled.div`
  position: relative;
  width: 100%;
  margin-top: 126px;
  min-height: 529px;

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
    object-fit: cover;
    width: 100%;
  }

  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(calc(-50%), calc(-50% - 10px));
  }

  .main h1 {
    font-family: Poppins;
    font-size: 36px;
    font-weight: 600;
    line-height: 45px;
    text-align: center;
    color: #ffffff;
    white-space: pre-line;
    transform: translate(10px, -5px);
  }

  .main p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: center;
    white-space: pre-line;
    color: #cacaca;
  }

  @media screen and (max-width: 1224px) {
    .main {
      transform: translate(calc(-50%), calc(-50% - 60px));
    }
  }

  @media screen and (max-width: 1024px) {
    .main {
      transform: translate(calc(-50%), calc(-50% - 40px));
    }

    .bg img,
    .blur img {
      min-height: 500px;
    }

    .main p {
      white-space: unset;
    }
  }

  @media screen and (max-width: 700px) {
  }
`;

export default Banner4;
