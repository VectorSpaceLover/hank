const express = require("express");
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const productsRoute = require('./routes/products');
const collectionRoute = require('./routes/collection');

dotenv.config();
mongoose.connect(process.env.MONGO_URL,
    () => console.log('💾 Connected to DB'));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({
    origin: true,
    credentials: true,
}));

app.use('/api/products', productsRoute);
app.use('/api/collection', collectionRoute);

app.listen(443,() => console.log("Server listening at port 443"));
