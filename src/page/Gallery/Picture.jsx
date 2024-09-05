import React from "react";
import styled from "styled-components";
import { asset } from "../../assets/assets";

const Picture = () => {
  return (
    <StyledPicture>
      <div className="main">
        <div className="title">
          <h3>Our Gallery</h3>
          <h1>{"Check out the collection pictures\nfrom our clinic"}</h1>
        </div>

        <div className="des">
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit ut aliquam, purus sit amet\nluctus venenatis"
            }
          </p>
        </div>
      </div>

      <div className="gallery">
        <img src={asset.gal1} alt="" />
        <img src={asset.gal2} alt="" />
        <img src={asset.gal3} alt="" />
        <img src={asset.gal4} alt="" />
        <img src={asset.gal5} alt="" />
        <img src={asset.gal6} alt="" />
        <img src={asset.gal7} alt="" />
        <img src={asset.gal8} alt="" />
        <img src={asset.gal9} alt="" />
      </div>

      <div className="note">
        <p>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,\npurus sit amet luctus venenatis, lectus magna fringilla urna, porttitor\nrhoncus dolor purus non enim,"
          }{" "}
          <span>our teams.</span>
        </p>
      </div>
    </StyledPicture>
  );
};

const StyledPicture = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  align-items: center;

  .main {
    display: flex;
    flex-direction: row;
    margin-bottom: 75px;
    justify-content: center;
    gap: 112px;
    width: 100%;
    align-items: center;
  }

  .title {
    display: flex;
    flex-direction: column;
    transform: translate(-17px, 0);
  }

  .title h3 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #ff64ae;
    margin-bottom: 12px;
  }

  .title h1 {
    font-family: Poppins;
    font-size: 36px;
    font-weight: 600;
    line-height: 45px;
    text-align: left;
    white-space: pre-line;
    color: #091156;
  }

  .des {
    transform: translate(-17px, 0);
  }

  .des p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #8b8b8b;
    transform: translate(0, 5px);
    white-space: pre-line;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 40px;
    row-gap: 38px;
    margin-top: 12px;
    width: 79%;
    justify-content: center;
  }

  .gallery img {
    width: 100%;
    object-fit: cover;
  }

  .note {
    width: 100%;
    padding: 0 150px;
    margin-top: 72px;
  }

  .note p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #8b8b8b;
    white-space: pre-line;
  }

  .note span {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #091156;
  }

  @media (max-width: 1224px) {
    .gallery {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 15px;
    }

    .title,
    .des {
      transform: translate(0, 0);
    }

    .main {
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
    }

    .title h1 {
      text-align: center;
      white-space: unset;
    }

    .title h3 {
      text-align: center;
    }

    .des p {
      text-align: center;
    }

    .main p {
      text-algin: center;
      white-space: unset;
    }

    .note p {
      text-algin: center;
      white-space: unset;
    }

    .note {
      padding: 0;
      width: 80%;
    }
  }

  @media (max-width: 700px) {
    .gallery {
      grid-template-columns: 1fr;
      column-gap: 10px;
    }
  }

  @media (min-width: 2000px) {
    .note p {
      text-align: center;
    }
  }
`;

export default Picture;
