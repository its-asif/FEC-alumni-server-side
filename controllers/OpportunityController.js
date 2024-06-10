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

// Get a single Opportunity
exports.getOpportunityById = async (req, res) => {
    try {
        const Opportunity = await Opportunity.findById(req.params.id);
        res.json(Opportunity);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new Opportunity
exports.createOpportunity = async (req, res) => {
    console.log(req.body);
    const { type, title, description, postedBy } = req.body;
    try {
        const opportunity = new Opportunity({ type, title, description, postedBy });
        await opportunity.save();
        
        // debug
        console.log(Opportunity);
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
        const Opportunity = await Opportunity.findById(req.params.id);
        Opportunity.isVerified = !Opportunity.isVerified;
        await Opportunity.save();
        res.json({ message: "Opportunity verification toggled successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get all the verified Opportunities
exports.getAllVerifiedOpportunities = async (req, res) => {
    try {
        const Opportunities = await Opportunity.find({ isVerified: true });
        res.json(Opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all the unverified Opportunities
exports.getAllUnverifiedOpportunities = async (req, res) => {
    try {
        const Opportunities = await Opportunity.find({ isVerified: false });
        res.json(Opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all the Opportunities of a particular type
exports.getAllOpportunitiesOfType = async (req, res) => {
    try {
        const Opportunities = await Opportunity.find({ type: req.params.type });
        res.json(Opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all the Opportunities posted by a particular user
exports.getAllOpportunitiesByUser = async (req, res) => {
    try {
        const Opportunities = await Opportunity.find({ postedBy: req.params.id });
        res.json(Opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// search : get all the Opportunities with title containing the search query
exports.searchOpportunities = async (req, res) => {
    try {
        const Opportunities = await Opportunity.find({ title: { $regex: req.params.query, $options: 'i' } });
        res.json(Opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};