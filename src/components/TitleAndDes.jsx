import React from 'react'
import styled from 'styled-components'

const TitleAndDes = (props) => {
    return (
        <StyledTitleAndDes className='title-and-des' alignItems={props.alignItems} textAlign={props.textAlign}>
            <h3>
                {
                    props.subTitle
                }
            </h3>
            <h1>{props.title}</h1>
            <p>{props.des}</p>
        </StyledTitleAndDes>
    )
}

const StyledTitleAndDes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems || "center"};
    gap: 12px;

    h3 {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        text-align: ${props => props.textAlign || "center"};
        color: #FF64AE;
    }

    h1 {
        font-family: Poppins;
        font-size: 36px;
        font-weight: 600;
        line-height: 45px;
        text-align: ${props => props.textAlign || "center"};
        color: #091156;
        white-space: pre-line;
    }

    p {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.1em;
        text-align: ${props => props.textAlign || "center"};    
        white-space: pre-line;
        color: #8B8B8B;
        margin-top: 5px;
    }
`

export default TitleAndDes
