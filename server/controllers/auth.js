const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        //user inputs data: name, email, password
        //check if email is in db // send 409 status
        //create a salt
        //hash password & salt
        //store name, email, hash into table

        try {const db = req.app.get('db')
        const {first_name, last_name, email, password, status, address1, address2, city, state, zipcode, phone, operator_num} = req.body

        let users = await db.auth.findUserByEmail({email})
        let user = users[0]
        // console.log(1111, req.body)
        if(user) {
            return res.status(409).send('email already in db')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
       let response = await db.auth.createUser({first_name, last_name, email, hash, status, address1, address2, city, state, zipcode, phone, operator_num})
       let newUser = response[0]

       delete newUser.password

       req.session.user = newUser
       res.send(req.session.user)
    
        } catch (error) {
            console.log('there was an error', error)
            res.status(500).send(error)
        }

        
    },

    login: async (req, res) => {
        // user input: email, password
        // get user by email from db
        // if no user send 401 status
        // compare password with hash using bcrypt
        // if they don't match send 401 status
        // if they match, add user to session
        try {const db = req.app.get('db')
        const {email, password} = req.body


        let users = await db.auth.findUserByEmail({email})
        let user = users[0]

      

        if (!user) {
            return res.status(401).send('email or password incorrect')
        }

        let isAuthenticated = bcrypt.compareSync(password, user.password)

        if (!isAuthenticated) {
            return res.status(401).send('email or password incorrect')
        }

        delete user.password
        req.session.user = user
        res.send(req.session.user)

        // console.log(req.session.user.name, 'logged in')
    
    } catch (error) {
        console.log('there was an error', error)
        res.status(500).send(error)
    }
        

    }, 

    logout: (req, res) => {
        req.session.destroy()
        // console.log(222, req.session.user)
        res.sendStatus(200)
    }, 

    currentUser: (req, res) => {
        res.send(req.session.user)
        
    },

    updateUser: async (req, res) => {
        try {
            const db = req.app.get('db')
            const { name, email } = req.body
            let { id } = req.params
            id = +id
            let foundUser = await db.auth.findUserById([id])
            let userName = await db.auth.updateUserName({
                id,
                name: name ? name : foundUser[0].name,
                email: email ? email : foundUser[0].email
            })
            let user = userName[0]
            delete user.password
            req.session.user = user
            res.status(200).send(req.session.user)
        } catch (error) {
            console.log('there was an error updating', error)
            res.status(500).send(error)
        }
    },

    update: (req, res) => {
        let { id } = req.body
        let db = req.app.get('db')
        let user = req.body
        id = req.body.user_id

        // console.log(111, user)
       
        db.auth.updateUser(user).then(response => {
            res.send(response)
        }).catch(err => console.log(err))
    },


    deleteUser: (req, res) => {
        let db = req.app.get('db');
        const { id } = req.params;//get this from param on url
        db.auth.deleteUser(id).then(response => {
            res.status(200).send(response);
        });
    },

    getUsers: async (req, res) => {
        let db = req.app.get('db')
        let allUsers = await db.auth.getUsers()
        res.status(200).send(allUsers)
    
       
    }
 


}
