const Products = require('../model/Products');

const getProducts = async (req, res) => {
    const mobiles = await Products.find({ type: 'mobile' });
    const websites = await Products.find({ type: 'web' });
    const recents = await Products.find(
        {
            "date": 
            {
                $gte: new Date((new Date().getTime() - (15 * 24 * 60 * 60 * 1000)))
            }
        }
    )
    .sort({ "date": -1 })
    return res.send({
        mobiles: mobiles,
        websites: websites,
        recents: recents,
    });
}

const searchProducts = async (req, res) => {
    const { keyword } = req.query;
    const searchResults = await Products.find({productName:{$regex: keyword, $options: 'i'}});
    if(searchResults){
        return res.send({
            searchResults: searchResults,
        });
    }else{
        return res.send({
            status: 'error',
            searchResults: [],
        });
    }
}

const createNewProduct = async (req, res) => {
    const {
        productName,
        subName,
        type,
    } = req.body;

    const newProduct = new Products({
        productName: productName,
        subName: subName,
        type: type,
        favourited: false,
    })

  const savedProduct = await newProduct.save();

    return res.send({
        status: 'ok',
        data: JSON.stringify(savedProduct)
    });
} 

module.exports = {
    getProducts,
    searchProducts,
    createNewProduct
};
  