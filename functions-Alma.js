let edit = false

module.exports = {

    deleteFlight = (flight_num) => {
        props.deleteFlight(flight_num)
        props.setupdate(true)
    },

    toggle:() => {
        setEdit(!edit)
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

}