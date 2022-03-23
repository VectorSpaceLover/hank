const LikedProducts = require('../../model/LikedProducts');
const Products = require('../../model/Products');
const Users = require('../../model/Users');

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
};
  
