module.exports = {
    getAll: async (req, res) => {
        try {
           const db = req.app.get('db')
           let searchedFlights = await db.search.firstSearch() 
           res.status(200).send(searchedFlights)
        } catch (error) {
            console.log('error getting searched flights', error)
            res.status(500).send(error)
        }
    }
}