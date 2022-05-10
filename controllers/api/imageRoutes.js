const router = require('express').Router();
const { append } = require('express/lib/response');
const { Image } = require('../../models');
const cloudinary = require ("cloudinary").v2;
const fileUpload = require('express-fileupload');
// const { Model } = require('sequelize/types');
require('dotenv').config();
router.use(fileUpload({
    useTempFiles:true
}));

const apiSecret = "HScu3t0PH6quYJCRYMkoG5A0c2k";

cloudinary.config({
    cloud_name: 'delw6elgw',
    api_key: '331111644569714',
    api_secret: process.env.API_SECRET
});

router.post("/upload", (req, res) => {
    const file = req.files.photo;
    console.log(file)
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        console.log("error", err)
        console.log("result", result)
        res.send({
            success:true,
            result
        });
    });
});

// DELETE a blog
router.delete("/:id", (req, res) => {

    cloudinary.uploader.destroy({
        where: {
            id: req.params.id
        }
        })
        .then(deletedBlog => {
            res.json(deletedBlog);
        })
        .catch(err => {
            res.status(500).json({ msg: "An error occured!", err });
        });

});

module.exports = router;
