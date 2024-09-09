import React from "react";
import styled from "styled-components";
import TitleAndDes from "../../components/TitleAndDes";
import { asset } from "../../assets/assets";

const CoreServices2 = () => {
  return (
    <StyledCoreServices2>
      <div className="wave">
        <img src={asset.wave} alt="" />
      </div>

      <div className="service-cover">
        <TitleAndDes
          subTitle={"Main Services"}
          title={"Our focus services"}
          des={"Lorem ipsum dolor sit amet."}
          textAlign="center"
          alignItems="center"
        />

        <div className="service-box">
          <ServiceItem
            img={asset.service21}
            title={"Beauty consultation"}
            des={"Lorem ipsum dolor sit\namet, consectetur\nadipiscing."}
          />

          <ServiceItem
            className="active"
            img={asset.service22}
            title={"Skin treatments"}
            des={"Lorem ipsum dolor sit\namet, consectetur\nadipiscing."}
          />

          <ServiceItem
            img={asset.service23}
            title={"Beauty product"}
            des={"Lorem ipsum dolor sit\namet, consectetur\nadipiscing."}
          />
        </div>
      </div>
    </StyledCoreServices2>
  );
};

const ServiceItem = (props) => {
  return (
    <StyledServiceItem>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <p>{props.des}</p>
      <h3>
        Learn more{" "}
        <div>
          <img src={asset.doubleArrow} alt="" />
        </div>
      </h3>
    </StyledServiceItem>
  );
};

const StyledServiceItem = styled.div`
  padding-top: 31px;
  padding-left: 36px;
  padding-right: 36px;
  padding-bottom: 47px;
  border-radius: 25px;
  width: 261px;

  img {
    margin-bottom: 18px;
  }

  h1 {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 22.5px;
    text-align: left;
    color: #091156;
    margin-bottom: 15px;
  }

  p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #8b8b8b;
    margin-bottom: 17px;
  }

  h3 {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 17.5px;
    text-align: left;
    color: #ff64ae;
    display: flex;
    flex-direction: row;
  }

  h3 > div {
    transform: translate(10px, 3px);
  }

  h3 > div img {
    margin-bottom: 0;
    width: 14px;
  }
`;

const StyledCoreServices2 = styled.div`
  width: 100%;
  margin-top: 162px;
  align-items: center;
  justify-content: center;
  position: relative;

  .wave {
    position: absolute;
    left: 0;
    z-index: -2;
    bottom: -190px;
  }

  .wave img {
    width: 100%;
  }

  .title-and-des h1 {
    margin-top: 0px;
  }

  .service-box {
    display: flex;
    margin-top: 78px;
    flex-direction: row;
    gap: 66px;
    justify-content: center;
  }

  .service-box > div:nth-child(2) {
    border: 1px solid #9ba2e0;
  }

  @media screen and (max-width: 1224px) {
    p {
      white-space: unset;
    }

    .service-box {
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 700px) {
  }
`;

export default CoreServices2;
