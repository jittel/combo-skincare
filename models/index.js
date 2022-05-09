const Category = require('./Categories');
const Images = require('./Images');
const Product = require('./Product');
const User = require('./User');

User.hasOne(Images, {});

Images.belongsTo(User, {});

Product.hasOne(User, {});

Product.hasMany(Category, {});