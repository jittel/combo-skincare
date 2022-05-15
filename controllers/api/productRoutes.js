const { Product } = require('../../models');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

//get all products
router.get("/", (req, res) => {
  Product.findAll({
    include: { all: true, nested: true }
  })
    .then(dbProducts => {
      res.json(dbProducts);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//get one product
router.get("/:id", (req, res) => {
  Product.findByPk(req.params.id, {})
    .then(dbProduct => {
      res.json(dbProduct);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//add a new product
router.post("/", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "ya gotta login to create a product!" })
  }
  Product.create({
    name: req.body.name,
    user_id: req.session.user.id,
    category_id: req.body.category_id
  })
    .then(newProduct => {
      res.json(newProduct);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//update a product
router.put("/:id", (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedProduct => {
    res.json(updatedProduct);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//delete a product
router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
      user_id: req.session.user.id
    }
  }).then(delProd => {
    res.json(delProd)
    // location.reload();
    // console.log(delProd)
  }).catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  })
});

module.exports = router;
