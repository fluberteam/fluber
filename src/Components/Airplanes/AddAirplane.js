import React, {useState} from 'react'
import {connect} from 'react-redux'
import { createAirplane } from '../../Redux/Reducers/airplanes'
// import {Redirect} from 'react-router-dom'
// import { StyledInput } from '../StyledComps/StyledInput'
import { AddFlightInput, AddForm, FormButton, Selector } from '../Flights/StyledAddFlight'
import largeLogo from '../../Image/fluberlogo.png'
import { AddButton } from '../StyledComps/AddButton';


const AddAirplane = props => {

    // useEffect( () => {}, [props.airplane])

    let [state, setState] = useState({
        n_number: '',
        certnumber: '',
        img: '',
        engine_id: '',
        num_seats: '',
        restroom: '',
        flight_attn: '',
        refreshments: '',
        cruise_speed: ''
    })

    const [addAirplane, setaddAirplane] = useState(false)

    const handleChange = e => {
        let {name, value} = e.target
        setState({ ...state, [name]: value })
    }

    const handleSubmit = () => {
        props.createAirplane(state)
        toggle()
        props.setupdate(true)
    }

    const toggle = () => {
        setaddAirplane(!addAirplane)
    }


    return (
        <>
        {addAirplane?
        <div style={styles.div}>

       <AddForm>
            
            <img src={largeLogo} alt="Large Logo" style={{height: '150px'}}/>
            <AddFlightInput
                type='text'
                name='n_number'
                placeholder='N-Number'
                onChange={handleChange} />
           
            <AddFlightInput
                type='text'
                name='certnumber'
                placeholder='Operator Number'
                onChange={handleChange} />
            
            <AddFlightInput
                type='text'
                name='img'
                placeholder='Image'
                onChange={handleChange} />
            
            <Selector
                type='text'
                name='engine_id'
                onChange={handleChange}>
                <option>Choose Engine Type</option>  
                <option value="SE">SE Turboprop</option>
                <option value="ME">ME Turboprop</option>
                <option value="TJ">Turbojet</option>
            </Selector>

            <AddFlightInput
                type='text'
                name='num_seats'
                placeholder='Number of Seats'
                onChange={handleChange} />
            


            <div style={styles.checkbox}>
          <span>
              <span>Restroom?</span>
              </span>
              <span>
           <input
                type='radio'
                name='restroom'
                value='true'
                onChange={handleChange}/>Yes
            </span>
            <span>
            <input
                type='radio'
                name='restroom'
                value='false'
                onChange={handleChange}/>No 
            </span>
            </div>



            <span style={styles.checkbox}>
          <span>
              <span>Flight Attendant?   </span>
              </span>
              <span>
           <input
                type='radio'
                name='flight_attn'
                value='true'
                onChange={handleChange}/>Yes
            </span>
            <span>
            <input
                type='radio'
                name='flight_attn'
                value='false'
                onChange={handleChange}/>No 
            </span>
            </span>



            <span style={styles.checkbox}>
          <span>
              <span>Refreshments?</span>
              </span>
              <span>
                  
           <input
                type='radio'
                name='refreshments'
                value='true'
                onChange={handleChange}/>Yes
            </span>

            <span>
            <input
                type='radio'
                name='refreshments'
                value='false'
                onChange={handleChange}/>No 
            </span>
            </span>
           

            <AddFlightInput
                type='text'
                name='cruise_speed'
                placeholder='Cruise Speed'
                onChange={handleChange} />
            
            
            <FormButton onClick={handleSubmit}>Add Airplane</FormButton>
            <FormButton onClick={toggle}>Cancel</FormButton>

            </AddForm>
        </div>
        
        
        :
        <section>
            <section>
                <AddButton onClick={toggle}>Add Airplane</AddButton>
            </section>
        
        </section>
        }
        </>
        )

    }


const mapStateToProps = state => {
    // console.log(state.airplanes)
    let { createAirplaneData: airplanes } = state.airplanes
    return {airplanes}
}

export default connect(mapStateToProps, { createAirplane })(AddAirplane)


let styles = {
    admin: {
        fontSize: 18,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'column ',
        // textDecoration: 'none',
        fontFamily: 'Rockwell',

        div: {
            zIndex: 16,
            position: 'absolute'
        }

    },
    checkbox: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        margin: '5px',
        // border: '2px solid black'
    }
}

