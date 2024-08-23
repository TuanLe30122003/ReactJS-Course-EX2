import React from 'react'
import styled from 'styled-components'
import TitleAndDes from '../components/TitleAndDes'

const expertData = {
    TitleAndDes : {
        subTitle : "Professional Teams",
        title: "The Professional expert",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
    },

    expertInfo : { 
        expert1 : {
            position: "Surgeon",
            name: "Briyan Nevalli",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
        },

        expert2 : {
            position: "Dermatologist",
            name: "Bella sebastian",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
        },

        expert2 : {
            position: "Stylist expert",
            name: "Lilly Adams",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
        },
    },

    socialLogo : {
        twitter: "",
        facebook: "",
        instagram: ""
    }
}

const Expert = () => {
  return (
    <StyledExpert>
        <TitleAndDes 
            subTitle={expertData.TitleAndDes.subTitle}
            title={expertData.TitleAndDes.title}
            des={expertData.TitleAndDes.des}
            alignItems={"center"}
        />
    </StyledExpert>
  )
}

const ExpertSection = () => {
    return (
        <StyledExpertSection>
        
        </StyledExpertSection>
    )
}

const StyledExpertSection = styled.div`

`

const styledExpertItem = styled.div`

`

const StyledExpert = styled.div`
    margin-top: 147px;
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 100%;
`

export default Expert
