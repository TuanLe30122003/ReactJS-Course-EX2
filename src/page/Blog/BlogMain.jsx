import React from "react";
import styled from "styled-components";
import { asset } from "../../assets/assets";
import PinkButton from "../../components/PinkButton";

const BlogMain = () => {
  return (
    <StyledBlogMain>
      <div className="cover">
        <div className="article-box">
          <Article
            img={asset.article1}
            title={"How much does a consultation\ncost at our clinic?"}
            subtitle={"Consultation"}
            des={
              "A wonderful serenity has taken possession of my entire soul,\nlike these sweet mornings of spring which I enjoy with my\nwhole heart. I am alone, and feel the charm of existence in\nthis spot, which was created for the…"
            }
          />

          <Article
            img={asset.article2}
            title={"Watch out! don't choose the\nwrong beauty product"}
            subtitle={"Beauty"}
            des={
              "A wonderful serenity has taken possession of my entire soul,\nlike these sweet mornings of spring which I enjoy with my\nwhole heart. I am alone, and feel the charm of existence in\nthis spot, which was created for the…"
            }
          />

          <Article
            img={asset.article3}
            title={"About skin care you need to\nknow"}
            subtitle={"Treatments"}
            des={
              "A wonderful serenity has taken possession of my entire soul,\nlike these sweet mornings of spring which I enjoy with my\nwhole heart. I am alone, and feel the charm of existence in\nthis spot, which was created for the…"
            }
          />
        </div>

        <div className="other">
          <SearchBar />

          <div className="other-group">
            <div className="recent-post">
              <h3>Recent Posts</h3>

              <div className="recent-item">
                <img src={asset.recent1} alt="" />
                <div>
                  <h4>01 jan 2021</h4>
                  <p>
                    {"Lorem ipsum dolor sit\namet, consectetur\nadipiscing."}
                  </p>
                </div>
              </div>

              <div className="recent-item">
                <img src={asset.recent1} alt="" />
                <div>
                  <h4>01 jan 2021</h4>
                  <p>
                    {"Lorem ipsum dolor sit\namet, consectetur\nadipiscing."}
                  </p>
                </div>
              </div>

              <div className="recent-item">
                <img src={asset.recent1} alt="" />
                <div>
                  <h4>01 jan 2021</h4>
                  <p>
                    {"Lorem ipsum dolor sit\namet, consectetur\nadipiscing."}
                  </p>
                </div>
              </div>
            </div>

            <div className="categ">
              <h4>Categories</h4>
              <ul>
                <li>Consultation</li>
                <li>Beauty</li>
                <li>Treatments</li>
                <li>News</li>
              </ul>
            </div>
          </div>

          <div className="other-group">
            <div className="cloud-tag">
              <h4>Cloud Tag</h4>

              <div className="tag">
                <div>
                  <a href="">beauty</a>
                </div>
                <div>
                  <a href="">cute</a>
                </div>
                <div>
                  <a href="">skin</a>
                </div>
                <div>
                  <a href="">glow</a>
                </div>
                <div>
                  <a href="">style</a>
                </div>
                <div>
                  <a href="">clinic</a>
                </div>
                <div>
                  <a href="">style</a>
                </div>
                <div>
                  <a href="">great</a>
                </div>
                <div>
                  <a href="">cute</a>
                </div>
              </div>
            </div>

            <div className="social">
              <h4>Social Connect</h4>

              <ul>
                <li>
                  <img src={asset.fb} alt="" />
                </li>
                <li>
                  <img src={asset.twt} alt="" />
                </li>
                <li>
                  <img src={asset.ig} alt="" />
                </li>
                <li>
                  <img src={asset.In} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ul className="page">
        <li>
          <a href="">1</a>
        </li>
        <li>
          <a href="">2</a>
        </li>
        <li>
          <a href="">3</a>
        </li>
      </ul>
    </StyledBlogMain>
  );
};

