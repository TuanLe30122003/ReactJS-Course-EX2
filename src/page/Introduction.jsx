import React from 'react'
import styled from 'styled-components'
import PinkButton from '../components/PinkButton'
import { asset } from '../assets/assets'

const Introduction = () => {
    return (
        <StyledIntro>
            <div className='intro__bg'>
                <img src={asset.introBG} alt="" />
            </div>
        
            <div className='intro-cover'>
                <div className='introduction'>
                    <h1>Clinic & beauty <br /> consultant</h1>
                    <p>It is a long established fact that a reader will be <br />
                        by the readable content of a page.</p>

                    <PinkButton buttonName='More Details' width='200px' height='58.36px'/>
                </div>

                <div className='intro__pic'>
                    <img src={asset.landingPic} alt="" />
                </div>
            </div>

            <div class="slider-position">
                <div class="position-bar"></div>
                <div class="middle-bar"></div>
                <div class="position-bar"></div>
            </div> 
        </StyledIntro>
    )
}

const StyledIntro = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 85px;

    .intro-cover {
        display: flex;
        flex-direction: row;
    }

    .introduction {
        display: flex;
        margin-top: 70px;
        flex-direction: column;
    }

    .intro__bg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .introduction > h1 {
        font-family: Poppins;
        font-size: 48px;
        font-weight: 600;
        line-height: 60px;
        text-align: left;
        color: #091156;
        margin-bottom: 10px;
        
    }   

    .introduction > p {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.1em;
        text-align: left;
        color: #091156;
        margin-bottom: 30px;
    }

    .intro__pic img {
        transform: translate(34px, 15px);
    }

    .pink-button {
        margin-top: 5px;
    }

    .slider-position {
    margin-top: 138px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 20px;
    gap: 7px;
}

.slider-position>.position-bar {
    height: 3px;
    width: 15px;
    background-color: #EEEEEE;
    border-radius: 50px;
}

.slider-position>.middle-bar {
    height: 8px;
    width: 25px;
    background-color: #414880;
    border-radius: 50px;
}
`

export default Introduction
