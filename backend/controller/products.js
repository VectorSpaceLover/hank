const Products = require('../model/Products');
const LikedProducts = require('../model/LikedProducts');

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
    const { keyword, userId } = req.query;
    const searchResults = await Products.find({productName:{$regex: keyword, $options: 'i'}});
    if(searchResults){
        const newProducts = await Promise.all(searchResults.map(async (item) => {
            const isExist = await LikedProducts.find({userId: userId, productId: item._id});
            if(isExist && isExist.length > 0){
                return {...item._doc, liked: true}
            }else{
                return {...item._doc, liked: false}
            }
        }));
        return res.send({
            searchResults: newProducts,
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

  const savedProduct = await Products.save();

    return res.send({
        status: 'ok',
        data: savedProduct
    });
}

const addLikedProduct = async (req, res) => {
    const {
        userId: userId, 
        productId: productId,
    } = req.body;
    const existed = await LikedProducts.find({productId: productId, userId: userId});
    if(existed && existed.length > 0){
        return res.send({
            status: 'error',
            message: 'already exist',
        });
    }
    const newLikedProduct = new LikedProducts({
        userId: userId, 
        productId: productId,
    })

    const savedProduct = await newLikedProduct.save();

    return res.send({
        status: 'ok',
        likedProduct: savedProduct,
    });
}

module.exports = {
    getProducts,
    searchProducts,
    createNewProduct,
    addLikedProduct,
};
  