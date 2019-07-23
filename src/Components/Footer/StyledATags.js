import styled from 'styled-components';

export const StyledATags = styled.div`

    width: 40%;
    height: 500px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10rem;
    left: calc(50vw - 20%);
    overflow-y: scroll;
    word-break: break-wrap;
    ::-webkid-scrollbar {
        display: none;
    }
    padding: 20px;
    text-align: justify;
    box-shadow: 0px 3px 31px 13px rgba(0,0,0,0.7)


    @media screen and (max-width: 500px) {
        width: 80%;
    }
`

