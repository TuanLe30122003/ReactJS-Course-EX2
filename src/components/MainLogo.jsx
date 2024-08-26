import React from 'react'
import { asset } from '../assets/assets'
import styled from 'styled-components'

const MainLogo = (props) => {
    return (
        <StyledMainLogo>
            <img src={props.whiteText === true ? asset.mainLogo2 : asset.mainLogo} alt="" />
        </StyledMainLogo>

    )
}

const StyledMainLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 160px;
    margin-left: -15px;

    @media only screen and (max-width: 1224px) {
        margin-right: 20px;
    }

    @media screen and (max-width: 1024px) {
        margin-right: 0;
        margin-left: 0;
    }

    @media screen and (max-width: 700px) {
        img {
            width: 70%;
        }
    }
`

export default MainLogo
