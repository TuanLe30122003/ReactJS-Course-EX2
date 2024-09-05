import React from "react";
import styled from "styled-components";
import TitleAndDes from "../../components/TitleAndDes";
import PinkButton from "../../components/PinkButton";

const Appointment = () => {
  return (
    <StyledAppointment>
      <TitleAndDes
        subTitle={"Get The Quota"}
        title={"Want to be handled by our\nprofessional team immediately?"}
        des={
          "Id dui erat sed quam tellus in purus. Pellentesque congue\nfringilla cras tellus enim."
        }
        textAlign="left"
        alignItems="flex-start"
      />

      <PinkButton
        width="316px"
        height="58px"
        buttonName="Make an Appointment"
      />
    </StyledAppointment>
  );
};

const StyledAppointment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 170px;
  padding-bottom: 35px;
  margin-top: 120px;

  .title-and-des {
    transform: translate(-30px, 0);
  }

  .title-and-des p {
    margin-top: 10px;
  }

  .pink-button {
    transform: translate(-27px, 1px);
  }

  @media (max-width: 1224px) {
    gap: 60px;
    margin-top: 40px;

    .title-and-des {
      transform: translate(0, 0);
    }

    .pink-button {
      transform: translate(0, 1px);
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 20px;

    .title-and-des p,
    .title-and-des h3,
    .title-and-des h1 {
      text-align: center;
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    .pink-button {
      width: 250px;
    }
  }

  @media (min-width: 2000px) {
    margin-top: 720px;
  }
`;

export default Appointment;
