import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

const BackToTop = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 700; // Mức cuộn trang mà bạn muốn hiển thị element (300px ở đây)

      if (scrollPosition > threshold) {
        setShowElement(true);
      } else {
        setShowElement(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledBackToTop>
      {showElement && (
        <a className="back-to-top" href="#">
          <ion-icon name="arrow-up-outline"></ion-icon>
        </a>
      )}
    </StyledBackToTop>
  );
};

const StyledBackToTop = styled.div`
    .back-to-top {
    position: fixed;
    bottom: 175px;
    right: 70px;
    z-index: 99;
    padding: 9px;
    background-color: #ff64ae;
    border-radius: 5px;
    width: 36px;
    height: 36px;
    cursor: pointer;
    transition: all 0.3s;
    color: #fff;
    font-size: 18px;
  }

  @media screen and (max-width: 1224px) {
  .back-to-top {
    right: 40px;
    bottom: 150px;
  }

  @media screen and (max-width: 450px) {
  .back-to-top {
    right: 40px;
    bottom: 250px;
  }
`;

export default BackToTop;
