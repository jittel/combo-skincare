const express = require('express');
const router = express.Router();
const { User, Product } = require('../models');

//loads home page
router.get("/", (req, res) => {
    const loggedIn = req.session.user ? true : false;
    res.render("home", { loggedIn })
});

// signup route
router.get("/signup", (req,res) => {

    if(req.session.user){
        return res.redirect("/profile");
    };

    res.render("signup");

});

//loads login page
router.get("/login", (req, res) => {
    if (req.session.user) {
        return res.redirect("/profile");
    }
    res.render("login");
});

//loads user profile
router.get("/profile", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.id, {
        include: [Product]
    }).then(userData => {
        const hbsData = userData.get({ plain: true })
        hbsData.loggedIn = req.session.user ? true : false
        res.render("profile", hbsData)
    });
});

module.exports = router;
