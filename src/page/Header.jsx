import React from 'react'
import MainLogo from '../components/MainLogo'
import Navigation from '../components/Navigation'
import styled from 'styled-components'
import { asset } from '../assets/assets'
import Introduction from './Introduction'

const Header = () => {
    return (
        <>
            <StyledHeader>
                <div className='header'>
                    <MainLogo />
                    <Navigation />
                </div>

                <Introduction />
            </StyledHeader>


        </>

    )
}

const StyledHeader = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .header {
        width: 1140px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 10%;
        padding: 3rem 10rem;
        align-items: center;
        margin-top: -7px;

    }
`

export default Header
