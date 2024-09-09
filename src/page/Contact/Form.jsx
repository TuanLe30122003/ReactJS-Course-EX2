import React from "react";
import styled from "styled-components";
import { asset } from "../../assets/assets";
import TitleAndDes from "../../components/TitleAndDes";
import { useForm } from "react-hook-form";
import PinkButton from "../../components/PinkButton";

const Form = () => {
  const { register, handleSubmit } = useForm();

  return (
    <StyledForm>
      <div className="contact-bubble">
        <img src={asset.contact2Bubble} alt="" />
      </div>

      <div className="title-and-des">
        <div className="title">
          <h3>Contact Us</h3>
          <h1>{"Contact service for our\ncustomers"}</h1>
        </div>

        <div className="des">
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit ut aliquam, purus sit amet\nluctus venenatis"
            }
          </p>
        </div>
      </div>

      <div className="cover">
        <div className="contact-pic">
          <img src={asset.contact2Pic} alt="" />
        </div>

        <div className="contact-form">
          <div>
            <form action="" className="form">
              <input
                className="grid-item"
                type="text"
                placeholder="First name"
                {...register("firstname", {
                  required: "This field is required",
                })}
              />
              <input
                className="grid-item"
                type="text"
                placeholder="Last name"
                {...register("lastname", {
                  required: "This field is required",
                })}
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
      </div>

      <div className="map">
        <img src={asset.map} alt="" />
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-top: 70px;
  position: relative;

  .title-and-des {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 258px;
    margin-bottom: 60px;
  }

  .map {
    width: 100%;
    margin-top: 110px;
    height: 418px;
  }

  .map img {
    width: 100%;
    min-height: 400px;
    object-fit: cover;
  }

  .title {
    transform: translate(-37px, 0px);
  }

  .des {
    transform: translate(2px, 30px);
  }

  .title-and-des h3 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #ff64ae;
  }

  .title-and-des h1 {
    font-family: Poppins;
    font-size: 36px;
    font-weight: 600;
    line-height: 45px;
    text-align: left;
    color: #091156;
    margin-top: 12px;
    white-space: pre-line;
  }

  .title-and-des p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    white-space: pre-line;
    color: #8b8b8b;
  }

  .cover {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
  }

  .contact-bubble {
    position: absolute;
    left: 0;
    top: -90px;
  }

  .contact-bubble img {
    width: 100%;
  }

  .pink-button {
    margin-top: 20px;
  }

  .contact-pic {
    transform: translate(22px, 70px);
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
    transform: translate(-10px, 0px);
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
    padding: 17px 35px 18px 26px;
  }

  .form input:nth-child(1) {
    transform: translate(1px, -2px);
    max-width: 242.21px;
    padding: 17px 35px 19px 22px;
  }

  .form input:nth-child(3) {
    padding: 17px 35px 21px 22px;
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
    transform: translate(1px, -1px);
  }

  .pink-button a {
    text-align: center;
    transform: translate(0, -3px);
  }

  @media only screen and (max-width: 1224px) {
    .cover {
      padding: 0;
      margin-top: 30px;
      flex-direction: column;
      width: 100%;
      gap: 50px;
      justify-content: center;
      align-items: center;
    }

    .title-and-des {
      gap: 80px;
      padding: 0 20px;
    }

    .contact-bubble {
      top: -160px;
    }

    .contact-pic {
      transform: translate(6px, 0);
      order: 2;
    }

    .map img {
      min-heght: 400px;
      object-fit: cover;
    }

    .contact-form {
      order: 1;
    }
  }

  @media only screen and (max-width: 1024px) {
    .contact-pic {
      transform: translate(0, 0);
    }

    .title-and-des {
      flex-direction: column;
      gap: 30px;
    }

    .title-and-des h3 {
      text-align: center;
    }

    .title-and-des h1 {
      text-align: center;
    }

    .title-and-des p {
      text-align: center;
      transform: translate(0, 0);
    }

    .title {
      transform: translate(0, 0);
    }

    .des {
      transform: translate(0, 0);
    }
  }

  @media only screen and (max-width: 700px) {
    .cover {
      padding: 0 20px;
    }

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

export default Form;
