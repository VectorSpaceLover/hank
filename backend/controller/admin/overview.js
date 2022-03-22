const LikedProducts = require('../../model/LikedProducts');
const Products = require('../../model/Products');

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

module.exports = {
    getTopProducts,
    getAllProducts,
};
  
