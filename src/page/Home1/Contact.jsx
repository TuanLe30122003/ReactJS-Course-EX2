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
  padding: 0 150px;
  gap: 100px;
  margin-top: 150px;
  position: relative;

  .contact-bubble {
    position: absolute;
    left: 0;
    top: -210px;
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
    transform: translate(5px, 160px);
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
  }

  .full-width {
    grid-column: span 2;
  }

  .form input::placeholder {
    letter-spacing: 0.1em !important;
  }

  .form input:nth-child(2) {
    transform: translate(-3px, -2px);
  }

  .form input:nth-child(1) {
    transform: translate(1px, -2px);
  }

  .form textarea {
    width: 520px;
    border: 1px solid rgba(217, 221, 254, 1);
    letter-spacing: 0.1em;
    border-radius: 15px;
    height: 240px;
    font-size: 16px;
    padding-top: 28px;
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
    flex-direction: column;
    padding: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
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
    }

    .title-and-des h1 {
      white-space: unset;
    }

    contact-pic img {
      width: 50%;
    }

    .full-width {
      grid-column: span 1;
    }

    .grid-item {
      padding: 17px 34px 17px 24px;
      max-width: 350px;
    }
  }

  @media screen and (max-width: 450px) {
    .grid-item {
      max-width: 300px;
    }
  }
`;

export default Contact;
