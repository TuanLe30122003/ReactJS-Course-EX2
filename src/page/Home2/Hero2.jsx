import React from "react";
import styled from "styled-components";
import Header from "../Header";
import PinkButton from "../../components/PinkButton";
import { asset } from "../../assets/assets";

const Hero2 = () => {
  return (
    <StyledHero2>
      <Header whiteText={true} />

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

        <div className="hero-play">
          <div className="circle">
            <img src={asset.circleTrans} alt="" />
          </div>

          <p>Tour Video</p>
        </div>
      </div>
    </StyledHero2>
  );
};

const StyledHero2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .hero__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
  }

  .blur {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .hero-main {
    display: flex;
    flex-direction: row;
    margin-left: 150px;
    margin-top: 155px;
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

  .hero-play {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 27px;
  }

  .hero-play p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #ffffff;
  }
`;

export default Hero2;
