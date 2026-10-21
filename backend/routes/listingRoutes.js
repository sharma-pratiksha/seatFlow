const express = require("express");
const router = express.Router();
const Listing = require('../models/listings.js');

// get all listings

router.get("/", async (req, res) => {
    try{
        const listings = await Listing.find({});
        console.log("listing is working");
        res.json(listings);

    }catch (err){
        res.status(500).json({error: err.message});
    }
});

router.get("/:id", async (req, res) => {
    try{
        let {id} = req.params;
        const listing = await Listing.findById(id);
        res.json(listing);
    } catch(err) {
        res.status(500).json({error: err.message});
    }
})

module.exports = router;