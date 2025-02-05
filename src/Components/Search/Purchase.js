import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
// import the function to post the purchase to the user and one for posting to operator
import icon from '../../Image/flubericon.png'
import { postUserPurchase } from '../../Redux/Reducers/search'
import { getUser } from '../../Redux/Reducers/users'
import { FormButton } from '../Flights/StyledAddFlight';

const Purchase = props => {
    const getUser = props.getUser
    useEffect(() => {
        getUser()
    }, [])

    const passengers = props.seatsRequested
    const flight = props.flight
    const [state, /*setState*/] = useState({amount: +flight.price})

    
    // const onOpened = () => {

    // }

    // const onClosed = () => {

    // }
    // console.log(props.user)
    const onToken = (token) => {
        let {amount} = state
        amount = (amount * 100) * +passengers
        token.card = void 0
        axios.post('/api/pay', {token, amount: amount })
        .then(response => {
            alert('Payment received')
            let flightInfo = {flight_num: flight.flight_num, num_seats: passengers}
            props.postUserPurchase(props.user.user_id, flightInfo)

        })
    }

    return (
        <StripeCheckout
            name="Flüber"
            description="Flight Purchase"
            image={icon}
            amount={(state.amount * 100)* +passengers}
            currency="USD"
            stripeKey='pk_test_x5vjaaQpKdS5Sls9jZzANZ9m009FMA3zDJ'
            token={onToken}
            allowRememberMe={true}
            >
            <FormButton style={{width: '200px', fontSize: '20px'}}>Purchase Flight</FormButton>
        </StripeCheckout>
    )
}

let mapStateToProps = state => {
    // console.log(state)
    let { data: user } = state.users
    return { user }
}

export default connect(mapStateToProps, { postUserPurchase, getUser })(Purchase)