import React from "react";
import styled from "styled-components";
import TitleAndDes from "../../components/TitleAndDes";
import { asset } from "../../assets/assets";

const CoreService3 = () => {
  return (
    <StyledCoreService3>
      <TitleAndDes
        subTitle={"Our Services"}
        title={"We focus on your beauty"}
        des={"Lorem ipsum dolor sit amet"}
        textAlign="center"
        alignItems="center"
      />

      <div className="bubble">
        <img src={asset.service2bubble} alt="" />
      </div>

      <div className="service-box">
        <div className="service-box2">
          <div>
            <img src={asset.service31} alt="" />
          </div>

          <div>
            <img src={asset.service32} alt="" />
          </div>
        </div>

        <div className="service-box2">
          <div>
            <img src={asset.service33} alt="" />
          </div>

          <div>
            <img src={asset.service34} alt="" />
          </div>
        </div>
      </div>
    </StyledCoreService3>
  );
};

const StyledCoreService3 = styled.div`
  margin-top: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 74px;

  .title-and-des p {
    margin-top: 12px;
  }

  .bubble {
    position: absolute;
    top: -30px;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .bubble img {
    width: 100%;
  }

  .service-box2 {
    display: flex;
    flex-direction: row;
    gap: 84px;
  }

  .service-box {
    display: flex;
    flex-direction: column;
    gap: 61px;
    justify-content: flex-start;
    align-items: center;
  }

  @media screen and (max-width: 1224px) {
    align-items: center;

    .service-box {
      gap: 10px;
      width: 80%;
    }

    .service-box2 {
      gap: 10px;
    }
  }

  @media screen and (max-width: 1024px) {
    align-items: center;

    .service-box {
      flex-direction: column;
    }

    .service-box2 {
      flex-direction: column;
    }

    .service-box2 div {
      display: flex;
      justify-content: center;
    }

    .service-box2 img {
      width: 70%;
    }

    .service-box .service-box2:nth-child(2) div:nth-child(1) {
      order: 2;
    }

    .service-box .service-box2:nth-child(2) div:nth-child(2) {
      order: 1;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 0 20px;
  }
`;

export default CoreService3;
