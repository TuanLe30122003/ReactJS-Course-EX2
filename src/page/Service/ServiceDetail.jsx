import React from "react";
import styled from "styled-components";
import { asset } from "../../assets/assets";
import TitleAndDes from "../../components/TitleAndDes";

const ServiceDetail = () => {
  return (
    <StyledServiceDetail>
      <div className="cover">
        <ServiceDetailItem
          img={asset.servicedes1}
          title={"We services beauty\nconsultation"}
          subTitle={"Beauty Consultation"}
        />

        <ServiceDetailItem
          img={asset.servicedes2}
          title={"Skin care and\ntreatment by expert"}
          subTitle={"Skin Treatements"}
        />

        <ServiceDetailItem
          img={asset.servicedes3}
          title={"We present quality\nbeauty products"}
          subTitle={"Beauty Product"}
        />
      </div>
    </StyledServiceDetail>
  );
};

const ServiceDetailItem = (props) => {
  return (
    <StyledServiceDetailItem className="item">
      <div className="service-img">
        <img src={props.img} alt="" />
      </div>

      <div>
        <TitleAndDes
          subTitle={props.subTitle}
          title={props.title}
          des={
            "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Elit, quam suscipit purus donec\namet. Egestas volutpat facilisi eu libero."
          }
          textAlign="left"
          alignItems="flex-start"
        />
        <p className="make-app">
          Make an Appointment{" "}
          <div>
            <img src={asset.doubleArrow} alt="" />
          </div>
        </p>
      </div>
    </StyledServiceDetailItem>
  );
};

const StyledServiceDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 131px;

  .cover {
    display: flex;
    flex-direction: column;
    gap: 100px;
    align-items: center;
    justify-content: center;
  }

  .title-and-des p {
    margin-top: 0px;
    margin-bottom: 25px;
  }

  .cover > .item:nth-child(2) > div:nth-child(1) {
    order: 2;
    transform: translate(32px, -28px);
  }

  .cover > .item:nth-child(2) > div:nth-child(2) {
    order: 1;
  }

  .cover > .item:nth-child(1) {
    transform: translate(-16px, 0);
  }

  .cover > .item:nth-child(2) {
    transform: translate(-16px, 18px);
  }

  .cover > .item:nth-child(1) div:nth-child(2) {
    transform: translate(-2px, 33px);
  }

  .cover > .item:nth-child(3) {
    transform: translate(-15px, -25px);
  }

  .cover > .item:nth-child(3) div:nth-child(2) {
    transform: translate(-2px, 30px);
  }

  .make-app {
    display: flex;
    flex-direction: row;
  }

  .make-app div {
    margin-left: 16px;
    transform: translate(0, 3px);
  }

  @media screen and (max-width: 1224px) {
    gap: 50px;

    .item {
      width: 100%;
    }

    .cover {
      gap: 120px;
    }

    .cover > .item:nth-child(2) > div:nth-child(1) {
      order: 2;
      transform: translate(0, 0);
    }

    .cover > .item:nth-child(2) > div:nth-child(2) {
      order: 1;
    }

    .cover > .item:nth-child(1) > div:nth-child(1) {
      order: 2;
      transform: translate(0, 0);
    }

    .cover > .item:nth-child(1) > div:nth-child(2) {
      order: 1;
    }

    .cover > .item:nth-child(3) > div:nth-child(1) {
      order: 2;
      transform: translate(0, 0);
    }

    .cover > .item:nth-child(3) > div:nth-child(2) {
      order: 1;
    }

    .cover > .item:nth-child(1) {
      transform: translate(0, 0);
    }

    .cover > .item:nth-child(2) {
      transform: translate(0, 0);
    }

    .cover > .item:nth-child(1) div:nth-child(2) {
      transform: translate(0, 0);
    }

    .cover > .item:nth-child(3) {
      transform: translate(0, 0);
    }

    .cover > .item:nth-child(3) div:nth-child(2) {
      transform: translate(0, 0);
    }
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    .cover {
      padding: 0 50px;
    }
  }

  @media screen and (max-width: 450px) {
    .cover {
      padding: 0 20px;
    }
  }
`;

const StyledServiceDetailItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 190px;
  justify-content: center;

  .make-app {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #091156;
  }

  @media screen and (max-width: 1224px) {
    gap: 30px;
    flex-direction: column;
    align-items: center;
    .make-app {
      text-align: center;
    }

    p,
    h3,
    h1 {
      text-align: center;
      width: 100%;
    }
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    img {
      width: 80%;
    }

    .service-img {
      display: flex;
      justify-content: center;
    }
  }
`;

export default ServiceDetail;
