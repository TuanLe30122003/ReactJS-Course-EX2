import React from "react";
import styled from "styled-components";
import TitleAndDes from "../../components/TitleAndDes";
import { asset } from "../../assets/assets";

const GetInTouch = () => {
  return (
    <StyledGetInTouch>
      <TitleAndDes
        subTitle={"Get in Touch"}
        title={"Get direct handling by us"}
        des={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        }
        textAlign="center"
        alignItems="center"
      />

      <div className="contact-section">
        <div className="item">
          <img src={asset.location} alt="" />
          <TitleAndDes
            subTitle={"Address"}
            title={"101 Baker Street, NY"}
            des={
              "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit ut\naliquam, purus sit"
            }
            textAlign="center"
            alignItems="center"
          />
        </div>

        <div className="item">
          <img src={asset.phone} alt="" />
          <TitleAndDes
            subTitle={"Phone"}
            title={"+896 120 5889"}
            des={
              "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit ut\naliquam, purus sit"
            }
            textAlign="center"
            alignItems="center"
          />
        </div>

        <div className="item">
          <img src={asset.mail} alt="" />
          <TitleAndDes
            subTitle={"Mail"}
            title={"mail@company.com"}
            des={
              "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit ut\naliquam, purus sit"
            }
            textAlign="center"
            alignItems="center"
          />
        </div>
      </div>
    </StyledGetInTouch>
  );
};

const StyledGetInTouch = styled.div`
  margin-top: 113px;

  .title-and-des p {
    margin-top: 12px;
  }

  .contact-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    gap: 36.5px;
  }

  .contact-section .title-and-des h1 {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
  }

  .contact-section .title-and-des p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-align: center;
    margin-top: 0px;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 402px;
    width: 270px;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 42px;
  }

  .item:hover {
    width: 424px;
    box-shadow: 0px 25px 50px 25px #f6f7ff;
  }

  .item:nth-child(1) {
    transform: translate(0);
  }

  .item img {
    margin-bottom: 46px;
  }

  @media only screen and (max-width: 1224px) {
    .contact-section {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (max-width: 700px) {
    .item:hover {
      width: 350px;
      box-shadow: 0px 25px 50px 25px #f6f7ff;
    }

    .title-and-des {
      padding: 0 20px;
    }

    .item {
      width: 230px;
    }
  }
`;

export default GetInTouch;
