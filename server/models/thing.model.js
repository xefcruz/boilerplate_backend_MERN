const mongoose = require('mongoose');
 
const ThingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must leave content in todo"],
        minLength: [3, "Title must be at least 3 chars"]    
    },

    description: {
        type: String,
        required: [true, "Must leave description"],
        minLength: [6, "Note must be at 6 chars"]    
    },

    completed: {
        type: Boolean,
        default: false,   
    },
    
}, {timestamps: true}); 

mongoose.model('Thing', ThingSchema);