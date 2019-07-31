import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
// import the function to post the purchase to the user and one for posting to operator
import icon from '../../Image/flubericon.png'
import { postUserPurchase } from '../../Redux/Reducers/search'
import { getUser } from '../../Redux/Reducers/users'

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
    console.log(props.user)
    const onToken = (token) => {
        let {amount} = state
        amount = (amount * 100)
        token.card = void 0
        axios.post('/api/pay', {token, amount: amount })
        .then(response => {
            alert('Payment received')
            props.postUserPurchase(props.user.user_id, flight.flight_num, passengers)
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
            <button>Purchase Flight</button>
        </StripeCheckout>
    )
}

let mapStateToProps = state => {
    // console.log(state)
    let { data: user } = state.users
    return { user }
}

export default connect(mapStateToProps, { postUserPurchase, getUser })(Purchase)