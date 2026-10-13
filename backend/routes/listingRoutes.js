const express = require("express");
const router = express.Router();
const Listing = require('../models/listings.js');

// get all listings

router.get("/", async (req, res) => {
    try{
        const listings = await Listing.find({});
        res.json(listings);

    }catch (err){
        res.status(500).json({error: err.message});
    }
});

module.exports = router;