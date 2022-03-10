const router = require('express').Router();
const { json } = require('express/lib/response');
const mongoose = require('mongoose');

const {
    createNewCollection,
    getCollections,
    getCollectionById,
} = require('../controller/collection');

router.get('/', getCollections);
router.get('/detail', getCollectionById);

router.post('/', createNewCollection);

module.exports = router;
