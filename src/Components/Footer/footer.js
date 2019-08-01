import React, { useState } from 'react';
import { StyledFooter } from './StyledFooter';
import styled from 'styled-components';
import Contact from './Contact/contact';
import About from './About/about';
import Legal from './Legal/legal';

const Footer = () => {
    let [state, setState] = useState({ about: false, contact: false, legal: false })
    // let [ showAbout, setShowAbout ] = useState(false)

    const handleSwitch = e => {
        let { name } = e.target
        let switches = {legal: false, contact: false, about: false}
        switch(name){
            case 'legal': 
                delete switches.legal
                break;
            case 'contact': 
                delete switches.contact
                break;
            case 'about': 
                delete switches.about
                break;
            default: 
                break;
        } 
        console.log(switches)
        setState({ ...state, ...switches, [name]: !state[name] })
    }


    return (
        <StyledFooter>
            <section style={styles} >
                <ul style={list}>
                    <li style={item} ><Button name="about" onClick={handleSwitch} >About</Button></li>
                    <li style={item}><Button name="contact" onClick={handleSwitch} >Contact</Button></li>
                    <li style={item}><Button name="legal" onClick={handleSwitch} >Legal</Button></li>
                </ul>
            </section>

            <div style={{ position: 'relative' }}>
                {/* {state ? (state.about === true ? <About/> : (state.contact === true ? <Contact/> : (state.legal === true ? <Legal/> : null))) : null } */}
                {state.about === true && <About />}
                {state.contact === true && <Contact />}
                {state.legal === true && <Legal />}
            </div>

            <section style={copy}>
                &copy; Flüber | Designed by DevMountain Students
            </section>

        </StyledFooter>
    )
}

export default Footer

const styles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: -1
}

const copy = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
}

const item = {
    listStyle: 'none',
    fontSize: '15px',
    marginBottom: '5px'

}

const list = {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    width: '40%',
    marginBottom: '8px',
    justifyContent: 'space-around',
    borderBottom: '2px solid black'
}


const Button = styled.button`
    border: none;
    outline: none;
    background: none;
    &:hover {
        cursor: pointer;
    }
`;