const SearchBar = () => {
  return (
    <StyledSearchBar className="search-bar">
      <input type="text" placeholder="Search here ..." />
      <a href="">
        <img src={asset.searchIcon} alt="" />
      </a>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 50px;
  width: 350px;
  height: 65px;
  overflow: hidden;
  box-shadow: -2px 4px 31px 9px #f2f4ff;

  input {
    width: 274px;
    outline: none;
    border: none;
    padding: 20px 0 20px 27px;
  }

  input::placeholder {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #8b8b8b;
  }

  a {
    background-color: #172176;
    width: 76px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 450px) {
    width: 280px;

    input {
      width: 204px;
    }
  }
`;

const Article = (props) => {
  return (
    <StyledArticle>
      <img src={props.img} alt="" />
      <div className="content">
        <h3>
          <div>
            <img src={asset.fileIcon} alt="" />
          </div>
          {props.subtitle}
        </h3>

        <h1>{props.title}</h1>
        <p>{props.des}</p>
        <PinkButton buttonName="Read More" width="226px" height="58px" />
      </div>
    </StyledArticle>
  );
};

const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;
  width: 730px;

  .content {
    padding-top: 60px;
    padding-left: 76px;
    padding-bottom: 100px;
  }

  h3 {
    display: flex;
    flex-direction: row;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #ff64ae;
    margin-bottom: 16px;
    gap: 15px;
  }

  h1 {
    font-family: Poppins;
    font-size: 36px;
    font-weight: 600;
    line-height: 45px;
    text-align: left;
    margin-bottom: 20px;
    color: #091156;
    white-space: pre-line;
  }

  p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    white-space: pre-line;
    color: #8b8b8b;
  }

  .pink-button {
    margin-top: 38px;
  }

  @media only screen and (max-width: 1024px) {
    width: 430px;

    .content {
      padding-top: 60px;
      padding-left: 36px;
      padding-bottom: 100px;
    }
  }

  @media only screen and (max-width: 700px) {
    width: 300px;

    .content {
      padding-top: 60px;
      padding-left: 20px;
      padding-bottom: 100px;
    }
  }
`;

const StyledBlogMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 108px;
  align-items: center;

  .page {
    flex-direction: row;
    display: flex;
    gap: 17px;
    margin-top: 95px;
    transform: translate(6px, -2px);
  }

  .page li {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page li a {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    color: #c7c7c7;
  }

  .page li:nth-child(1) {
    background-color: #172176;
    box-shadow: 0px 7px 37px 4px #e6e9ff;
  }

  .cover {
    display: flex;
    gap: 60px;
    justify-content: center;
    flex-direction: row;
  }

  .article-box {
    display: flex;
    flex-direction: column;
    gap: 132px;
  }

  .recent-post {
    display: flex;
    flex-direction: column;
    gap: 26px;
    box-shadow: -2px 4px 31px 9px #f2f4ff;
    padding-left: 49px;
    padding-top: 58px;
    padding-bottom: 64px;
    width: 350px;
    border-radius: 25px;
    margin-top: 76px;
  }

  .recent-post h3 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #091156;
    margin-bottom: 5px;
  }

  .recent-item {
    display: flex;
    flex-direction: row;
    gap: 26px;
  }

  .recent-item h4 {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-align: left;
    white-space: pre-line;
    color: #ff64ae;
    margin-bottom: 5px;
    transform: translate(0, -3px);
  }

  .recent-item p {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #8b8b8b;
    white-space: pre-line;
  }

  .categ {
    width: 350px;
    box-shadow: -2px 4px 31px 9px #f2f4ff;
    border-radius: 25px;
    padding: 58px 0 49px 49px;
    margin-top: 83px;
  }

  .categ h4 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #091156;
    margin-bottom: 22px;
  }

  .categ ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .categ li {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #8b8b8b;
  }

  .cloud-tag {
    display: flex;
    flex-direction: column;
    padding-left: 44px;
    padding-right: 44px;
    padding-top: 58px;
    padding-bottom: 57px;
    width: 350px;
    border-radius: 25px;
    margin-top: 83px;
    box-shadow: -2px 4px 31px 9px #f2f4ff;
  }

  .cloud-tag h4 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #091156;
    margin-bottom: 23px;
    transform: translate(5px, 3px);
  }

  .tag {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 8px;
    row-gap: 19px;
  }

  .tag div {
    box-shadow: 0px 4px 17px 0px #eef0ff;
    border-radius: 50px;
    padding: 3px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82px;
  }

  .tag div a {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.1em;
    color: #8b8b8b;
    text-align: center;
  }

  .social {
    width: 350px;
    box-shadow: -2px 4px 31px 9px #f2f4ff;
    border-radius: 25px;
    margin-top: 83px;

    padding: 58px 0 62px 49px;
    display: flex;
    flex-direction: column;
  }

  .social h4 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #091156;
    margin-bottom: 30px;
  }

  .social ul {
    display: flex;
    flex-direction: row;
    gap: 21px;
    transform: translate(-5px, 0);
  }

  .social li {
    border-radius: 50%;
    width: 43px;
    height: 43px;
    box-shadow: 0px 4px 19px 11px #f6f7ff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 1224px) {
    .cover {
      flex-direction: column;
    }

    .other {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      order: 1;
    }

    .article-box {
      order: 2;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 450px) {
    .social {
      width: 280px;
      padding: 58px 19px 62px 19px;
    }

    .cloud-tag {
      width: 280px;
    }

    .tag div {
      width: 42px;
    }

    .categ {
      padding: 58px 19px 49px 19px;
      width: 280px;
    }

    .recent-post {
      padding-left: 19px;
      width: 280px;
    }
  }
`;

export default BlogMain;
