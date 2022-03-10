const Collection = require('../model/Collections');

const createNewCollection = async (req, res) => {
    const {
        collectionName,
        description,
    } = req.body;

    const newCollection = new Collection({
        collectionName: collectionName,
        description: description,
    })

    const savedCollection = await newCollection.save();

    return res.send({
        status: 'ok',
        data: JSON.stringify(savedCollection)
    });
} 

const getCollections = async (req, res) => {
    const collections = await Collection.find({});
    return res.send({
        collections: collections,
    });
}

const getCollectionById = async (req, res) => {
    const { id } = req.query;
    const collection = await Collection.find({_id: id});
    if(collection){
        return res.send({
            collection: collection,
        });
    }else{
        return res.send({
            status: 'error',
            collection: [],
        });
    }

}

module.exports = {
    getCollections,
    getCollectionById,
    createNewCollection
};
  