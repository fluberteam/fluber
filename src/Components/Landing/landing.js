import React from 'react'
import {LandingPage} from './StyledLanding'


export default function landing() {
    return (
        <LandingPage>
                <h1 style={styles.mainheading}>Flüber!</h1>
                <span style={styles.tagline}>Fly Private, Skip the Lines!</span>
                
                <div style={styles.paragraph}>
                <p> Flying private allows you to skip the lines at the main terminal and parking is usually free.
                    You just get on the airplane and go! Click the Search button to see if there's a flight going 
                    where you want to go, it may cost less than you think!
                </p>
                </div>
        
        </LandingPage>

    )
}

let styles = {

    tagline: {
        fontSize: '80%',
        LineHeight: '30px',
        marginLeft: '100px',
        textAlign: 'left',
        // width: '100%'
    },
    mainheading: {
        margin: 0,
        marginLeft: '100px'

    },
    paragraph: {
        fontSize: '.5em',
        margin: '100px 0 0 100px',
        // textAlign: 'left',
        width: '35%',
        // display: 'flex',
        // alignItems: 'center'

    }
}

