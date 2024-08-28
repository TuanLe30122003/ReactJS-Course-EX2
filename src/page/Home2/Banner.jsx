import React from "react";
import { asset } from "../../assets/assets";

const Banner = () => {
  return (
    <StyledBanner>
      <div className="banner">
        <img src={asset.bannerH2} alt="" />
      </div>

      <div className="">
        <div className="banner__title">
          <h3>Why choosing us?</h3>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit ut aliquam, purus sit amet luctus\nvenenatis."
            }
          </p>
        </div>

        <div className="number">
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </StyledBanner>
  );
};

const NumberItem = () => {
  return (
    <div>
      <img src="" alt="" />
    </div>
  );
};

const StyledBanner = styled.div``;

export default Banner;
