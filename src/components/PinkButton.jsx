import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PinkButton = (props) => {
  return (
    <StyledButton
      width={props.width}
      height={props.height}
      className="pink-button"
      id={props.id || ""}
    >
      <Link to={props.direct}>
        <a href="">{props.buttonName || "Default"}</a>
      </Link>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  background-color: #ff64ae;
  border-radius: 50px;
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.height || "60px"};
  text-align: center;
  min-width: 150px;
  border: 2px solid #ff64ae;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(1.5px, -2px);

  a {
    font-size: 16px;
    line-height: 24px;
    color: #fff !important;
    font-weight: 600;
    letter-spacing: 0.1em;
  }
`;

export default PinkButton;
