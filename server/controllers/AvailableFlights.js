module.exports = {
    getFlights: async (req, res) => {
        try {
            let db = req.app.get('db')
            let allFlights = await db.flights.get_flights()
            res.send(allFlights)
        } catch (error) {
            console.log('Error fetching the flights', error)
            res.status(500).send(error)
        }
    },

    getFlightsOperator: async (req, res) => {
        console.log('getflightsoper from controller', req.session)
        try {
            let db = req.app.get('db')
            let user = req.session.user.operator_num
            // console.log(user.operator_num)
            let allFlights = await db.flights.get_flights_by_operator({user})
            res.send(allFlights)
        } catch (error) {
            console.log('Error fetching the flights', error)
            res.status(500).send(error)
        }
    },

    currFlightsByUser: async (req, res) => {
        // console.log('currflightsuser from controller', req.session)
        try {
            let db = req.app.get('db')
            let user = req.session.user.user_id
            // console.log(user.user_id)
            let allFlights = await db.flights.curr_flights_by_user({user})
            res.send(allFlights)
        } catch (error) {
            console.log('Error fetching the flights', error)
            res.status(500).send(error)
        }
    },

    pastFlightsByUser: async (req, res) => {
        // console.log('pastflightsuser from controller', req.session)
        try {
            let db = req.app.get('db')
            let user = req.session.user.user_id
            // console.log(user.user_id)
            let allFlights = await db.flights.past_flights_by_user({user})
            res.send(allFlights)
        } catch (error) {
            console.log('Error fetching the flights', error)
            res.status(500).send(error)
        }
    },

    createFlight: async (req, res) => {
        
        try {
            let db = req.app.get('db')

            let flight = req.body
            // console.log(flight)

            let createdFlight = await db.flights.create_flight(flight)
            res.status(200).send(createdFlight)

        } catch (error) {
            console.log('Error creating the flight', error)
            res.status(500).send(error)
        }
    },

    deleteFlight: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { flight_num } = req.params
            const flights = await db.flights.delete_flight({flight_num})
            
            res.status(200).send(flights)

        } catch (error) {
            console.log('Error deleting the flight', error)
            res.status(500).send(error)
        }
    },

    editFlight: async (req, res) => {
        try {
            let db = req.app.get('db')
            
            let { n_number, dep_airport, departure_time, arr_airport, arrival_time, init_avail_seats, curr_avail_seats, price, cutoff_time } = req.body

            let { flight_num } = req.params

            let editedFlight = await db.flights.edit_flight({ n_number, dep_airport, departure_time, arr_airport, arrival_time, init_avail_seats, curr_avail_seats, price, cutoff_time, flight_num })
            
            res.status(200).send(editedFlight)

        } catch (error) {
            console.log('Error editing your flight', error)
            res.status(500).send(error)
        }
    }
}