import React from 'react';
import { WhiteCard } from '../WhiteCard';
import styled from 'styled-components';
// import onClickOutside from 'react-onclickoutside';

const About = () => {
    // ------------ working the red X to close each component. Still not working. Alma --------------------


    // const [isOpen, setIsOpen] = useState(false);
    // const handleClick = () => {
    //     styles.div = {display: 'none'}
    // }

    // About.handleClickOutside = () => setIsOpen(false)

    return (
        <div style={styles.div}>
            <WhiteCard>
                {/* <RedX onClick={handleClick}>X</RedX> */}
                <Content>
                    <h1 style={styles.h1}>About</h1>
                    <br />
                    <p style={styles.p}>
                        When passengers travel on an airplane, they usually take a scheduled flight.  Scheduled flights operate according to pre-published schedules for departures and arrivals from one destination to another.  However, another option for travel is a charter flight, which is different from a scheduled flight.
                        </p>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>What Is Charter?</h3>
                    <p style={styles.p}>
                        A charter flight is a flight that is not part of an airline’s published schedule.  For example, an airline will not post on its website that the airline will operate a flight from Point A to Point B at 3pm every Wednesday.  Instead, charter flights are typically operated for specific unscheduled itineraries. There are many different types of charter flights.
                    </p>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>Why Fly Charter?</h3>
                    <p style={styles.p}>
                        Charter flights, unlike scheduled flights, don't operate to a strict schedule, but tailor the flight itinerary to your needs.
                    </p>
                    <p style={styles.p}>
                        Commercial Airlines fly to only 200-230 of the largest airports in the world. Charter flights can land at more than 7000 airports! This affords our clients the flexibility to get closer to their destination, in much less time and effort!
                    </p>
                    <p style={styles.p}>
                        Rarely are charter flights delayed or cancelled. If you have ever sat in a busy airport terminal because your flight was delayed at some point during its routine, you know the frustration. Charter Flights operate on your schedule!
                    </p>

                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>What We Do?</h3>
                    <p style={styles.p}>
                    Our goal is to create an easy, accessible system to fill the seats of charter flights, which in turn, generates a much lower cost, at a much smaller hassle. 
                    </p>
                </Content>
            </WhiteCard>
        </div>
    )
}

// const clickOutsideConfig = {
//     handleClickOutside: () => About.handleClickOutside
// };
// export default onClickOutside(About, clickOutsideConfig);

export default About





let styles = {
    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    p: {
        textIndent: '30px',
        fontSize: '20px',
    },
    h1: {
        display: 'flex',
        justifyContent: 'center',
    }
}

// const RedX = styled.button`
//     position: absolute;
//     top: 0px;
//     right: 0px;
//     // margin: 5px;
//     background-color: red;
//     width: 20px;
//     height: 20px;
//     outline: none;
//     border: none;
//     &:hover {
//         cursor: pointer;
//     }
// `

export const Content = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 80px;

    @media screen and (max-width: 1700px) {
        padding-top: 270px;
    }

    @media screen and (max-width: 1500px) {
        padding-top: 200px;
    }

    @media screen and (max-width: 1400px) {
        padding-top: 250px;
        padding-left: 0px;
        padding-right: 0px;
    }

    @media screen and (max-width: 1300px) {
        padding-top: 400px;
    }

    @media screen and (max-width: 1200px) {
        padding-top: 500px;
    }

    @media screen and (max-width: 1100px) {
        padding-top: 600px;
    }

    @media screen and (max-width: 1000px) {
        padding-top: 400px;
    }
    
    @media screen and (max-width: 750px) {
        padding-top: 500px;
    }

    @media screen and (max-width: 475px) {
        padding-top: 650px;
    }

    @media screen and (max-width: 425px) {
        padding-top: 700px;
    }

    @media screen and (max-width: 400px) {
        padding-top: 750px;
    }
`


// show hidden display none