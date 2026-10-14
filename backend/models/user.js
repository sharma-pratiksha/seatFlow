const mongoose = require("mongoose");
const passportLocalMongoose =
  require("passport-local-mongoose").default
const Schema = mongoose.Schema;

const userSchema = new Schema({
     username: {
    type: String,
    required: true,
    trim: true
  },

    email: {
        type: String,
        required: true,
        unique: true
    },
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
})

const User = mongoose.model("User", userSchema);
module.exports = User;