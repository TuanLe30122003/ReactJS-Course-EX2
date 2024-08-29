import React from "react";
import styled from "styled-components";
import { asset } from "../../assets/assets";
import TitleAndDes from "../../components/TitleAndDes";
import { useForm } from "react-hook-form";
import PinkButton from "../../components/PinkButton";

const Contact = (props) => {
  const { register, handleSubmit } = useForm();
  return (
    <StyledContact>
      <div className="contact-bubble">
        <img src={asset.bubbleBg2} alt="" />
      </div>

      <div className="contact-pic">
        <img src={asset.contactPic} alt="" />
      </div>

      <div className="contact-form">
        <TitleAndDes
          subTitle={"Contact Us"}
          title={"Send your inquiry to\nour expert team"}
          des={"Lorem ipsum dolor sit amet nulla turapis tellus."}
          textAlign={"left"}
          alignItems={"flex-start"}
        />

        <div>
          <form action="" className="form">
            <input
              className="grid-item"
              type="text"
              placeholder="First name"
              {...register("firstname", { required: "This field is required" })}
            />
            <input
              className="grid-item"
              type="text"
              placeholder="Last name"
              {...register("lastname", { required: "This field is required" })}
            />
            <input
              className="grid-item full-width"
              type="email"
              placeholder="Email address"
              {...register("email", { required: "This field is required" })}
            />
            <input
              className="grid-item full-width"
              type="text"
              placeholder="Subject message"
              {...register("email")}
            />

            <textarea
              className="grid-item full-width"
              id="message"
              placeholder="Your inquiry here"
              {...register("message")}
            />

            <PinkButton
              buttonName="Send Message"
              width={"248px"}
              height={"58px"}
            />
          </form>
        </div>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: 100px;
  margin-top: 150px;
  position: relative;

  .contact-bubble {
    position: absolute;
    left: 0;
    top: -210px;
  }

  .contact-bubble img {
    width: 100%;
  }

  .title-and-des {
    margin-bottom: 50px;
    transform: translate(2px, 0);
  }

  .title-and-des h3 {
    transform: translate(2px, -2px);
  }

  .title-and-des h1 {
    transform: translate(0, -2px);
  }

  .pink-button {
    margin-top: 20px;
  }

  .contact-pic {
    transform: translate(6px, 156px);
  }

  .contact-pic img {
    width: 100%;
  }

  .contact-form {
    transform: translate(5px, 0);
  }

  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    margin: 0 auto;
    gap: 37px;
  }

  .grid-item {
    padding: 17px 35px 17px 24px;
    border: 1px solid rgba(217, 221, 254, 1);
    border-radius: 15px;
    height: 61.58px;
    letter-spacing: 0.1em;
    max-width: 520px;
  }

  .full-width {
    grid-column: span 2;
  }

  .form input::placeholder {
    letter-spacing: 0.1em !important;
  }

  .form input:nth-child(2) {
    transform: translate(-6px, -2px);
    max-width: 242.21px;
    padding-left: 27px;
  }

  .form input:nth-child(1) {
    transform: translate(1px, -2px);
    max-width: 242.21px;
  }

  .form textarea {
    width: 520px;
    border: 1px solid rgba(217, 221, 254, 1);
    letter-spacing: 0.1em;
    border-radius: 15px;
    height: 240px;
    font-size: 16px;
    padding-top: 26px;
    /* padding: 25px 100px 100px 24px; */
  }

  .form textarea::placeholder {
    letter-spacing: 0.1em !important;
  }

  .pink-button {
    transform: translate(3px, -1px);
  }

  .contact-info .pink-button a {
    text-align: center;
  }

  @media only screen and (max-width: 1224px) {
    padding: 0;
    margin-top: 0;
    flex-direction: column;
    width: 100%;
    gap: 0;
    justify-content: center;
    align-items: center;

    .contact-bubble {
      top: -160px;
    }

    .contact-pic {
      transform: translate(6px, 0);
    }
  }

  @media only screen and (max-width: 1024px) {
    .contact-pic {
      transform: translate(0, 0);
    }
  }

  @media only screen and (max-width: 700px) {
    padding: 0 20px;

    .form {
      grid-template-columns: 1fr;
      justify-content: center;
    }

    .title-and-des h1 {
      white-space: unset;
      text-align: center;
    }

    .title-and-des h3 {
      text-align: center;
      width: 100%;
    }

    .title-and-des p {
      text-align: center;
      width: 100%;
    }

    contact-pic img {
      width: 50%;
    }

    .full-width {
      grid-column: span 1;
    }

    .form input:nth-child(2) {
      padding-left: 24px;
      transform: translate(0, 0);
      max-width: 430px;
    }

    .form input:nth-child(1) {
      transform: translate(0, 0);
      max-width: 430px;
    }

    .grid-item {
      width: 430px !important;
      justify-self: center;
      padding: 17px 34px 17px 24px;
    }

    .pink-button {
      justify-self: center;
    }
  }

  @media screen and (max-width: 450px) {
    .grid-item {
      width: 350px !important;
    }
  }

  @media screen and (max-width: 350px) {
    .grid-item {
      width: 280px !important;
    }
  }
`;

export default Contact;
