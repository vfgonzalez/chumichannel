const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
    Sliders,
    Posts,
    Admin
}

const sliderSchema = new Schema({
    imagelink: {type: String, required: true},
    title: {type: String, required: true},
    subtitle: {type: String, required: true}
})
const Sliders = mongoose.model("Slider", sliderSchema);

const postSchema = new Schema ({
    videourl: {type: String, required: true},
    description: {type: String, required: true},
    title: {type: String, required: true},
    image: {typw: String, required: true}
})

const Posts = mongoose.model("Post", postSchema);

const adminSchema = new Schema({
    username: {type: String, required:true},
    password: {type: String, required:true}
})

const Admin = mongoose.model("Admin", adminSchema);

