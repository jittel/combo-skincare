const router = require('express').Router();
const { append } = require('express/lib/response');
const { Image } = require('../../models');
const cloudinary = require ("cloudinary").v2;
const fileUpload = require('express-fileupload');
require('dotenv').config();
router.use(fileUpload({
    useTempFiles:true
}));

cloudinary.config({
    cloud_name: 'delw6elgw',
    api_key: '331111644569714',
    api_secret: API_SECRET
})

router.post("/upload", (req, res) => {
    const file = req.files.photo;
    console.log(file)
    cloudinary.uploader.upload(file.tempFilePath, (err, res) => {
        console.log("error", err)
        console.log("result", res)
        res.send({
            success:true,
            res
        })
    })
})