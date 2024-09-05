import React from "react";
import { asset } from "../../assets/assets";
import styled from "styled-components";
import VideoPlay from "../../components/VideoPlay";

const Banner2 = () => {
  return (
    <StyledBanner2>
      <div className="bg">
        <div className="main-bg">
          <img src={asset.banner2bg} alt="" />
        </div>

        <div className="blur">
          <img src={asset.banner2blur} alt="" />
        </div>
      </div>

      <div className="title">
        <div className="main-title">
          <h1>{"Best responsibility and service\nfor our customers"}</h1>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut\naliquam, purus sit amet luctus venenatis"
            }
          </p>
        </div>

        <VideoPlay title={"Treatments Videos"} />
      </div>
    </StyledBanner2>
  );
};

const StyledBanner2 = styled.div`
  position: absolute;
  width: 100%;
  min-height: 529px;
  margin-top: 100px;

  .main-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -2;
  }

  .main-bg img {
    width: 100%;
  }

  .blur {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .blur img {
    width: 100%;
  }

  .title {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 50%;
    left: 50%;
    gap: 200px;
    width: 100%;
    justify-content: center;
    transform: translate(-50%, -50%);
  }

  .main-title {
    display: flex;
    transform: translate(-87px, -5px);
    flex-direction: column;
  }

  .main-title h1 {
    font-family: Poppins;
    font-size: 36px;
    font-weight: 600;
    line-height: 45px;
    text-align: left;
    white-space: pre-line;
    color: #ffffff;
  }

  .main-title p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #cacaca;
    white-space: pre-line;
    margin-top: 20px;
  }

  .video-play {
    transform: translate(-35px, 0px);
  }

  .video-play p {
    transform: translate(63px, -5px);
  }

  @media screen and (max-width: 1224px) {
    .video-play {
      transform: translate(0, 0px);
    }

    .title {
      transform: translate(-50%, -80%);
      gap: 120px;
    }

    .main-title {
      display: flex;
      transform: translate(0, -5px);
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1024px) {
    .main-bg img {
      min-height: 600px;
    }

    .blur img {
      min-height: 600px;
    }

    .main-title h1,
    .main-title p {
      text-align: center;
      width: 100%;
      white-space: unset;
    }

    .title {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translate(-50%, -50%);
    }
  }
`;

export default Banner2;
