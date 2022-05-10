// import modules and packages
const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");

// categories
const categories = [
    {
        name: "Cleanser",
        day: true,
        night: true
    },
    {
        name: "Toner",
        day: true,
        night: true
    },
    {
        name: "Serum",
        day: true,
        night: true
    },
    {
        name: "Spot Treatment",
        day: true,
        night: true
    },
    {
        name: "Moisturizer",
        day: true,
        night: true
    },
    {
        name: "Retinol",
        day: false,
        night: true
    },
    {
        name: "Face Oil",
        day: true,
        night: true
    },
    {
        name: "Sunscreen",
        day: true,
        night: false
    }
];

// users
const users = [
    {
        username: "Bob Ross",
        password: "password"
    },
    {
        username: "Rick Steves",
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
        name: "Sanil Slime",
        user_id: 1,
        category_id: 3
    },
    {
        name: "Avocado Juice",
        user_id: 1,
        category_id: 2
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