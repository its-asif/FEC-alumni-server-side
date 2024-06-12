const Event = require('../schema/EventSchema');


// Get all the Events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a particular Event
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        res.json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new Event
exports.createEvent = async (req, res) => {
    const event = new Event({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        location: req.body.location,
        postedBy: req.body.postedBy
    });

    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a Event
exports.deleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.json({ message: "Event deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a Event
exports.updateEvent = async (req, res) => {
    try {
        await Event.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "Event updated successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// toggle varification a Event
exports.toggleVerification = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        event.isVerified = !event.isVerified;
        await event.save();
        res.json({ message: "Event verification toggled" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get events by date range
exports.getEventsByDateRange = async (req, res) => {
    try {
        const events = await Event.find({
            date: {
                $gte: req.params.startDate,
                $lte: req.params.endDate
            }
        });
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
