import React from 'react'
import styled from 'styled-components'
import PinkButton from './PinkButton'

const Navigation = () => {
    return (
        <StyledNavigation>
            <ul className='main-menu'>
                <li><a href="">Home</a><i class="fa-solid fa-plus"></i></li>
                <li><a href="">About</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Gallery</a></li>
                <li><a href="">Blog</a></li>
                <li id="exit"><a href=""><i class="fa-solid fa-circle-xmark"></i></a></li>
            </ul>

            <PinkButton buttonName='Contact' width="158px" height="52px"/>
        </StyledNavigation>
    )
}

const StyledNavigation = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -10px;

    .main-menu {
        display: flex;
        flex-direction: row;
        margin-left: -100px;
        gap: 44px;
        margin-right: 52px;
    }

    li {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    li a {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 1.75px;
        cursor: pointer;
        color: #000;
    }

    .pink-button {
        transform: translate(-2px, 1px);
    }

    li:nth-child(1) {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    li i {
        font-size: 12px;
    }

    #exit {
        display: none;
    }

`

export default Navigation
