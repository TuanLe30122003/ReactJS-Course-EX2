import React from "react";
import styled from "styled-components";
import TitleAndDes from "../../components/TitleAndDes";
import { asset } from "../../assets/assets";

const Blog = () => {
  return (
    <StyledBlog>
      <div className="blog-cover">
        <TitleAndDes
          subTitle={"The Blog"}
          title={"Our latest news"}
          des={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />

        <img src={asset.blogWave} className="blog-wave" alt="" />

        <div className="blog-box">
          <BlogItem
            img={asset.blog1}
            title={"How much does a consultation\ncost at our clinic?"}
            des={
              "A wonderful serenity has taken\npossession of my entire soul,\nlike these sweet mornings ..."
            }
          />

          <BlogItem
            img={asset.blog2}
            title={"Watch out! don't choose the wrong beauty product"}
            des={
              "A wonderful serenity has taken\npossession of my entire soul,\nlike these sweet mornings ..."
            }
          />

          <BlogItem
            img={asset.blog3}
            title={"About skin care you need to\nknow"}
            des={
              "A wonderful serenity has taken\npossession of my entire soul,\nlike these sweet mornings ..."
            }
          />
        </div>
      </div>

      <div className="service-call">
        <div className="service-call__title">
          <h1>Request call services</h1>
          <p>
            {"Lorem ipsum dolor sit amet, consect\nadipiscing elit"}
            <span>Contact Us</span>.
          </p>
        </div>

        <div className="service-call__input">
          <div>
            <input
              type="number"
              placeholder="Insert your phone number here ..."
            />
            <div className="phone">
              <img src={asset.phoneIcon} alt="" />
            </div>
          </div>
          <div>Toll free for our coverage areas.</div>
        </div>
      </div>
    </StyledBlog>
  );
};

const BlogItem = (props) => {
  return (
    <StyledBlogItem>
      <img src={props.img} alt="" />
      <div className="info">
        <h3>{props.title}</h3>
        <p>{props.des}</p>
        <a href="">Learn more{">>"}</a>
      </div>
    </StyledBlogItem>
  );
};

const StyledBlog = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 110px;
  width: 100%;
  margin-bottom: 66px;

  .blog-cover {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .blog-box {
    display: flex;
    flex-direction: row;
    gap: 49px;
    margin-top: 88px;
  }

  .blog-wave {
    position: absolute;
    z-index: -1;
    right: 0;
    top: -153px;
    width: 100%;
  }

  .service-call {
    margin-top: 170px;
    display: flex;
    flex-direction: row;
    gap: 90px;
    transform: translate(-5px, 0);
  }

  .service-call__title h1 {
    font-family: Poppins;
    font-size: 36px;
    font-weight: 600;
    line-height: 45px;
    text-align: left;
    color: #091156;
    margin-bottom: 16px;
  }

  .service-call__title p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #8b8b8b;
    white-space: pre-line;
  }

  .service-call__title span {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #8b8b8b;
    margin-left: 5px;
    color: #172176;
  }

  .service-call__input {
  }

  .service-call__input .phone {
    height: 100%;
    width: 113px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff64ae;
    cursor: pointer;
    height: 73px;
  }

  .service-call__input > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    overflow: hidden;
    border: 1px 0px 0px 0px;
    opacity: 0px;
    align-items: center;
    transform: translate(9px, 12px);
  }

  .service-call__input > div:nth-child(2) {
    width: 100%;
    text-align: right;
    transform: translate(10px, 20px);
    font-family: Poppins;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.1em;
    text-align: right;
  }

  /* General input styles */
  .service-call__input input {
    flex-grow: 1;
    height: 73px;
    width: 546px;
    border-radius: 25px;
    border: 1px solid #d9ddfe;
    padding-bottom: 22px;
    padding-left: 37px;
    padding-top: 23px;
  }
  /* Placeholder styles */
  .service-call__input input::placeholder {
    line-height: 1.5rem;
    letter-spacing: 0.1em;
    color: #c5c5c5;
    transform: translate(-0.5px, -1px);
  }

  @media (min-width: 640px) {
    .service-call__input input {
      border-top-left-radius: 25px; /* sm:rounded-s-[25px] */
      border-bottom-left-radius: 25px;
      border-top-right-radius: 0; /* sm:rounded-e-[0] */
      border-bottom-right-radius: 0;
    }
  }

  @media only screen and (max-width: 1224px) {
    .blog-box {
      flex-direction: column;
    }

    .service-call {
      flex-direction: column;
      justify-content: center;
      gap: 50px;
    }

    .service-call__input input {
      max-width: 500px;
    }

    .service-call__input > div:nth-child(1) {
      transform: translate(0, 0);
    }

    .service-call__title h1 {
      text-align: center;
    }

    .service-call__title p {
      text-align: center;
    }
  }

  @media only screen and (max-width: 700px) {
    .service-call__input input {
      width: 380px;
    }

    .service-call__input .phone {
      border-radius: 25px;
      width: 170px;
    }

    .service-call__input > div:nth-child(1) {
      flex-direction: column;
      gap: 30px;
    }

    .service-call__input > div:nth-child(2) {
      transform: translate(0, 20px);
      text-align: center;
    }
  }

  @media only screen and (max-width: 450px) {
    .service-call__input input {
      padding-left: 10px;
      width: 280px;
    }

    .service-call__input input::placeholder {
      line-height: 1.5rem;
      letter-spacing: 0em;
      color: #c5c5c5;
      transform: translate(0, -1px);
    }
  }
`;

const StyledBlogItem = styled.div`
  width: 347px;
  display: flex;
  flex-direction: column;
  height: 543px;
  box-shadow: 0px 25px 50px 5px #f6f7ff;
  border-radius: 25px;

  img {
    width: 100%;
  }

  .info {
    margin-top: 56px;
    padding: 0 0 72px 39px;
  }

  h3 {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 22.5px;
    text-align: left;
    color: #091156;
    white-space: pre-line;
    margin-bottom: 12px;
  }

  p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #8b8b8b;
    white-space: pre-line;
    margin-bottom: 22px;
  }

  a {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 17.5px;
    text-align: left;
    color: #ff64ae;
  }

  @media only screen and (max-width: 450px) {
    width: 280px;

    .info {
      margin-top: 56px;
      padding: 0 0 72px 10px;
    }
  }
`;

export default Blog;
