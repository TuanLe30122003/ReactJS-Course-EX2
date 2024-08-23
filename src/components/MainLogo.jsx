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
    margin-right: 210px;
    margin-left: -15px
`

export default MainLogo
