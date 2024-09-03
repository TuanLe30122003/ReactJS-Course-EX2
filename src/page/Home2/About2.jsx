import React from "react";
import TitleAndDes from "../../components/TitleAndDes";
import PinkButton from "../../components/PinkButton";
import styled from "styled-components";
import { asset } from "../../assets/assets";

const About2 = () => {
  return (
    <StyledAbout2>
      <div className="about__cover">
        <div className="about__pic">
          <img src={asset.about2Pic} alt="" />
        </div>

        <div className="about__title">
          <TitleAndDes
            subTitle={"About Us"}
            title={"We are the best beauty\nclinic"}
            des={
              "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Elit, quam suscipit purus donec\namet. Egestas volutpat facilisi eu libero. Nunc,\nipsum ornare mauris sit quam quis enim. Varius\ntellus in suspendisse placerat."
            }
            textAlign="left"
            alignItems="flex-start"
          />

          <PinkButton buttonName="Learn More" width="200px" height="58.36px" />
        </div>
      </div>
    </StyledAbout2>
  );
};

const StyledAbout2 = styled.div`
  width: 100%;
  margin-top: 470px;

  .about__cover {
    display: flex;
    flex-direction: row;
    justify-content: center;
    transform: translate(-13px, 0);
  }

  .about__pic {
    transform: translate(0, 4px);
  }

  .about__title {
    margin-left: 168px;
    transform: translate(0, 4px);
  }

  .about__title p {
    margin-top: 0;
    margin-bottom: 47px;
  }

  @media screen and (max-width: 1224px) {
    margin-top: 400px;

    .about__cover {
      flex-direction: column;
      gap: 60px;
      transform: translate(0, 0);
    }

    .about__title {
      margin-left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      order: 1;
      flex-direction: column;
    }

    .about__pic {
      display: flex;
      justify-content: center;
      order: 2;
    }
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    margin-top: 3 00px;

    .about__title {
      margin: 0 30px;
    }

    .about__pic img {
      width: 80%;
    }

    .about__title .title-and-des p {
      text-align: center;
    }

    .about__title .title-and-des h3 {
      text-align: center;
      width: 100%;
    }

    .about__title .title-and-des h1 {
      text-align: center;
      width: 100%;
    }
  }

  @media screen and (max-width: 450px) {
  }
`;

export default About2;
