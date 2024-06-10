const express = require('express');
const router = express.Router();
const opportunityController = require('../controllers/OpportunityController');

// ! Get 
// Get all the opportunities
router.get('/', opportunityController.getAllOpportunities);

// Get a opportunity by id
router.get('/:id', opportunityController.getOpportunityById);

// ! Post
// POST a opportunity
router.post('/', opportunityController.createOpportunity);

// ! Delete
// DELETE a opportunity
router.delete('/:id', opportunityController.deleteOpportunity);

// ! Put
// Update a opportunity
router.put('/:id', opportunityController.updateOpportunity);

// toggle varification a Opportunity
router.put('/toggleVerification/:id', opportunityController.toggleVerification);

// ! More Get routes
// Get all the verified Opportunities
router.get('/verified', opportunityController.getAllVerifiedOpportunities);

// Get all the unverified Opportunities
router.get('/unverified', opportunityController.getAllUnverifiedOpportunities);

// Get all the Opportunities of a particular type
router.get('/type/:type', opportunityController.getAllOpportunitiesOfType);

// Get all the Opportunities posted by a particular user
router.get('/user/:id', opportunityController.getAllOpportunitiesByUser);

// search : get all the Opportunities with title containing the search query
router.get('/search/:query', opportunityController.searchOpportunities);

module.exports = router;