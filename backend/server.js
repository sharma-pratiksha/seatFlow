const express =  require ("express");
const mongoose = require("mongoose");
const Listing = require('./models/listings');
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();


const app = express();

app.use(cors());

let port = 5000;


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Databse connected successfully");
})
.catch((err) => {
    console.log("Databae connection failed", err);
})
app.get("/", (req, res) => {
    res.send("working");
    console.log("Get is running");
})

app.get("/listings", async (req, res) => {
    try{
        const listings = await Listing.find({});
        res.json(listings);

    }catch (err){
        res.status(500).json({
            error: err.message
        });
    }
})

app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
})