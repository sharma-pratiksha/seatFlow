const mongoose = require("mongoose");
const Listing = require("../models/listings");
const { data } = require("./data");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: require("path").join(__dirname, "../.env") });

const MONGO_URL = process.env.MONGO_URI;

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB");

  await Listing.deleteMany({});
  console.log("Old listings deleted");

  await Listing.insertMany(data);
  console.log("New listings inserted");

  mongoose.connection.close();
}

main().catch((err) => {
  console.log(err);
});