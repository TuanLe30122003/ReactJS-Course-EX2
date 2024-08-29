import React from "react";
import styled from "styled-components";
import PinkButton from "../components/PinkButton";
import { asset } from "../assets/assets";

const Introduction = () => {
  return (
    <StyledIntro>
      <div className="intro__bg">
        <img src={asset.introBG} alt="" />
      </div>

      <div className="intro-cover">
        <div className="introduction">
          <h1>
            Clinic & beauty <br /> consultant
          </h1>
          <p>
            {
              "It is a long established fact that a reader will be\nby the readable content of a page."
            }
          </p>

          <PinkButton
            buttonName="More Details"
            width="200px"
            height="58.36px"
          />
        </div>

        <div className="intro__pic">
          <img src={asset.landingPic} alt="" />
        </div>
      </div>

      <div class="slider-position">
        <div class="position-bar"></div>
        <div class="middle-bar"></div>
        <div class="position-bar"></div>
      </div>
    </StyledIntro>
  );
};

const StyledIntro = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 85px 0px 0 0px;

  .intro-cover {
    display: flex;
    flex-direction: row;
  }

  .introduction {
    display: flex;
    margin-top: 71px;
    flex-direction: column;
  }

  .intro__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 88%;
  }

  .intro__bg img {
    width: 100%;
  }

  .introduction > h1 {
    font-family: Poppins;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    text-align: left;
    color: #091156;
    margin-bottom: 10px;
    transform: translate(1px, 0);
  }

  .introduction > p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #091156;
    margin-bottom: 30px;
    white-space: pre-line;
    transform: translate(1px, -2px);
  }

  .intro__pic img {
    transform: translate(34.5px, 15px);
  }

  .pink-button {
    margin-top: 4px;
    transform: translate(2px, -2px);
  }

  .pink-button a {
    transform: translate(1.5px, 0);
  }

  .slider-position {
    margin-top: 138px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 20px;
    gap: 7px;
  }

  .slider-position > .position-bar {
    height: 3px;
    width: 15px;
    background-color: #eeeeee;
    border-radius: 50px;
  }

  .slider-position > .middle-bar {
    height: 8px;
    width: 25px;
    background-color: #414880;
    border-radius: 50px;
  }

  @media screen and (max-width: 1224px) {
    margin: 85px 0 0 0px;
    padding-left: 20px;

    .intro__bg img {
      width: 100%;
      // display: none;
    }

    .intro__pic {
      display: flex;
      justify-content: center;
    }
    .intro__pic img {
      transform: translate(0, 0);
      width: 90%;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100vw;
    margin-left: 0;
    margin-top: 30px;

    .intro__bg {
      // display: none;
    }

    .intro__pic img {
      width: 90%;
    }

    .intro__pic img {
      transform: translate(0, 0);
    }

    .intro-cover {
      flex-direction: column;
      width: 100%;
      gap: 60px;
      align-items: center;
    }

    .introduction {
      align-items: center;
    }

    .introduction > h1 {
      text-align: center;
    }

    .introduction > p {
      text-align: center;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 0 20px;

    .introduction > p {
      white-space: unset;
    }
  }

  @media screen and (max-width: 450px) {
    margin: 85px 0px 0 0px;
  }
`;

export default Introduction;
