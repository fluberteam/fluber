module.exports = {
    getAll: async (req, res) => {
        try {
           const db = req.app.get('db')
           let {depFrom, arriveTo, datePicked, seatAvailable} = req.query
        //    console.log(req.query)
           let searchedFlights = await db.search.firstSearch({depFrom, arriveTo, datePicked, seatAvailable}) 
           res.status(200).send(searchedFlights)
        //    console.log(searchedFlights)
        } catch (error) {
            console.log('error getting searched flights', error)
            res.status(500).send(error)
        }
    },
    postPurchaseUser: async (req, res) => {
        try {
            const db = req.app.get('db')
            let { user_id } = req.params
            let { flight_num, num_seats } = req.body
            // console.log(req.params, req.body)
            num_seats  = +num_seats
            // console.log(user_id, flight_num, num_seats)
            await db.search.postUserPurchase({user_id, flight_num, num_seats})
            res.sendStatus(200)
        } catch (error) {
            console.log('error posting purchased flight', error)
            res.status(500).send(error)
        }
    }
}