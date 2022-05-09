const router = require('express').Router();
const { append } = require('express/lib/response');
const { Image } = require('../../models');
const cloudinary = require ("cloudinary").v2;
const fileUpload = require('express-fileupload');
require('dotenv').config();
router.use(fileUpload({
    useTempFiles:true
}));

const apiSecret = "HScu3t0PH6quYJCRYMkoG5A0c2k";

cloudinary.config({
    cloud_name: 'delw6elgw',
    api_key: '331111644569714',
    api_secret: apiSecret
})

router.post("/upload", (req, res) => {
    const file = req.files.photo;
    console.log(file)
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        console.log("error", err)
        console.log("result", res)
        res.send({
            success:true,
            result
        })
    })
})

module.exports = router;