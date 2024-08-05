const express = require('express');
const router = express.Router();
const Event = require('../schema/eventData');
const eventData = require('../schema/eventData');
// const { describe } = require('node:test');

// Route to create a new EVENT
router.post("/submitEventData", async (req, res) => {
    try {
        const { userEventname, userDescription, userDate, userPlace } = req.body;

        // Create a new EVENT instance
        const newEvent = new Event({
            eventname: userEventname,
            description: userDescription,
            date: userDate,
            place: userPlace,
        });

        // Save to the database
        await newEvent.save();
        res.send({ message: "Success" });
    } catch (err) {
        console.error(err);
        res.send({ message: "Failure" });
    }
});

// Route to get all event data
router.get("/getEventData", async (req, res) => {
    try {
        const events = await Event.find();
        res.send(events);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error fetching data" });
    }
});


// Route to delete Event data
router.delete("/deleteEventData/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEvent = await eventData.findByIdAndDelete(id);

        if (deletedEvent) {
            res.send({ message: "Success" });
        } else {
            res.status(404).send({ message: "Event not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Failure" });
    }
});
module.exports = router;
