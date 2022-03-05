const express = require("express");
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

const mongoose = require('mongoose');

const productsRoute = require('./routes/products');

dotenv.config();
mongoose.connect(process.env.MONGO_URL,
    () => console.log('💾 Connected to DB'));
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin: true,
    credentials: true,
}));

app.use('/api/products', productsRoute);

app.listen(5000,() => console.log("Server listening at port 5000"));