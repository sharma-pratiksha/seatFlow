const express =  require ("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session")
const listingsRoutes = require("./routes/listingRoutes")
const userRoutes = require("./routes/userRoutes.js");
const User = require("./models/user.js");
// const User = require('./models/user.js');

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());



app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    }
})); 

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// Serialize and deserialize user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

// listingsRoutes
app.use("/listings", listingsRoutes);
app.use("/signup", userRoutes);


app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
})