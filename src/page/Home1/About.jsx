import React from "react";
import TitleAndDes from "../../components/TitleAndDes";
import styled from "styled-components";
import { asset } from "../../assets/assets";
import PinkButton from "../../components/PinkButton";

const aboutData = {
  titleAndDes: {
    subTitle: "About Us",
    title: "We are the best beauty clinic",
    des: "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Elit, quam suscipit purus donec\namet. Egestas volutpat facilisi eu libero. Nunc,\nipsum ornare mauris sit quam quis enim. Varius\ntellus in suspendisse placerat.\n\nId dui erat sed quam tellus in purus. Pellentesque\ncongue fringilla cras tellus enim.",
  },

  picture: {
    url: asset.aboutPic,
    width: "476px",
    height: "350px",
  },
};

const About = () => {
  return (
    <StyledAbout>
      <div className="about-bubble">
        <img src={asset.bubbleBg} alt="" />
      </div>
      <div className="about__cover">
        <div className="info">
          <TitleAndDes
            subTitle={aboutData.titleAndDes.subTitle}
            title={aboutData.titleAndDes.title}
            des={aboutData.titleAndDes.des}
            alignItems={"flex-start"}
            textAlign={"left"}
          />

          <div className="res-pic">
            <img src={aboutData.picture.url} alt="" />
          </div>

          <div className="button">
            <PinkButton
              buttonName={"Learn More"}
              width={"200px"}
              height={"58.36px"}
            />
            <div className="watch">
              <ion-icon name="play-circle"></ion-icon>
              <a href="">Watch Video</a>
            </div>
          </div>
        </div>

        <div className="about__pic">
          <img src={aboutData.picture.url} alt="" />
        </div>
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  width: 100%;
  margin-top: 134.34px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .info {
    transform: translate(2px, 0);
  }

  .about-bubble {
    position: absolute;
    right: 0;
    z-index: -99;
    top: -355px;
  }

  .about__cover {
    display: flex;
    flex-direction: row;
    transform: translate(-68px);
  }

  .title-and-des p {
    width: 100%;
  }

  .about__pic {
    transform: translate(135px, 45px);
  }

  .res-pic {
    display: none;
  }

  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 54px;
    justify-content: flex-start;
    gap: 38.5px;
  }

  .button .pink-button {
    transform: translate(0, 0);
  }

  .pink-button a {
    transform: translate(2px, -1px);
  }

  .watch {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8.88px;
  }

  .watch a {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #8b8b8b;
    transform: translate(-1px, -2px);
  }

  .watch ion-icon {
    font-size: 60px;
  }

  .about__pic img {
    width: 476px;
  }

  @media only screen and (max-width: 1224px) {
    transform: translate(0);

    .about__pic {
      transform: translate(20px, 30px);
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .about__pic img {
      width: 90%;
    }

    .about__cover {
      transform: translate(0);
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
    justify-content: center;
    width: 100vw;

    .about__cover {
      flex-direction: column;
      align-items: center;
    }

    .title-and-des p {
      text-align: center;
    }

    .title-and-des h3 {
      text-align: center;
      width: 100%;
    }

    .title-and-des h1 {
      text-align: center;
      width: 100%;
    }

    .button {
      align-items: center;
      margin-top: 54px;
      justify-content: center;
      gap: 38.5px;
    }

    .about__pic {
      display: none;
      margin-top: 60px;
      transform: translate(0, 0);
    }

    .res-pic {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .res-pic img {
      width: 100%;
    }

    .about__pic img {
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 0 20px;

    .about__pic img {
      width: 80%;
    }

    .about__pic {
      margin-left: 0;
      display: none;
      transform: translate(0, 0);
    }

    .button {
      flex-direction: column;
      gap: 30px;
    }

    .title-and-des p {
      white-space: unset;
    }
  }
`;

export default About;
