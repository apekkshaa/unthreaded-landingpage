const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/UpThreaded")

//schema for tailor
const tailorSchema = new mongoose.Schema({
    designs: {
        type: [String],
        required: true,
        validate: {
            validator: function (v) {
                return v.length === 4;
            },
            message: 'A tailor must have exactly 4 design images!'
        }
    },
    about: {
        type: String,
        required: true,
        minlength: 10 // Min length
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: {
            min: { type: Number, required: true }, // Min
            max: { type: Number, required: true }  // Max
        },
        required: true
    }
});

module.exports = mongoose.model('Tailor', tailorSchema);
