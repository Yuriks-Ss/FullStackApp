const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    surnames: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    institute: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    passport1: {
        type: String,
    },
    passportNumber: {
        type: String,
        required: true
    },
    passportInfo: {
        type: String,
        required: true
    },
    DPA: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    homeAddress: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    studentFor: {
        type: String,
        required: true
    },
    finances: {
        type: String,
        required: true
    },
    zaklad: {
        type: String,
        required: true
    },
    diplomInfo: {
        type: String,
        required: true
    },
    certificateY: {
        type: String,
        required: true
    },
    wifeInfo: {
        type: String,
    },
    fatherInfo: {
        type: String,
    },
    matherInfo: {
        type: String,
    },
    addressParents: {
        type: String,
    },
    army: {
        type: String,
    },
    armyInfo: {
        type: String,
    },
    armyInfo1: {
        type: String,
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    imageSrc: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('categories', categorySchema)