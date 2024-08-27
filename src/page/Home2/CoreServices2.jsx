import React from "react";
import styled from "styled-components";
import TitleAndDes from "../../components/TitleAndDes";

const CoreServices2 = () => {
  return (
    <StyledCoreServices2>
      <div className="service-cover">
        <TitleAndDes
          subTitle={"Main Services"}
          title={"Our focus services"}
          des={"Lorem ipsum dolor sit amet."}
          textAlign="center"
          alignItems="center"
        />

        <div className="service-box"></div>
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
      <h3>Learn more</h3>
    </StyledServiceItem>
  );
};

const StyledServiceItem = styled.div``;

const StyledCoreServices2 = styled.div`
  width: 100%;
  margin-top: 160px;

  .title-and-des h1 {
    margin-top: 10px;
  }
`;

export default CoreServices2;
