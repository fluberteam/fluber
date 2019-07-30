import styled from 'styled-components'

export const LoginForm = styled.div`

    display: flex;
    height: 25%
    width: 20%;
    z-index: 0;
    flex-direction: column;
    background: white;
    border-radius: 6px;
    border: 1px solid #c0c0c0;
    box-shadow: 5px 10px 18px #888888;
    padding: 10px;
    height: auto;
    justify-content: center;
    align-items: space-between;
    position: fixed;
    margin: 20px;
    margin-bottom: 100px;



    @media screen and (max-width: 900px){
        width: 40%;
    }
    @media screen and (max-width: 500px){
        width: 50%;
    }

`