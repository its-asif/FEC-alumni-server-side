const express = require('express');
const router = express.Router();
const opportunityController = require('../controllers/OpportunityController');


// Get all the opportunities
router.get('/', opportunityController.getAllOpportunities);

module.exports = router;