import React from "react";
import styled from "styled-components";
import PinkButton from "./PinkButton";
import { Link } from "react-router-dom";
import ContactPage from "../page/Contact/ContactPage";

const Navigation = (props) => {
  return (
    <StyledNavigation className="nav" sectionColor={props.sectionColor}>
      <ul className="main-menu">
        <li id="home">
          <Link to="/">Home</Link>
          <i class="fa-solid fa-plus"></i>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      <PinkButton
        buttonName="Contact"
        width="158px"
        height="52px"
        direct="/contact"
      />
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -10px;

  .main-menu {
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    gap: 44px;
    margin-right: 52px;
  }

  #home a {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #414880;
  }

  #home i {
    font-size: 9px;
    transform: translate(-1px, 1px);
    color: #414880;
  }

  .main-menu li:nth-child(3) {
    transform: translate(-1px, 0);
  }

  .main-menu li:nth-child(5) {
    transform: translate(1.5px, 0);
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  li a {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1.75px;
    cursor: pointer;
    color: ${(props) => props.sectionColor || "#000"};
  }

  .pink-button {
    transform: translate(1px, 0);
  }

  li:nth-child(1) {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  li i {
    font-size: 12px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export default Navigation;
