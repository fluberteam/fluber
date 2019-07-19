import React from 'react'
import {LandingPage} from './StyledLanding'


export default function landing() {
    return (
        <LandingPage>
                <h1 style={styles.mainheading}>Flüber!</h1>
                <span style={styles.tagline}>Fly Private, Skip the TSA Lines!</span>
        
        </LandingPage>

    )
}

let styles = {

    tagline: {
        fontSize: '80%',
        LineHeight: '30px',
        marginLeft: '100px',
        textAlign: 'left',
        width: '100%'
    },
    mainheading: {
        margin: 0,
        marginLeft: '100px'

    }
}

