// import modules and packages
const express = require("express");
const router = express.Router();
const { Category, User, Product } = require("../../models");

// GET all categories
router.get("/", (req, res) => {

    Category.findAll({
            include: { all: true, nested: true }
        })
        .then(dbCategories => {
            res.json(dbCategories);
        })
        .catch(err => {
            res.status(500).json({ msg: "An error occured!", err });
        });

});

// GET one category
router.get("/:id", (req, res) => {

    Category.findByPk(req.params.id, {
            include: { all: true, nested: true }
        })
        .then(dbCategory => {
            res.json(dbCategory);
        })
        .catch(err => {
            res.status(500).json({ msg: "An error occured!", err });
        });

});

// export
module.exports = router;