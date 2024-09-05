import React, { useState } from "react";
import styled from "styled-components";
import { asset } from "../../assets/assets";

const question = [
  {
    id: 1,
    title: "Is beauty consultation handled thoroughly?",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus\nvenenatis, lectus magna fringilla urna\n\nporttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est\nullamcorper eget nulla",
  },

  {
    id: 2,
    title: "Can I be beautiful in an instant time?",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus\nvenenatis, lectus magna fringilla urna\n\nporttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est\nullamcorper eget nulla",
  },

  {
    id: 3,
    title:
      "Are there any side effects to the treatment methods or treatments at this clinic?",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus\nvenenatis, lectus magna fringilla urna\n\nporttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est\nullamcorper eget nulla",
  },

  {
    id: 4,
    title: "Do professionals have accreditation in their respective fields?",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus\nvenenatis, lectus magna fringilla urna\n\nporttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est\nullamcorper eget nulla",
  },
];

const FAQ = () => {
  const [currentItem, setCurrentItem] = useState(1);

  const handleClick = (id) => {
    setCurrentItem(id);
  };

  return (
    <StyledFAQ>
      <div className="cover">
        <div className="title">
          <h1>Services FAQ’s</h1>
          <div></div>
        </div>
        <div className="question-list">
          <ul>
            {question.map((item, index) => {
              return (
                <li key={item.id} onClick={() => handleClick(item.id)}>
                  <div>
                    <p>{item.title}</p>
                    <a>
                      {item.id === currentItem ? (
                        <img className="flip" src={asset.arrow} alt="" />
                      ) : (
                        <img className="" src={asset.arrow} alt="" />
                      )}
                    </a>
                  </div>
                  {item.id === currentItem ? <p>{item.des}</p> : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </StyledFAQ>
  );
};

const StyledFAQ = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 745px;
  align-items: center;

  .cover {
    width: 972px;
  }

  .flip {
    transform: rotate(180deg);
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .title h1 {
    font-family: Poppins;
    font-size: 36px;
    font-weight: 600;
    line-height: 45px;
    text-align: center;
    color: #091156;
    transform: translate(4px, -1px);
  }

  .title > div {
    width: 40px;
    height: 0;
    border: 3.15px solid #ff64ae;
    border-radius: 5px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 68px;
    gap: 29px;
    margin-bottom: 35px;
  }

  ul li:nth-child(2) {
    transform: translate(0, 4px);
  }

  ul li:nth-child(4) {
    transform: translate(0, -5px);
  }

  ul li {
    display: flex;
    transition: all 0.3s;
    flex-direction: column;
  }

  ul li > p {
    padding: 52px 63px 53px 76px;
    width: 100%;
    background: #f6f7ff;
    margin-top: 7.5px;
    border-top: 1px solid #091156;
    border-radius: 0px 0px 20px 20px;
    opacity: 0px;
    font-family: Poppins;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #8b8b8b;
    white-space: pre-line;
    transition: all 0.3s;
  }

  ul li div {
    display: flex;
    flex-direction: row;
    padding: 0 19px 0 35px;
    justify-content: space-between;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: left;
  }

  @media screen and (max-width: 1224px) {
    margin-top: 645px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 745px;

    .cover {
      width: 650px;
    }
  }

  @media screen and (max-width: 700px) {
    .cover {
      width: 430px;
    }
  }

  @media screen and (max-width: 450px) {
    .cover {
      width: 300px;
    }
  }
`;

export default FAQ;
