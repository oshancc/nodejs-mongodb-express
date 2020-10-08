const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    itmName:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    size:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Item', ItemSchema);