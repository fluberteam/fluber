import React from 'react'
import { StyledATags } from '../StyledATags'

export default function Contact() {
    return (
        <StyledATags>
            <div style={allInputs}>
                <div>
                    <input
                        name="name"
                        // placeholder="Your Name"
                        autoComplete="off"
                        type="text"
                        style={input}
                    />
                    <span style={label}>Name</span>
                </div>
                <div>
                    <input
                        name="email"
                        // placeholder="Your Email"
                        autoComplete="off"
                        type="text"
                        style={input}
                    />
                    <span style={label}>Email</span>
                </div>
                <div>
                    <textarea
                        name="message"
                        // placeholder="Your Message"
                        type="message"
                        style={message}
                    // style={{height: '80px', border: 'none'}}
                    ></textarea>
                    <span style={label}>Message</span>
                </div>

            <button style={button} >SEND MESSAGE</button>
            </div>

        </StyledATags>
    )
}

const input = {
    height: '50px',
    width: '100%',
    paddingTop: '15px',
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid #0079BF',
    marginBottom: '30px'

}

const label = {
    position: 'absolute',
    color: '#0079BF',
    left: '0'
}

const allInputs = {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    borderBottom: '4px solid white',
    position: 'relative',
}

const message = {
    height: '100px',
    width: '100%',
    paddingBottom: '70px',
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid #0079BF',
    marginTop: '30px',
    overflow: 'scroll',
    overflowX: 'hidden',
    overflowY: 'hidden',


}

const button = {
    marginTop: '60px',
    borderRadius: '15px',
    border: 'none',
    backgroundColor: '#0079BF',
    height: '30px',
    color: 'white',
    outline: 'none',
    curser: 'pointer'
}