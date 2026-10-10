const mongoose = require("mongoose");
const { default: passportLocalMongoose } = require("passport-local-mongoose");
const Schema = mongoose.Schema;
const PassportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
});

User.plugin(passportLocalMongoose)

const User = mongoose.model("User", userSchema);
module.exports = User;