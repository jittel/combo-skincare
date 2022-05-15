// import modules and packages
const sequelize = require("../config/connection");
const { Category, User, Product, Image } = require("../models");

// categories
const categories = [
    {
        id: 1,
        name: "Cleanser",
        time: "Morning & Night"
    },
    {
        id: 2,
        name: "Toner",
        time: "Morning & Night"
    },
    {
        id: 3,
        name: "Serum",
        time: "Morning & Night"
    },
    {
        id: 4,
        name: "Spot Treatment",
        time: "Morning & Night"
    },
    {
        id: 5,
        name: "Moisturizer",
        time: "Morning & Night"
    },
    {
        id: 6,
        name: "Anti Aging",
        time: "Night"
    },
    {
        id: 7,
        name: "Face Oil",
        time: "Morning & Night"
    },
    {
        id: 8,
        name: "Sunscreen",
        time: "Morning"
    }
];

// users
const users = [
    {
        username: "bobross",
        password: "password"
    }
];

// images
const images = [
    {
        url: 'https://res.cloudinary.com/delw6elgw/image/upload/v1652300347/sooooGood_timogp.jpg',
        user_id: 1
    }
];

// products
const products = [
    {
        name: "Face Chapstick",
        user_id: 1,
        category_id: 5
    },
    {
        name: "Snail Slime",
        user_id: 1,
        category_id: 3
    },
    {
        name: "Avocado Juice",
        user_id: 1,
        category_id: 4
    }
];

// bulk create
const seed = async () => {

    try {
        await sequelize.sync({ force: true });

        await Category.bulkCreate(categories);
        await User.bulkCreate(users, { individualHooks: true });
        await Product.bulkCreate(products);
        await Image.bulkCreate(images);

        process.exit(0);
    } catch(err){
        console.log(err);
    };

};

seed();
