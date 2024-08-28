import React from "react";
import { asset } from "../assets/assets";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter class="footer">
      <div class="bg-footer">
        <img src={asset.footerBg} alt="" />
      </div>

      <div class="bot-bg">
        <img src={asset.bottomBg} alt="" />
      </div>

      <div class="footer__main">
        <div class="logo-and-info">
          <img src={asset.mainLogo2} alt="" />
          <h3>
            <b>Beautice</b> is a Beauty Clinic WordPress Theme.
          </h3>
          <p>Baker Steet 101, NY, United States.</p>
          <div class="phone-and-mail">
            <p>+521 569 8966.</p>
            <p>mail@company.com.</p>
          </div>
        </div>

        <div class="option-box">
          <div class="pages">
            <h3>Pages</h3>
            <ul class="pages__list">
              <li>
                <ion-icon name="caret-forward-outline"></ion-icon>Home
              </li>
              <li>
                <ion-icon name="caret-forward-outline"></ion-icon>About
              </li>
              <li>
                <ion-icon name="caret-forward-outline"></ion-icon>Services
              </li>
              <li>
                <ion-icon name="caret-forward-outline"></ion-icon>Gallery
              </li>
              <li>
                <ion-icon name="caret-forward-outline"></ion-icon>Team
              </li>
            </ul>
          </div>

          <div class="information">
            <h3>Informations</h3>
            <ul class="information__list">
              <li>
                <ion-icon name="caret-forward-outline"></ion-icon>Terms &
                conditions
              </li>
              <li>
                <ion-icon name="caret-forward-outline"></ion-icon>Privacy policy
              </li>
              <li>
                <ion-icon name="caret-forward-outline"></ion-icon>Blog
              </li>
              <li>
                <ion-icon name="caret-forward-outline"></ion-icon>Contact
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="contact-and-credit">
        <div class="social">
          <div>
            <img src={asset.footerFb} alt="" />
          </div>
          <div>
            <img src={asset.footerTwt} alt="" />
          </div>
          <div>
            <img src={asset.footerIn} alt="" />
          </div>
          <div>
            <img src={asset.footerYtb} alt="" />
          </div>
          <div>
            <img src={asset.footerIg} alt="" />
          </div>
        </div>

        <div class="credit">
          <p>© AltDesain Studio 2021 - All right reserved.</p>
        </div>
      </div>

      <a class="back-to-top" href="#">
        <ion-icon name="arrow-up-outline"></ion-icon>
      </a>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  margin-top: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  .bg-footer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: -1;
    background-color: #0d165c;
    height: 100%;
  }

  .bg-footer img {
    width: 100%;
    position: absolute;
    top: -234px;
  }

  .bot-bg img {
    width: 100%;
  }

  .bot-bg {
    position: absolute;
    bottom: -76px;
    left: 0;
    z-index: -2;
    width: 100%;
  }

  .bg-footer img {
    width: 100%;
  }

  .footer__main {
    display: flex;
    flex-direction: row;
    color: #d7dbff;
    justify-content: center;
    /* align-items: center; */
    gap: 200px;
  }

  .footer__main .logo-and-info {
    transform: translate(0, 10px);
  }

  .footer__main .logo-and-info h3 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    margin-bottom: 20px;
    transform: translate(31px, 26px);
  }

  .footer__main .logo-and-info > p {
    font-family: Poppins;
    font-size: 14px;
    font-style: italic;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-align: left;
    transform: translate(32px, 29px);
  }

  .footer__main .logo-and-info .phone-and-mail {
    display: flex;
    flex-direction: row;
    gap: 41px;
    transform: translate(32px, 33px);
  }

  .footer__main .logo-and-info .phone-and-mail {
    font-family: Poppins;
    font-size: 14px;
    font-style: italic;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-align: left;
  }

  .option-box {
    display: flex;
    flex-direction: row;
    gap: 210px;
  }

  .pages {
    transform: translate(-12px, -5.5px);
  }

  .information {
    transform: translate(-15px, -6.5px);
  }

  .pages h3 {
    letter-spacing: 0.088em;
  }

  .information h3 {
    /* letter-spacing: 0.065em; */
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0.1em;
    text-align: left;
  }

  .pages ul {
    display: flex;
    flex-direction: column;
    gap: 11.5px;
    transform: translate(2px, 29.5px);
  }

  .pages li:nth-child(5) {
    transform: translateY(-2px);
  }

  .pages li:nth-child(4) {
    transform: translate(1px, -2px);
  }

  .pages li {
    display: flex;
    align-items: center;
    letter-spacing: 0.1em;
  }

  .pages li ion-icon {
    margin-right: 9px;
    font-size: 10px;
  }

  .information ul {
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin-top: 26px;
    transform: translate(1px, 0);
  }

  .information li {
    display: flex;
    align-items: center;
    letter-spacing: 0.1em;
    transform: translateY(1px);
  }

  .information li ion-icon {
    margin-right: 9px;
    font-size: 10px;
  }

  .contact-and-credit {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 425px;
    color: #fff;
    margin-top: 165px;
  }

  .social {
    display: flex;
    flex-direction: row;
    gap: 45px;
  }

  .contact-and-credit i {
    color: #fff;
    font-size: 26px;
  }

  .credit {
    transform: translate(1px, -2px);
  }

  .credit p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: right;
  }

  @media only screen and (max-width: 1360px) {
    .contact-and-credit {
      margin-top: 120px;
    }
  }

  @media only screen and (max-width: 1290px) {
    .contact-and-credit {
      margin-top: 80px;
    }
  }
  @media only screen and (max-width: 1224px) {
    background-color: #091156;
    margin-top: 100px;
    justify-content: center;
    padding: 50px 0;
    width: 100vw;

    .option-box {
      gap: 0px;
    }

    .bg-footer {
      display: none;
    }

    .footer__main {
      padding: 0px 55px;
    }

    .footer__main .logo-and-info {
      margin-right: 70px;
      transform: translateY(0);
    }

    .pages {
      margin-right: 120px;
      margin-left: 60px;
    }

    .bot-bg {
      display: none;
    }

    .information {
      transform: translate(0);
      padding-left: 30px;
    }

    .pages {
      transform: translate(0);
    }

    .back-to-top {
      z-index: 99;
    }

    .contact-and-credit {
      margin-top: 100px;
      gap: 150px;
    }

    .social {
      margin-right: 160px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .option-box {
      flex-direction: column;
      gap: 60px;
    }

    .contact-and-credit {
      margin-top: 40px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }

    .social {
      margin-right: 0;
    }

    .bot-bg {
      display: none;
    }

    .footer__main {
      align-items: center;
      gap: 30px;
    }

    .information {
      transform: translate(0);
    }

    .pages {
      transform: translate(0);
      margin-left: 30px;
    }

    .credit p {
      text-align: left;
    }
  }

  @media only screen and (max-width: 700px) {
    .about-us__picture img {
      width: 100%;
    }

    .footer__main {
      align-items: flex-start;
      flex-direction: column;
      gap: 50px;
    }

    .about-us__button {
      flex-direction: column;
    }

    .contact-and-credit {
      flex-direction: column;
      justify-content: center;
      gap: 50px;
      margin-top: 50px;
      margin-left: 0;
    }

    .social {
      justify-content: center;
    }

    .contact-and-credit p {
      text-align: center;
    }

    .footer__main .logo-and-info img {
    }

    .footer__main .logo-and-info > p {
      margin-left: 0;
    }

    .social img {
      width: 20px;
    }

    .footer__main .logo-and-info > h3 {
      margin-left: 0;
    }

    .footer__main .logo-and-info .phone-and-mail {
      margin-left: 0;
      flex-direction: column;
      margin-top: 20px;
      gap: 10px;
    }

    .information {
      transform: translate(0);
      padding-left: 0;
    }

    .pages {
      transform: translate(0);
      margin-left: 0;
    }

    .option-box {
      margin-left: 30px;
    }
  }

  @media only screen and (max-width: 450px) {
    .footer {
      margin-top: 0;
    }

    .social img {
      width: 20px;
    }

    .footer__main {
      padding: 0 20px;
    }

    .option-box {
      margin-left: 30px;
    }

    .pages {
      margin-left: 0;
    }

    .information {
      padding-left: 0;
    }

    .back-to-top {
      display: none;
    }

    .contact-and-credit {
      padding-bottom: 15px;
      padding: 0 30px;
    }
  }
`;

export default Footer;
