import React from 'react'
import TitleAndDes from '../components/TitleAndDes'
import styled from 'styled-components'
import { asset } from '../assets/assets'
import PinkButton from '../components/PinkButton'

const aboutData = {
    titleAndDes : {
        subTitle : "About Us" ,
        title : "We are the best beauty clinic",
        des: "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Elit, quam suscipit purus donec\namet. Egestas volutpat facilisi eu libero. Nunc,\nipsum ornare mauris sit quam quis enim. Varius\ntellus in suspendisse placerat.\n\nId dui erat sed quam tellus in purus. Pellentesque\ncongue fringilla cras tellus enim."
    }, 

    picture : {
        url : asset.aboutPic,
        width : "476px",
        height: "350px"
    }
}

const About = () => {
  return (
    <StyledAbout>
        <div className='about__cover'>
            <div className='info'>
                <TitleAndDes 
                subTitle={aboutData.titleAndDes.subTitle}
                title={aboutData.titleAndDes.title}
                des={aboutData.titleAndDes.des}
                alignItems = {"flex-start"}
                textAlign = {"left"}
            />

            <div className='button'>
                <PinkButton buttonName={"Learn More"} width={"200px"} height={"58.36px"}/>
                <div className='watch'>
                    <ion-icon name="play-circle"></ion-icon>
                    <a href="">Watch Video</a>
                </div>
            </div>
            </div>

            <div className='about__pic'>
                <img src={aboutData.picture.url} alt="" />
            </div>
        </div>
    </StyledAbout>
  )
}

const StyledAbout = styled.div`

    margin-top: 134.34px;
    display: flex;
    align-items: center;
    padding: 0 150px;
    
    .about__cover {
        display: flex;
        flex-direction: row;
    }

    .title-and-des p {
        width: 100%;
    }

    .about__pic {
        transform: translate(135px, 45px);
    }

    .button {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 54px;
        justify-content: flex-start;
        gap: 38.5px;
    }

    .button .pink-button {
        transform: translate(0, 0)
    }

    .watch {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8.88px;
    }

    .watch a {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.1em;
        text-align: left;
        color: #8B8B8B;

    }

    .watch ion-icon {
        font-size: 59px;
    }

    .about__pic img {
        width: 476px;
    }
`

export default About
