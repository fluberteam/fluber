import styled from 'styled-components';

export const AddButton = styled.button`
    border: none;
    font-size: 20px;
    color: green;
    margin: 20px;
    transition: 0.3s;
    cursor: pointer;
    padding: 10px;
    background: none;
    border: 1px solid green;
    font-family: Rockwell;



    &:hover {
        cursor: pointer;
        color: white;
        background: green;
        font-size: 23px;
        animation-name: bounce;
    }

   
`