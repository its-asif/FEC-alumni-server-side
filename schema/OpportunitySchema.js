const mongoose = require('../db');


const opportunitySchema = new mongoose.Schema({
    type: { 
        type: String, 
        enum: ['Scholarship', 'Job'], 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    postedBy: { 
        type: String,
        ref: 'User', 
        required: true 
    },
    isVerified: { 
        type: Boolean, 
        default: false 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Opportunity', opportunitySchema);