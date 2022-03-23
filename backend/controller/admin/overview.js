const LikedProducts = require('../../model/LikedProducts');
const Products = require('../../model/Products');
const Users = require('../../model/Users');

const getTopProducts = async (req, res) => {
    const query = {};
    const sort = { length: -1 };
    const limit = 6;
    const topProducts = await LikedProducts.find(query).sort(sort).limit(limit);
    return res.send({
        status: 'ok',
        products: topProducts,
    });
}

const getAllProducts = async (req, res) => {
    const query = {};
    const sort = { length: -1 };
    const topProducts = await LikedProducts.find(query).sort(sort);
    return res.send({
        status: 'ok',
        products: topProducts,
    });
}

const getNewProducts = async (req, res) => {
    const query = {};
    const sort = { length: -1 };
    const limit = 6;
    const topProducts = await Products.find(query).sort(sort).limit(limit);
    return res.send({
        status: 'ok',
        products: topProducts,
    });
}

const getSiteInfo = async (req, res) => {
    const totalUser = await Users.count();
    const totalProduct = await Products.count();
    var start = new Date();
    start.setHours(0,0,0,0);

    var end = new Date();
    end.setHours(23,59,59,999);
    const newUsers = await Users.find({createdDate: {$gte: start, $lt: end}}).count();
    return res.send({
        status: 'ok',
        data: {totalUser, totalProduct, newUsers},
    })
}
module.exports = {
    getTopProducts,
    getAllProducts,
    getSiteInfo
};
  
