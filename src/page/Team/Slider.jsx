import React, { useState } from "react";
import TitleAndDes from "../../components/TitleAndDes";
import styled from "styled-components";
import { asset } from "../../assets/assets";
import { set } from "react-hook-form";

const customerData = [
  { id: 1, avatar: asset.cusAvt, start: 5 },
  { id: 2, avatar: asset.cusAvt, start: 3 },
  { id: 3, avatar: asset.cusAvt, start: 4 },
  { id: 4, avatar: asset.cusAvt, start: 1 },
];

const Star = () => {
  return <img src={asset.star} alt="star" />;
};

const StarRating = ({ rating = 5 }) => {
  // Tạo một mảng có độ dài bằng số sao cần hiển thị và sử dụng map để render
  const stars = Array(rating).fill(0);

  return (
    <div className="star-rate">
      {stars.map((_, index) => (
        <Star key={index} />
      ))}
    </div>
  );
};

const Slider = () => {
  const [currentCusId, setCurrentCusId] = useState(1);

  const movePreviousCus = () => {
    if (currentCusId === 1) {
      setCurrentCusId(1);
    } else {
      setCurrentCusId((prev) => prev - 1);
    }
  };

  const moveNextCus = () => {
    if (currentCusId === customerData.length) {
      setCurrentCusId(currentCusId);
    } else {
      setCurrentCusId((prev) => prev + 1);
    }
  };

  return (
    <StyledSlider>
      <div className="bg">
        <img src={asset.sliderbg} alt="" />
      </div>

      <TitleAndDes
        subTitle={"Our Testimonials"}
        title={"What our customer says"}
        des={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        }
      />

      <div className="custommer-rate">
        <div className="previous" onClick={() => movePreviousCus()}>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        {customerData.map((item, index) => {
          if (item.id === currentCusId) {
            return (
              <div className="rate">
                <img src={item.avatar} alt="" />
                <p>
                  {" "}
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus\nmetus tincidunt laoreet ultricies condimentum ac integer\naliquam. Lorem diam dignissim amet fermentum elementum dui\ndui. Aliquam sem elementum morbi imperdiet suscipit erat ut.\nPurus volutpat in turpis gravida blandit."
                  }
                </p>

                <StarRating rating={item.start} />
              </div>
            );
          }
        })}

        {/* <div className="rate">
          <img src={asset.cusAvt} alt="" />
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus\nmetus tincidunt laoreet ultricies condimentum ac integer\naliquam. Lorem diam dignissim amet fermentum elementum dui\ndui. Aliquam sem elementum morbi imperdiet suscipit erat ut.\nPurus volutpat in turpis gravida blandit."
            }
          </p>

          <div className="star-rate">
            <img src={asset.star} alt="" />
            <img src={asset.star} alt="" />
            <img src={asset.star} alt="" />
            <img src={asset.star} alt="" />
            <img src={asset.star} alt="" />
          </div>
        </div> */}

        <div className="next" onClick={() => moveNextCus()}>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>

        <div className="col-arrow">
          <div className="previous" onClick={() => movePreviousCus()}>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="next" onClick={() => moveNextCus()}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </div>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  margin-top: 118px;
  postion: relative;
  height: 400px;
  margin-bottom: 90px;

  .bg {
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    transform: translate(0, -118px);
  }

  .title-and-des p {
    margin-top: 10px;
  }

  .custommer-rate {
    margin-top: 65px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 91px;
  }

  .bg img {
    object-fit: cover;
    width: 100%;
  }

  .rate {
    display: flex;
    flex-direction: column;
    width: 544px;
    align-items: center;
  }

  .rate img {
    width: 73px;
  }

  .next ion-icon,
  .previous ion-icon {
    font-size: 25px;
  }

  .next,
  .previous {
    transform: translate(0, 10px);
  }

  .rate p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-align: center;
    white-space: pre-line;
    color: #8b8b8b;
    margin-top: 45px;
  }

  .star-rate {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    margin-top: 34px;
  }

  .star-rate img {
    width: 23.22px;
    height: 23.22px;
  }

  .col-arrow {
    display: none;
  }

  @media screen and (max-width: 1224px) {
    .custommer-rate {
      gap: 60px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 120px;
    margin-top: 78px;

    .custommer-rate {
      gap: 60px;
      flex-direction: column;
    }

    .custommer-rate > .next,
    .custommer-rate > .previous {
      display: none;
    }

    .col-arrow {
      display: flex;
      gap: 50px;
    }
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 200px;

    .title-and-des {
      padding: 0 20px;
    }

    .rate {
      width: 400px;
    }

    .rate p {
      white-space: unset;
    }
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 300px;

    .rate {
      width: 300px;
    }
  }
`;

export default Slider;
