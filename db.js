const mongoose = require("mongoose");
require('dotenv').config();

const mongoUri = process.env.mongoUri;


const connectToMongo = async () => {
    mongoose.connect(mongoUri, () => {
        console.log("Connected to MongoDB successfully");
    })
}

module.exports= connectToMongo;