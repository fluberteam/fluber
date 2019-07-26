module.exports = {
    read: async (req, res) => {
        let db = req.app.get('db')
        let allAirplanes = await db.airplanes.getAirplanes()
        res.status(200).send(allAirplanes)
    
       
    },

    create: (req, res) => {
        let db = req.app.get('db')
        db.airplanes.createAirplane(req.body).then(response => {
            res.send(response)
        }).catch(err => console.log(err))
    },

    update: (req, res) => {
        let { id } = req.body
        let db = req.app.get('db')
        let airplane = req.body
        id = req.body.n_number
       

        db.airplanes.updateAirplane(airplane).then(response => {
            res.send(response)
        }).catch(err => console.log(err))
    },

    delete: (req, res) => {
        let db = req.app.get('db');
        const { id } = req.params;//get this from param on url

        db.airplanes.deleteAirplane([id]).then(response => {
            res.status(200).send(response);
        });
    }

}

