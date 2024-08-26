import React from 'react'
import styled from 'styled-components'
import TitleAndDes from '../../components/TitleAndDes'
import { asset } from '../../assets/assets'

const serviceData = {
    titleAndDes : {
        subTitle: "Main Services",
        title: "Learn services to focus\non your beauty",
        des: "Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient\namet, feugiat tellus sagittis, scelerisque eget nulla turpis."
    },

    serviceBox : {
        service1 : {
            image: asset.service1,
            name: "Beauty consultation",
            des: "Non parturient amet, feugiat\ntellus sagittis, scelerisque eget\nnulla turpis."
        },

        service2 : {
            image: asset.service2,
            name: "Skin treatments",
            des: "Non parturient amet, feugiat\ntellus sagittis, scelerisque eget\nnulla turpis."
        },

        service3 : {
            image: asset.service3,
            name: "Beauty product",
            des: "Non parturient amet, feugiat\ntellus sagittis, scelerisque eget\nnulla turpis."
        },
    }
}

const CoreServices = () => {
  return (
    <StyledCoreServices>
        <TitleAndDes 
            subTitle={serviceData.titleAndDes.subTitle} 
            title={serviceData.titleAndDes.title}
            des={serviceData.titleAndDes.des}
        />

        <StyledServiceBox className='service-box'>
            <ServiceItem image={serviceData.serviceBox.service1.image} serviceName={serviceData.serviceBox.service1.name} 
                serviceDes={serviceData.serviceBox.service1.des}/>
            <ServiceItem image={serviceData.serviceBox.service2.image} serviceName={serviceData.serviceBox.service2.name} 
                serviceDes={serviceData.serviceBox.service2.des}/>
            <ServiceItem image={serviceData.serviceBox.service3.image} serviceName={serviceData.serviceBox.service3.name} 
                serviceDes={serviceData.serviceBox.service3.des}/>
        </StyledServiceBox>

    </StyledCoreServices>
  )
}

const ServiceItem = (props) => {
    return (
        <StyledServiceItem>
            <img src={props.image} alt="" />
            <h3>{props.serviceName}</h3>
            <p>{props.serviceDes}</p>
        </StyledServiceItem>
    )
}

const StyledServiceBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 82px;
    gap: 56px;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`

const StyledCoreServices = styled.div`
    margin-top: 127px;
    padding: 0 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 1224px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    @media screen and (max-width: 700px) {
        padding: 0 20px;
    } 
`

// Styled components

const StyledServiceItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 62px;
    padding-left: 30px;
    padding-right: 30px;
    width: 343px;
    padding-bottom: 71px;
    box-shadow: 0px 25px 50px 25px #F6F7FF;
    border-radius: 42px;

    img {}

    h3 {
        margin-top: 58px;
        font-family: Poppins;
        font-size: 18px;
        font-weight: 600;
        line-height: 22.5px;
        text-align: center;
        color: #091156;

    }

    p {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.1em;
        text-align: center;
        color: #8B8B8B;
        white-space: pre-line;
        margin-top: 20px;
    }

    @media screen and (max-width: 1224px) {

    }

    @media screen and (max-width: 1024px) {
        .service-box {
            flex-direction: column;
        }
    }

    
`


export default CoreServices
