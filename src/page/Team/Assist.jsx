import React from "react";
import styled from "styled-components";
import TitleAndDes from "../../components/TitleAndDes";
import { asset } from "../../assets/assets";

const Assist = () => {
  return (
    <StyledAssist>
      <TitleAndDes
        subTitle={"Assistance Team"}
        title={"Meet the pro assistance"}
        des={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        }
      />

      <div className="assist-team">
        <AssistItem
          img={asset.assist1}
          name={"Lina Gustav"}
          role={"Pharmacist"}
        />

        <AssistItem img={asset.assist2} name={"Adam White"} role={"Finance"} />

        <AssistItem img={asset.assist3} name={"Jane Doe"} role={"Marketer"} />
      </div>
    </StyledAssist>
  );
};

const AssistItem = (props) => {
  return (
    <StyledAssistItem className="assist-item">
      <img src={props.img} alt="" />

      <div className="info">
        <p className="name">
          {props.name} / <span>{props.role}</span>
        </p>
        <p className="des">
          {
            "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Nam id magnis at placerat\npulvinar euismod neque."
          }
        </p>
      </div>
    </StyledAssistItem>
  );
};

const StyledAssist = styled.div`
  margin-top: 70px;

  .title-and-des p {
    margin-top: 10px;
  }

  .assist-team {
    margin-top: 115px;
    display: flex;
    flex-direction: column;
    gap: 79px;
    margin-left: 0;
    transform: translate(-85px, 0);
    padding: 0 20px;
  }

  @media screen and (max-width: 1224px) {
    .assist-team {
      transform: translate(0, 0);
    }
  }

  @media screen and (max-width: 1024px) {
    .assist-team {
      gap: 100px;
    }
  }
`;

const StyledAssistItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 172px;
  width: 100%;
  justify-content: center;
  align-items: center;

  .info {
    transform: translate(0, -5px);
  }

  .info .name {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 22.5px;
    text-align: left;
    color: #091156;
    margin-bottom: 20px;
  }

  .info .name span {
    font-family: Poppins;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: 17.5px;
    text-align: left;
  }

  .des {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #8b8b8b;
    white-space: pre-line;
  }

  @media screen and (max-width: 1224px) {
    gap: 100px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;

    .des {
      text-align: center;
    }

    .info .name {
      text-align: center;
    }
  }

  @media screen and (max-width: 700px) {
    img {
      width: 80%;
    }
  }

  @media screen and (max-width: 450px) {
    .des {
      white-space: unset;
    }
  }
`;

export default Assist;
