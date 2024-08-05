const express = require('express');
const router = express.Router();
const Awards = require('../schema/awardData');
// const awardData = require('../schema/awardData');
// const { describe } = require('node:test');

// Route to create a new EVENT
router.post("/submitAwardData", async (req, res) => {
    try {
        const { userAwardname, userDescription, userDate, userPlace } = req.body;

        // Create a new award instance
        const newAward = new Awards({
            awardname: userAwardname,
            description: userDescription,
            date: userDate,
            place: userPlace,
        });

        // Save to the database
        await newAward.save();
        res.send({ message: "Success" });
    } catch (err) {
        console.error(err);
        res.send({ message: "Failure" });
    }
});

// Route to get all event data
router.get("/getAwardData", async (req, res) => {
    try {
        const awards = await Awards.find();
        res.send(awards);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error fetching data" });
    }
});


// Route to delete Event data
router.delete("/deleteAwardData/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAward = await Awards.findByIdAndDelete(id);

        if (deletedAward) {
            res.send({ message: "Success" });
        } else {
            res.status(404).send({ message: "Award not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Failure" });
    }
});
module.exports = router;
