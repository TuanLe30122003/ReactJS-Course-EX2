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
    margin-left: 150px;
  }

  .about__title {
    margin-left: 168px;
    transform: translate(0, 4px);
  }

  .about__title p {
    margin-top: 0;
    margin-bottom: 47px;
  }
`;

export default About2;
