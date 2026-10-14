const express = require("express");
const router = express.Router();
const User = require('../models/user.js');
const passport = require('passport');


//signup
router.post("/", async (req, res) => {
    try{
        let {username, email, password, confirmPassword} = req.body;

        // checking all fields 
        if(!username || !email || !password || !confirmPassword){
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        // checking password
        if(password !== confirmPassword){
            return res.status(400).json({
                message: "Password must be same"
            })
        }
        const newUser = new User({username, email});

        const registeredUser = await User.register(newUser, password);
        console.log("User registered successfully", registeredUser.email);

        // Send JSON response to React frontend
    return res.status(201).json({
      message: "Account created successfully"
    });
    } catch(err) {
        console.log("Signup error", err);

         if (err.name === "UserExistsError" || err.code === 11000) {
      return res.status(409).json({
        message: "Email already registered. Please use another email."
      });
    }

    return res.status(500).json({
      message: err.message || "Signup failed"
    });

    }
})

//login 
router.post("/login", passport.authenticate("local", { 
    failureRedirect: '/login',
     failureFlash: true, 
     failureMessage: true
     }), 
     async (req, res) => {
        res.send("Welcome! You are loggedin")
})

module.exports = router;