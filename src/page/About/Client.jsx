import React from "react";
import styled from "styled-components";
import TitleAndDes from "../../components/TitleAndDes";
import { asset } from "../../assets/assets";

const Client = () => {
  return (
    <StyledClient>
      <TitleAndDes
        subTitle={"Our Clients"}
        title={"Well-known agencies"}
        des={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
      />

      <div className="client">
        <div>
          <img src={asset.client1} alt="" />
        </div>

        <div>
          <img src={asset.client2} alt="" />
        </div>

        <div>
          <img src={asset.client3} alt="" />
        </div>

        <div>
          <img src={asset.client4} alt="" />
        </div>

        <div>
          <img src={asset.client5} alt="" />
        </div>
      </div>
    </StyledClient>
  );
};

const StyledClient = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 105px;
  margin-bottom: 50px;

  .title-and-des {
    transform: translate(-12px, 0);
  }

  .title-and-des p {
    margin-top: 8px;
  }

  .client {
    display: flex;
    flex-direction: row;
    margin-top: 102px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 58px;
  }

  .client > div:nth-child(1) {
    transform: translate(3px, 2px);
  }

  .client > div:nth-child(2) {
    transform: translate(-3px, 2px);
  }

  .client > div:nth-child(3) {
    transform: translate(-3px, 2px);
  }

  .client > div:nth-child(4) {
    transform: translate(-3px, -2px);
  }

  .client > div:nth-child(5) {
    transform: translate(-3px, 2px);
  }

  @media screen and (max-width: 700px) {
    padding: 0 30px;

    p,
    h1 {
      white-space: unset;
    }

    .title-and-des {
      transform: translate(0, 0);
    }
  }
`;

export default Client;
