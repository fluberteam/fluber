import styled from 'styled-components'

export const LandingPage = styled.div`


    width: 100%;
    height: 100vh;
    background: lightblue;
    z-index: -1;
    text-align: left;
    font-size: 3em;
    font-family: Rockwell;
    color: #484747;

    
    ::before {
        content: " ";
        display: block;
        position: absolute;
        // left: 0;
        // top: 0;
        margin: 0;

        width: 100%;
        height: 100%;
        z-index: 0;
        opacity: 0.4;
        background-image: url('https://okav.co/wp-content/uploads/2016/08/private-jet-charter3.jpg');
        background-size: cover;
        

    }
`