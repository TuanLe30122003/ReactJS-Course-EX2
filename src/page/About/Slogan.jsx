import React from "react";
import styled from "styled-components";
import { asset } from "../../assets/assets";
import TitleAndDes from "../../components/TitleAndDes";

const Slogan = () => {
  return (
    <StyledSlogan>
      <div className="slogan-bg">
        <img src={asset.sloganPic} alt="" />
      </div>

      <div className="slogan-blur">
        <img src={asset.sloganBlur} alt="" />
      </div>

      <TitleAndDes
        subTitle={"Business Slogan"}
        title={"Best responsibility and service\nfor our customers"}
        des={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,\npurus sit amet luctus venenatis"
        }
      />
    </StyledSlogan>
  );
};

const StyledSlogan = styled.div`
  position: relative;
  width: 100%;
  min-height: 529px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 155px;

  .slogan-bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -2;
  }

  .slogan-bg img {
    min-height: 529px;
    max-height: 700px;
    width: 100%;
  }

  .slogan-blur img {
    min-height: 529px;
    max-height: 700px;
    width: 100%;
  }

  .slogan-blur {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }

  .title-and-des {
    transform: translate(0, -10px);
  }

  .title-and-des h3 {
    color: #abb4ff;
  }

  .title-and-des h1 {
    color: #ffffff;
  }

  .title-and-des p {
    color: #cacaca;
    transform: translate(0, 5px);
  }

  @media screen and (max-width: 700px) {
    .title-and-des {
      padding: 0 20px;
    }

    p,
    h1 {
      white-space: unset;
    }
  }

  @media screen and (min-width: 2560px) {
    .title-and-des {
      transform: translate(0, 110px);
    }
  }
`;

export default Slogan;
