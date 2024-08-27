import React from "react";
import styled from "styled-components";
import { useState } from "react";
import MainLogo from "../components/MainLogo";
import Navigation from "../components/Navigation";

const Header = (props) => {
  const [menuStatus, setMenuStatus] = useState(false);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <StyledHeader>
      <div className="header">
        <MainLogo whiteText={props.whiteText || false} />
        <Navigation />
        <div className="menu" onClick={() => toggleMenu()}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>

      {menuStatus ? (
        <>
          <div className="y-nav-cover">
            <ul className="y-nav">
              <li>
                <a href="">Home</a>
                <i class="fa-solid fa-plus"></i>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>

            <a id="exit" onClick={() => toggleMenu()}>
              <a href="">
                <i class="fa-solid fa-circle-xmark"></i>
              </a>
            </a>
          </div>

          <div className="blur" onClick={() => toggleMenu()}></div>
        </>
      ) : null}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  z-index: 9;

  .y-nav-cover {
    display: none;
  }

  .blur {
  }

  .header {
    display: flex;
    flex-direction: row;
    padding: 3rem 0;
    margin-left: 161px;
    align-items: center;
    margin-top: -7px;
  }

  #exit {
    font-size: 36px;
  }

  .menu {
    display: none;
    font-size: 36px;
  }

  @media only screen and (max-width: 1224px) {
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;

    .header {
      width: 100%;
      margin-left: 0;
      justify-content: space-between;
      padding: 3rem 40px;
    }

    .y-nav-cover {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: fixed;
      align-items: center;
      background-color: #fff;
      height: 100%;
      top: 0;
      left: 0;
      padding: 30px 100px;
      z-index: 9999;
    }

    .blur {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      opacity: 0.3;
      z-index: 99 !important;
      background-color: #000;
    }

    .y-nav {
      display: flex;
      gap: 44px;
      flex-direction: column;
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
      color: #000;
    }

    .menu {
      display: block;
    }
  }

  @media screen and (max-width: 700px) {
    .header {
      padding: 40px 20px;
    }
  }
`;

export default Header;
