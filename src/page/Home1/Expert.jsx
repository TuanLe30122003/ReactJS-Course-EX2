import React from "react";
import styled from "styled-components";
import { asset } from "../../assets/assets";
import TitleAndDes from "../../components/TitleAndDes";

const expertData = {
  TitleAndDes: {
    subTitle: "Professional Teams",
    title: "The Professional expert",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
  },

  expertInfo: {
    expert1: {
      pic: asset.expert1,
      position: "Surgeon",
      name: "Briyan Nevalli",
      des: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit ut\naliquam, purus sit",
    },

    expert2: {
      pic: asset.expert2,
      position: "Dermatologist",
      name: "Bella sebastian",
      des: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit ut\naliquam, purus sit",
    },

    expert3: {
      pic: asset.expert3,
      position: "Stylist expert",
      name: "Lilly Adams",
      des: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit ut\naliquam, purus sit",
    },
  },

  socialLogo: {
    twitter: asset.twt,
    facebook: asset.fb,
    instagram: asset.ig,
  },
};

const Expert = () => {
  return (
    <StyledExpert>
      <TitleAndDes
        subTitle={expertData.TitleAndDes.subTitle}
        title={expertData.TitleAndDes.title}
        des={expertData.TitleAndDes.des}
        alignItems={"center"}
      />
      <div className="expert-section">
        <ExpertItem
          pic={expertData.expertInfo.expert1.pic}
          position={expertData.expertInfo.expert1.position}
          name={expertData.expertInfo.expert1.name}
          des={expertData.expertInfo.expert1.des}
        />

        <ExpertItem
          pic={expertData.expertInfo.expert2.pic}
          position={expertData.expertInfo.expert2.position}
          name={expertData.expertInfo.expert2.name}
          des={expertData.expertInfo.expert2.des}
        />

        <ExpertItem
          pic={expertData.expertInfo.expert3.pic}
          position={expertData.expertInfo.expert3.position}
          name={expertData.expertInfo.expert3.name}
          des={expertData.expertInfo.expert3.des}
        />
      </div>
    </StyledExpert>
  );
};

const ExpertItem = (props) => {
  return (
    <StyledExpertItem
      width={props.width}
      height={props.height}
      padding={props.padding}
    >
      <div className="pic">
        <img src={props.pic} alt="" />
      </div>
      <TitleAndDes
        subTitle={props.position}
        title={props.name}
        des={props.des}
        alignItems={"center"}
      />

      <div className="contact">
        <a>
          <img src={asset.twt} alt="" />
        </a>
        <a>
          <img src={asset.fb} alt="" />
        </a>
        <a>
          <img src={asset.ig} alt="" />
        </a>
      </div>
    </StyledExpertItem>
  );
};

const StyledExpertItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 110.11px 30px 0 30px;
  transition: all 0.3s;
  border-radius: 42px;
  height: 626px;
  padding: 56px 0;
  z-index: 99;

  width: ${(props) => props.width || "270px"};

  &:hover {
    box-shadow: 0px 25px 50px 25px #f6f7ff;
    width: 424px;
    background-color: #ffffff;
  }

  .contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 34px;
    margin-top: 50px;
  }

  .contact a {
    width: 49px;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: -2px 6px 16px -1px #e6e9fd;
  }

  .pic {
    margin-bottom: 48px;
  }

  .title-and-des {
  }

  .title-and-des h3 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    margin-bottom: 1px;
  }

  .title-and-des h1 {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 22.5px;
    text-align: center;
  }

  .title-and-des p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-align: center;
    transform: translate(0, -3px);
    margin-top: 10px;
  }

  .contact {
    margin-top: 48px;
  }

  @media screen and (max-width: 1224px) {
    margin-top: 60px;
    height: 524px;

    &:hover {
      box-shadow: 0px 25px 50px 25px #f6f7ff;
      width: 424px;
      background-color: #ffffff;
      height: 625px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-top: 60px;
    padding: 56px 0;
    height: 484px;

    &:hover {
      box-shadow: 0px 25px 50px 25px #f6f7ff;
      width: 424px;
      background-color: #ffffff;
      height: 525px;
    }

    .contact {
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 0;
    width: 250px;

    &:hover {
      box-shadow: 0px 25px 50px 25px #f6f7ff;
      width: 384px;
      background-color: #ffffff;
      height: 525px;
    }
  }

  @media screen and (max-width: 450px) {
    padding: 0;
    width: 250px;

    &:hover {
      box-shadow: 0px 25px 50px 25px #f6f7ff;
      width: 300px;
      background-color: #ffffff;
      height: 525px;
    }
  }

  @media screen and (max-width: 450px) {
    padding: 0;
    width: 200px;

    &:hover {
      box-shadow: 0px 25px 50px 25px #f6f7ff;
      width: 320px;
      background-color: #ffffff;
      height: 525px;
    }
  }

  @media screen and (max-width: 350px) {
    padding: 0;
    width: 200px;

    &:hover {
      box-shadow: 0px 25px 50px 25px #f6f7ff;
      width: 260px;
      background-color: #ffffff;
      height: 525px;
    }
  }
`;

const StyledExpert = styled.div`
  margin-top: 142.5px;
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 100%;

  .title-and-des h3 {
    transform: translate(0, -0);
  }

  .title-and-des h1 {
    transform: translate(0, 0);
    margin-bottom: 2px;
  }

  .expert-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1224px) {
    .expert-section {
      flex-direction: column;
      gap: 0;
      padding: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    .expert-section {
      flex-direction: column;
      gap: 0;
      padding: 0;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 0 20px;
  }
`;

export default Expert;
