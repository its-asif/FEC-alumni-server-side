const Opportunity = require('../schema/OpportunitySchema');


// Get all the Opportunities
exports.getAllOpportunities = async (req, res) => {
    try {
        const opportunities = await Opportunity.find();
        res.json(opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single Opportunity
exports.getOpportunityById = async (req, res) => {
    try {
        const opportunity = await Opportunity.findById(req.params.id);
        res.json(opportunity);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new Opportunity
exports.createOpportunity = async (req, res) => {
    const { type, title, description, postedBy } = req.body;
    try {
        const opportunity = new Opportunity({ type, title, description, postedBy });
        await opportunity.save();
        res.status(201).json(Opportunity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// Delete a Opportunity
exports.deleteOpportunity = async (req, res) => {
    try {
        await Opportunity.findByIdAndDelete(req.params.id);
        res.json({ message: "Opportunity deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}


// Update a Opportunity
exports.updateOpportunity = async (req, res) => {
    try {
        await Opportunity.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "Opportunity updated successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// toggle varification a Opportunity
exports.toggleVerification = async (req, res) => {
    try {
        const opportunity = await Opportunity.findById(req.params.id);
        opportunity.isVerified = !opportunity.isVerified;
        await opportunity.save();
        res.json({ message: "Opportunity verification toggled successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get all the verified Opportunities
exports.getAllVerifiedOpportunities = async (req, res) => {
    try {
        const opportunities = await Opportunity.find({ isVerified: true });
        res.json(opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all the unverified Opportunities
exports.getAllUnverifiedOpportunities = async (req, res) => {
    try {
        const opportunities = await Opportunity.find({ isVerified: false });
        res.json(opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all the Opportunities of a particular type
exports.getAllOpportunitiesOfType = async (req, res) => {
    try {
        const opportunities = await Opportunity.find({ type: req.params.type });
        res.json(opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all the Opportunities posted by a particular user
exports.getAllOpportunitiesByUser = async (req, res) => {
    try {
        const opportunities = await Opportunity.find({ postedBy: req.params.id });
        res.json(opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// search : get all the Opportunities with title containing the search query
exports.searchOpportunities = async (req, res) => {
    try {
        const opportunities = await Opportunity.find({ title: { $regex: req.params.query, $options: 'i' } });
        res.json(opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};