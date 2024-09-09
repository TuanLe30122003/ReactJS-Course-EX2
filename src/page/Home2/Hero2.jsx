import React from "react";
import styled from "styled-components";
import Header from "../Header";
import PinkButton from "../../components/PinkButton";
import { asset } from "../../assets/assets";
import VideoPlay from "../../components/VideoPlay";

const Hero2 = () => {
  return (
    <StyledHero2>
      <Header whiteText={true} sectionColor={"#fff"} />

      <div className="hero__bg">
        <img src={asset.heroBg} alt="" />
      </div>

      <div className="blur">
        <img src={asset.heroBlur} alt="" />
      </div>

      <div className="hero-main">
        <div className="hero-title-section">
          <h1>{"Your beauty center\nplace"}</h1>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Commodo, massa pellentesque arcu fusce et\nmagna consequat neque vitae lobortis."
            }
          </p>
          <a href="">More Details</a>
        </div>

        <VideoPlay title="Tour Video" />
      </div>
    </StyledHero2>
  );
};

const StyledHero2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;

  .hero__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -2;
  }

  .hero__bg img {
    width: 100%;
    min-height: 900px;
    object-fit: cover;
    max-height: 918px;
  }

  .circle {
    position: relative;
  }

  .circle > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .blur img {
    width: 100%;
    min-height: 900px;
    object-fit: cover;
    max-height: 918px;
  }

  .blur {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .hero-main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 155px;
    width: 100%;
    transform: translate(-155px, 0);
  }

  .hero-title-section {
    display: flex;
    flex-direction: column;
    margin-right: 207px;
  }

  .hero-title-section a {
    width: 179px;
    height: 52px;
    border-radius: 15px;
    border: 1px solid #ffffff;
    padding: 14px 0 14px 29px;
    color: #fff;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
  }

  .hero-title-section h1 {
    font-family: Poppins;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    text-align: left;
    white-space: pre-line;
    color: #ffffff;
    margin-bottom: 12px;
  }

  .hero-title-section p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #d8dcff;
    white-space: pre-line;
    margin-bottom: 40px;
  }

  .hero-main .video-play {
    transform: translate(82px, 2px);
  }

  @media screen and (max-width: 1224px) {
    .hero-main {
      transform: translate(0, 0);
    }

    .hero-play {
      transform: translate(-100px, 0);
    }
  }

  @media screen and (max-width: 1024px) {
    .hero-main {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 80px;
      gap: 60px;
    }
    .hero-title-section h1 {
      text-align: center;
      white-space: unset;
    }

    .hero-title-section p {
      white-space: unset;
      text-align: center;
      width: 70%;
    }

    .hero-title-section {
      justify-content: center;
      margin-right: 0;
      align-items: center;
    }

    .hero-play {
      transform: translate(0, 60px);
    }
  }

  @media screen and (max-width: 450px) {
    .hero-play p {
      display: none;
    }
  }
`;

export default Hero2;
