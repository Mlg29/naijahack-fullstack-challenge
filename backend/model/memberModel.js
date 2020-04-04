const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema ({
    name: { type: String, required: true },
    image: { type: String, required: true},
    email: { type: String, required: true},
    location: { type: String, required: true},
}, {
    timestamps: true,
});

const Members = mongoose.model('Member', memberSchema)

module.exports = Members