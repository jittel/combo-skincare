// import modules and packages
const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");

// categories
const categories = [
    {
        name: "Cleanser",
        time: "Morning & Night"
    },
    {
        name: "Toner",
        time: "Morning & Night"
    },
    {
        name: "Serum",
        time: "Morning & Night"
    },
    {
        name: "Spot Treatment",
        time: "Morning & Night"
    },
    {
        name: "Moisturizer",
        time: "Morning & Night"
    },
    {
        name: "Retinol",
        time: "Night"
    },
    {
        name: "Face Oil",
        time: "Morning & Night"
    },
    {
        name: "Sunscreen",
        time: "Morning"
    }
];

// users
const users = [
    {
        username: "bobross",
        password: "password"
    },
    {
        username: "ricksteves",
        password: "password"
    }
];

// products
const products = [
    {
        name: "Face Chapstick",
        user_id: 2,
        category_id: 5
    },
    {
        name: "Snail Slime",
        user_id: 2,
        category_id: 3
    },
    {
        name: "Avocado Juice",
        user_id: 2,
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

        process.exit(0);
    } catch(err){
        console.log(err);
    };

};

seed();
