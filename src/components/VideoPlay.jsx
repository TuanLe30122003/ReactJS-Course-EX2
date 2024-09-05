import React from "react";
import { asset } from "../assets/assets";
import styled from "styled-components";

const VideoPlay = (props) => {
  return (
    <StyledVideoPlay className="video-play">
      <div className="circle">
        <div>
          <img src={asset.circleTrans} alt="" />
        </div>
        <div>
          <img src={asset.playTrans} alt="" />
        </div>
      </div>

      <p>{props.title || "Tour Video"}</p>
    </StyledVideoPlay>
  );
};

const StyledVideoPlay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 27px;

  .circle {
    position: relative;
  }

  .circle > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #ffffff;
    transform: translate(83px, 0);
  }

  @media screen and (max-width: 1224px) {
    transform: translate(-100px, 0);
  }

  @media screen and (max-width: 1024px) {
    transform: translate(0, 60px);
  }

  @media screen and (max-width: 450px) {
    p {
      display: none;
    }
  }
`;

export default VideoPlay;
