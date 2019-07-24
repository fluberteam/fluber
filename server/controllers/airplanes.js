module.exports = {
    read: (req, res) => {
        let db = req.app.get('db')
        db.getAirplanes().then((response) => {
            res.send(response)
        }).catch(err => console.log(err))
    },

    create: (req, res) => {
        let db = req.app.get('db')
        db.createAirplane(req.body).then(response => {
            res.send(response)
        }).catch(err => console.log(err))
    },

    update: (req, res) => {
        let { id } = req.params
        let db = req.app.get('db')
        let airplane = req.body

        rentals.id = id
        db.updatAirplane(airplane).then(response => {
            res.send(response)
        }).catch(err => console.log(err))
    },

    delete: (req, res) => {
        let db = req.app.get('db');
        const { id } = req.params;//get this from param on url

        db.deleteAirplane([id]).then(response => {
            res.status(200).send(response);
        });
    }

}

