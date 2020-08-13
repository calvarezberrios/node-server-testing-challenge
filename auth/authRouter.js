const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");

router.post("/login", (req, res) => {
    const {username, password} = req.body;

    if(!(username && password)) {
        res.status(400).json({ message: "Missing username and/or password"});
    } else {
        Users.findBy({ username })
            .then(user => {
                res.status(200).json(user);
            })
            .catch(err => res.status(500).json({ message: "Error retrieving user data", err}));
    }
});

router.post("/register", (req, res) => {
    const user = req.body;

    if(!(user.fname && user.lname && user.email && user.username && user.password)) {
        res.status(400).json({ message: "Missing required data: First Name, Last Name, Email, Username, Password" });
    } else {

        const hash = bcrypt.hashSync(user.password, 10);
        user.password = hash;

        Users.add(user)
            .then(newUser => {
                res.status(201).json(newUser);
            })
            .catch(err => res.status(500).json({ message: "Error adding user to database", err }));
    }
});

module.exports = router;