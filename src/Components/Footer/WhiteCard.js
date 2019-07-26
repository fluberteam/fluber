import styled from 'styled-components';

export const WhiteCard = styled.div`

    width: 40%;
    height: 500px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 10;
    bottom: 10rem;
    justify-content: center;
    overflow-y: scroll;
    word-break: break-wrap;
    box-shadow: 0px 3px 31px 5px rgba(0,0,0,0.7);
    padding: 20px;
    text-align: justify;
    
    
    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 1000px) {
        width: 60%;
    }

    @media screen and (max-width: 650px) {
        width: 80%;
    }

    @media screen and (max-width: 415px) {
        bottom: 60px;
        height: 450px;
    }

    @media screen and (max-width: 411px) {
        bottom: 50px;
        height: 440px;
    }

    @media screen and (max-width: 350px) {
        bottom: 40px;
        height: 400px;
    }

    @media screen and (max-height: 775px) {
        padding-top: 40px;
        height: 370px;
        bottom: 60px;
    }

    @media screen and (max-height: 600px) {
        padding-top: 60px;
        height: 350px;
        bottom: 20px;
    }

    

    `

