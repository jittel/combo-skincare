const router = require('express').Router();
const sequelize = require('../../config/connection');
const bcrypt = require('bcrypt');
const { User } = require('../../models');

// GET all users
router.get("/", (req, res) => {

    User.findAll({
            include: { all: true, nested: true }
        })
        .then(dbUsers => {
            res.json(dbUsers);
        })
        .catch(err => {
            res.status(500).json({ msg: "An error occured!", err });
        });

});

//add a new user
router.post("/", (req, res) => {
    User.create(req.body)
        .then(newUser => {
            req.session.user = {
                id: newUser.id,
                username: newUser.username
            }
            res.json(newUser);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});

//login
router.post("/login", (req, res) => {
    console.log(req.body)
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(foundUser => {
        if (!foundUser) {
            return res.status(400).json({ msg: "wrong login credentials" })
        }
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            req.session.user = {
                id: foundUser.id,
                username: foundUser.username
            }
            return res.json(foundUser)
        } else {
            return res.status(400).json({ msg: "wrong login credentials" })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
    });
});

//logout
router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(400).send('Unable to log out')
            } else {
                res.redirect('/')
            }
        });
    } else {
        res.end()
    }
})

module.exports = router;
