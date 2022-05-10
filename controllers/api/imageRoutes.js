const router = require('express').Router();
const { append } = require('express/lib/response');
const { Image } = require('../../models');
const cloudinary = require("cloudinary").v2;
const fileUpload = require('express-fileupload');
require('dotenv').config();
router.use(fileUpload({
    useTempFiles: true
}));

const apiSecret = "HScu3t0PH6quYJCRYMkoG5A0c2k";

cloudinary.config({
    cloud_name: 'delw6elgw',
    api_key: '331111644569714',
    api_secret: process.env.API_SECRET
});

router.post("/upload", (req, res) => {
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        console.log("error", err)
        // console.log("result", result)
        res.send({
            success: true,
            result
        });
    }).then(newImage => {
        console.log("new image result", newImage.url)
        Image.create({
            url: newImage.url,
            user_id: req.session.user.id
        }).then(uploadedImage => {
            res.json(uploadedImage)
        }).catch(err => {
            // res.status(500).json({ msg: "An error occured!", err });
            console.log(err)
        })
    }).catch(err => {
        res.status(500).json({ msg: "An error occured!", err });
    })
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
