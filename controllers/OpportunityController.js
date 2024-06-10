const Opportunity = require('../schema/opportunitySchema');


// Get all the Opportunities
exports.getAllOpportunities = async (req, res) => {
    try {
        const Opportunities = await Opportunity.find();
        res.json(Opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
