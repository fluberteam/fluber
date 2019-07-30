let id = 'someString'

module.exports = {
   
   

     deleteAirplane: (id) => {
        props.deleteAirplane(id)
        props.setupdate(true)

    },

    toggle:() => {
        setEdit(!edit)
    },

    create: (req, res) => {
        let db = req.app.get('db')
        db.airplanes.createAirplane(req.body).then(response => {
            res.send(response)
        }).catch(err => console.log(err))
    }
}