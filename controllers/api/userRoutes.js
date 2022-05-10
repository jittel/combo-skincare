const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User } = require('../../models');

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
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
