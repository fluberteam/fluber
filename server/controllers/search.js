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
    }
}