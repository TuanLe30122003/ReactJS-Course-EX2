import React from "react";
import styled from "styled-components";
import VideoPlay from "../../components/VideoPlay";
import { asset } from "../../assets/assets";

const Banner3 = () => {
  return (
    <StyledBanner3>
      <div className="bg">
        <img src={asset.galBg} alt="" />
      </div>

      <div className="blur">
        <img src={asset.galBlur} alt="" />
      </div>

      <div className="main">
        <h1>Watch the video tour</h1>
        <p>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut\naliquam, purus sit amet luctus venenatis"
          }
        </p>

        <VideoPlay />
      </div>
    </StyledBanner3>
  );
};

const StyledBanner3 = styled.div`
  position: relative;
  height: 628px;
  margin-top: 125px;

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
  }

  .video-play {
    transform: translate(12px, 15px);
    margin-top: 100px;
  }

  .video-play .circle div:nth-child(2) {
    transform: translate(calc(-50% + 7px), -50%);
  }

  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 37px));
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main h1 {
    font-family: Poppins;
    font-size: 36px;
    font-weight: 600;
    line-height: 45px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .main p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: center;
    color: #cacaca;
    white-space: pre-line;
  }

  @media (max-width: 1224px) {
    .main {
      transform: translate(-50%, calc(-50% - 100px));
    }

    .main p {
      white-space: unset;
    }

    .video-play {
      transform: translate(0, 15px);
      margin-top: 80px;
    }

    .video-play .circle div:nth-child(2) {
      transform: translate(calc(-50%), -50%);
    }
  }

  @media (max-width: 1024px) {
    .main {
      transform: translate(-50%, calc(-50% - 40px));
    }

    .bg img,
    .blur img {
      min-height: 600px;
    }
  }
`;

export default Banner3;
