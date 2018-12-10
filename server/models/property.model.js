const mongoose = require('mongoose');


var propertySchema= new mongoose.Schema({

    propertyName: {
        type: String,
        required: 'Property can\'t be empty'
    },
    propertyCategory: {
        type: String,
        required: 'Category can\'t be empty'
    },
    propertyPrice: {
        type: Number,
        required: 'Price can\'t be empty'
    },
    propertyDescription: {
        type: String,
    },
    propertyImageUrl: {
        type: String,
    },
    favourite: {
        type: Boolean,
    },
    propertyOwner: {
        type: String,
        required: 'Owner Name can\'t be empty'
    },
});


mongoose.model('Property', propertySchema);
