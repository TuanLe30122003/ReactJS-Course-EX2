import React from "react";
import styled from "styled-components";
import { asset } from "../../assets/assets";
import TitleAndDes from "../../components/TitleAndDes";

const VisionAndMission = () => {
  return (
    <StyledVisionAndMission>
      <div className="vision">
        <div className="vision-pic">
          <img src={asset.vision} alt="" />
        </div>

        <TitleAndDes
          subTitle={"Our Vision"}
          title={"Be the best and go\ninternational"}
          des={
            "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Elit, quam suscipit purus donec\namet. Egestas volutpat facilisi eu libero.\n\nNunc, ipsum ornare mauris sit quam quis enim.\nVarius tellus in suspendisse placerat."
          }
          textAlign="left"
          alignItems="flex-start"
        />
      </div>

      <div className="mission">
        <TitleAndDes
          subTitle={"Our Mission"}
          title={"Special & premium service\nto any clients"}
          des={
            "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Elit, quam suscipit purus donec\namet. Egestas volutpat facilisi eu libero.\n\nNunc, ipsum ornare mauris sit quam quis enim.\nVarius tellus in suspendisse placerat."
          }
          textAlign="left"
          alignItems="flex-start"
        />

        <div className="mission-pic">
          <img src={asset.mission} alt="" />
        </div>
      </div>
    </StyledVisionAndMission>
  );
};

const StyledVisionAndMission = styled.div`
  margin-top: 122px;

  .vision {
    display: flex;
    flex-direction: row;
    gap: 200px;
  }

  .mission {
    display: flex;
    flex-direction: row;
    gap: 200px;
    margin-top: 100px;
  }

  .mission .title-and-des {
    transform: translate(12px, 0);
  }

  .title-and-des p {
    margin-top: 0px;
  }

  .vision-pic {
    transform: translate(13px, -10px);
  }

  .mission-pic {
    transform: translate(-16px, -12px);
  }

  @media screen and (max-width: 1224px) {
    margin-top: 70px;

    .vision {
      flex-direction: column;
      gap: 40px;
    }

    .mission {
      gap: 40px;
      flex-direction: column;
      margin-top: 150px;
    }

    .vision .title-and-des {
      order: 1;
    }

    .vision-pic {
      order: 2;
    }

    .vision-pic {
      transform: translate(0, 0);
    }

    .mission-pic {
      transform: translate(0, 0);
    }

    .mission .title-and-des {
      transform: translate(0, 0);
    }
  }

  @media screen and (max-width: 700px) {
    padding: 0 20px;

    p {
      white-space: unset;
    }

    img {
      width: 80%;
    }

    .vision {
      justify-content: center;
      text-align: center;
    }

    .title-and-des {
      justify-content: center;
      align-items: center;
    }

    .title-and-des p {
      text-align: center;
    }

    .title-and-des h1 {
      text-align: center;
    }

    .mission {
      justify-content: center;
      text-align: center;
    }
  }

  @media screen and (min-width: 2560px) {
    margin-top: 300px;
  }
`;

export default VisionAndMission;
