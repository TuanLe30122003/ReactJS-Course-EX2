import React from "react";
import styled from "styled-components";
import TitleAndDes from "../../components/TitleAndDes";
import { asset } from "../../assets/assets";

const Video = () => {
  return (
    <StyledVideo>
      <TitleAndDes
        subTitle={"About"}
        title={
          "We are a leading beauty clinic that has\nbeen around since 2002"
        }
        des={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,\npurus sit amet luctus venenatis"
        }
        textAlign="left"
        alignItems="flex-start"
      />

      <div className="video-bubble">
        <img src={asset.videoBubble} alt="" />
      </div>

      <div className="video-pic">
        <div>
          <img src={asset.videoPic} alt="" />
        </div>
        <div className="play">
          <img src={asset.videoPlayBtn} alt="" />
        </div>
      </div>
    </StyledVideo>
  );
};

const StyledVideo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 70px;
  position: relative;
  margin-bottom: 235px;

  .video-bubble {
    position: absolute;
    right: 0;
    top: 410px;
    z-index: -1;
  }

  .title-and-des {
    padding: 0 150px;
  }

  .video-pic {
    position: relative;
    margin-top: 365px;
  }

  .video-pic div:nth-child(1) img {
  }

  .video-pic > div {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  .video-pic .play {
    transform: translate(-88px, -111px);
  }

  @media screen and (max-width: 1300px) {
    .video-pic div:nth-child(1) img {
      width: 100%;
    }

    .video-pic {
      width: 100%;
    }

    .video-pic > div:nth-child(1) {
      width: 100%;
    }
  }

  @media screen and (max-width: 1224px) {
    .video-pic div:nth-child(1) img {
      width: 100%;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 150px;

    .video-pic {
      margin-top: 280px;
    }

    .title-and-des {
      padding: 0 100px;
    }
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 100px;

    p,
    h1 {
      white-space: unset;
    }

    .title-and-des {
      padding: 0 50px;
    }

    .video-pic {
      margin-top: 250px;
    }
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 70px;

    .video-pic {
      margin-top: 140px;
    }

    .play {
      display: none;
    }
  }

  @media screen and (min-width: 2560px) {
    .title-and-des {
      justify-content: center;
      align-items: center;
    }

    .title-and-des p,
    h1 {
      text-align: center;
    }
  }
`;

export default Video;
