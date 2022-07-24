const mongoose = require('mongoose')
const {model} = require("mongoose");
const Schema = mongoose.Schema

const Role = new Schema({
    value: {type: String, unique: true, default: "USER"}
})

module.export = model('Role', Role)