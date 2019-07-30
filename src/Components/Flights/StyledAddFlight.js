import styled from 'styled-components'

export const AddForm = styled.div`

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
    position: absolute;
    margin: 20px;
    margin-bottom: 100px;



    @media screen and (max-width: 900px){
        width: 40%;
    }
    @media screen and (max-width: 500px){
        width: 50%;
    }

`

export const AddFlightInput = styled.input.attrs(props => ({
    type: props.type || 'text',
}))`
    color: #484747;
    outline: none;
    border: none;
    border-bottom: 2px solid #0079BF;
    width: 98%;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    font-family: Rockwell;
    font-size: 16px;

    ::placeholder {
        color: black
        // color: #0079BF
    }
`

export const FormButton = styled.button`
    margin: 5px;
    border-radius: 15px;
    outline: none;
    border: none;
    width: 98%;
    height: 25px;
    background-color: #0079BF;
    color: white;
    font-family: Rockwell;
    font-size: 16px;

    &:hover {
        cursor: pointer;
    }
`