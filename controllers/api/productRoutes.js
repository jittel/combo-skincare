const { Product } = require('../../models');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

//get all products
router.get("/", (req, res) => {
  Product.findAll({})
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
router.post('/', withAuth, async (req, res) => {
  try {
    const newProduct = await Product.create({
      //gets the data from req.body and adds it to the product details
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
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
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No Product found with this id!' });
      return;
    }

    res.status(200).json(ProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
