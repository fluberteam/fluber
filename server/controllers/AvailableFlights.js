module.exports = {
    getFlights: async (req, res) => {
        try {
            let db = req.app.get('db')
            let allFlights = await db.flights.get_flights()
            console.log('Flights', allFlights)
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
            const flights = await db.flights.delete_flight({ flight_num })
            res.status(500).send(flights)

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