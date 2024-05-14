const mongoose = require('../db');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    cgpa: { type: Number },
    batch: { type: String, required: true },
    department: { type: String, required: true },
    photo: { type: String, required: true },
    isIndustryExpert: { type: Boolean, default: false },
    isHigherStudyExpert: { type: Boolean, default: false },
    currentEducationOrJob:{
        designation: { type: String },
        companyOrInstitution: { type: String }
    },
    educationHistory: [{
        institution: { type: String },
        degree: { type: String },
        startDate: { type: Date },
        endDate: { type: Date }
    }],
    careerHistory: [{
        company: { type: String },
        position: { type: String },
        startDate: { type: Date },
        endDate: { type: Date }
    }],
    projects: [{
        title: { type: String },
        description: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        link: { type: String },
    }],
    publications: [{
        title: { type: String },
        publicationDate: { type: Date },
        publisher: { type: String },
        link: { type: String }
    }],
    awards: [{
        title: { type: String },
        organization: { type: String },
        dateReceived: { type: Date },
        description: { type: String }
    }],
    activities: [{
        name: { type: String },
        role: { type: String },
        startDate: { type: Date },
        endDate: { type: Date }
    }],
    isVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    isModerator: { type: Boolean, default: false }
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
