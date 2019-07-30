import React, { useState } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
// import the function to post the purchase to the user and one for posting to operator
import icon from '../../../public/flubericon.png'

const Purchase = props => {
    const [state, /*setState*/] = useState({amount: +props.story[0].price})
    // const onOpened = () => {

    // }

    // const onClosed = () => {

    // }

    const onToken = (token) => {
        let {amount} = state
        amount *= 100
        token.card = void 0
        axios.post('/api/pay', {token, amount: amount })
        .then(response => {
            alert('Payment received')
            
        })
    }

    return (
        <StripeCheckout
            name="PYPS"
            description="Book Purchase"
            image={icon}
            amount={state.amount * 100}
            currency="USD"
            stripeKey={process.env.REACT_APP_STRIPE_SECRET_KEY}
            token={onToken}
            allowRememberMe={true}
            >
            <button style={{backgroundColor: 'white', border: 'none'}}><img src={icon} alt='dollar' style={{height: 30}}/></button>
        </StripeCheckout>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps, {  })(Purchase)