import React from "react";
import { asset } from "../../assets/assets";
import styled from "styled-components";

const Banner = () => {
  return (
    <StyledBanner>
      <div className="banner">
        <img src={asset.bannerH2} alt="" />
      </div>

      <div className="overlay">
        <img src={asset.overlayh2} alt="" />
      </div>

      <div className="banner-cover">
        <div className="banner__title">
          <h3>Why choosing us?</h3>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit ut aliquam, purus sit amet luctus\nvenenatis."
            }
          </p>
        </div>

        <div className="number-box">
          <div className="number-box2">
            <NumberItem
              img={asset.handshake}
              number={"100%"}
              unit={"trusted clinic"}
            />
            <NumberItem
              img={asset.brotherhood}
              number={"99%"}
              unit={"customer love"}
            />
          </div>
          <div className="number-box2">
            <NumberItem
              img={asset.earth}
              number={"75+"}
              unit={"asian branch"}
            />
            <NumberItem
              img={asset.doctor}
              number={"1.200+"}
              unit={"licensed worker"}
            />
          </div>
        </div>
      </div>
    </StyledBanner>
  );
};

const NumberItem = (props) => {
  return (
    <StyledNumberItem className="number-item">
      <img src={props.img} alt="" />
      <div className="info">
        <h3>{props.number}</h3>
        <p>{props.unit}</p>
      </div>
    </StyledNumberItem>
  );
};

const StyledNumberItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 11px;

  h3 {
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
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #d8dcff;
    width: 130px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0px;
    transition: all 0.5s;
  }

  @media screen and (max-width: 1024px) {
  }
`;

const StyledBanner = styled.div`
  margin-top: 128px;
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;

  .banner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -2;
  }

  .banner img {
    width: 100%;
  }

  .overlay img {
    width: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .banner-cover {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    gap: 179px;
    align-items: center;
    transform: translate(-50%, -50%);
  }

  .banner__title {
    transform: translate(-15px, 10px);
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    flex-direction: column;
  }

  .banner__title h3 {
    font-family: Poppins;
    font-size: 36px;
    font-weight: 600;
    line-height: 45px;
    text-align: left;
    color: #ffffff;
  }

  .banner__title p {
    margin-top: 20px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #d8dcff;
    white-space: pre-line;
  }

  .number-box {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 45px;
    flex-basis: 60%;
    transform: translate(-25px, 15px);
  }

  .number-box2 {
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 60px;
  }

  .number-box2:nth-child(1) .number-item:nth-child(1) p {
    transform: translate(-0.5px, -3px);
  }

  .number-box2:nth-child(1) .number-item:nth-child(2) {
    transform: translate(5px, 0);
  }

  .number-box2:nth-child(2) .number-item:nth-child(2) {
    transform: translate(5px, 0);
  }

  .number-box2:nth-child(1) .number-item:nth-child(2) img {
    transform: translate(0, -4px);
  }

  .number-box2:nth-child(1) .number-item:nth-child(2) p {
    transform: translate(0, -3px);
  }

  .number-box2:nth-child(2) .number-item:nth-child(1) {
    transform: translate(0, -2px);
  }

  .number-box2:nth-child(2) .number-item:nth-child(1) h3 {
    transform: translate(0, 4.5px);
  }

  .number-box2:nth-child(2) .number-item:nth-child(1) h3 {
    transform: translate(0, 4.5px);
  }

  .number-box2:nth-child(2) .number-item:nth-child(1) p {
    transform: translate(0, 1px);
  }

  .number-box2:nth-child(2) .number-item:nth-child(2) img {
    transform: translate(0, -1px);
  }

  .number-box2:nth-child(2) .number-item:nth-child(2) h3 {
    transform: translate(0, 3px);
  }

  @media screen and (max-width: 1224px) {
    .banner-cover {
      flex-direction: column;
      gap: 40px;
      top: 107px;
      transform: translate(-50%, 0);
    }

    .number-box {
      transform: translate(0, 0);
    }

    .banner__title p {
      white-space: unset;
    }

    .banner__title {
    }
  }

  @media screen and (max-width: 1024px) {
    .banner__title {
      transform: translate(0, 0);
      max-width: 600px;
      width: 100%;
    }

    .banner img {
      min-height: 600px;
    }

    .overlay img {
      min-height: 600px;
    }

    .banner-cover {
      width: 100%;
      margin-top: 20px;
    }

    .number-box2 {
      gap: 60px;
      justify-content: center;
      align-items: center;
    }

    .number-box {
      flex-direction: column;
      gap: 60px;
      transform: translate(0, 0);
    }
  }

  @media screen and (max-width: 700px) {
    .banner img {
      min-height: 800px;
    }

    .overlay img {
      min-height: 800px;
    }

    .number-box2 {
      flex-direction: column;
    }

    .banner__title p {
      display: none;
    }

    .banner__title h3 {
      width: 100%;
      font-size: 33px;
      text-align: center;
    }
  }

  @media screen and (max-width: 450px) {
  }
`;

export default Banner;
