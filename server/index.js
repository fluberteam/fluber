const path = require('path')
const express = require('express')
require('dotenv/config')
const massive = require('massive')
const session = require('express-session')
const twilio = require('twilio');

const AuthCtrl = require('./controllers/auth')


const app = express()

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('the db is definitely connected')
})

app.use(express.json())

//information to point to hosting server
// app.use( express.static( `${__dirname}/../build` ) );



app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

app.listen(SERVER_PORT, () => {
    console.log('we be listening on port', SERVER_PORT)
})

// Register and login endpoints
app.post('/auth/register', AuthCtrl.register)
app.post('/auth/login', AuthCtrl.login)
app.get('/auth/logout', AuthCtrl.logout)
app.get('/auth/currentUser', AuthCtrl.currentUser)
app.put('/auth/updateUser/:id', AuthCtrl.updateUser)