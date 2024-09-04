const Award = require('../models/Award');

// Create Award
exports.createAward = async (req, res) => {
  try {
    const { name, description, date, place } = req.body;

    const newAward = new Award({
      name,
      description,
      date,
      place,
    });

    await newAward.save();
    res.status(201).json({ message: "Award created successfully" });
  } catch (error) {
    console.error("Error creating award:", error);
    res.status(500).json({ message: "Error creating award", error });
  }
};

// Get All Awards
exports.getAwards = async (req, res) => {
  try {
    const awards = await Award.find();
    res.status(200).json(awards);
  } catch (error) {
    console.error("Error fetching awards:", error);
    res.status(500).json({ message: "Error fetching awards", error });
  }
};

// Update Award
exports.updateAward = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, date, place } = req.body;

    const updatedAward = await Award.findByIdAndUpdate(
      id,
      { name, description, date, place },
      { new: true }
    );

    if (!updatedAward) {
      return res.status(404).json({ message: "Award not found" });
    }

    res.status(200).json({ message: "Award updated successfully" });
  } catch (error) {
    console.error("Error updating award:", error);
    res.status(500).json({ message: "Error updating award", error });
  }
};

// Delete Award
exports.deleteAward = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAward = await Award.findByIdAndDelete(id);

    if (!deletedAward) {
      return res.status(404).json({ message: "Award not found" });
    }

    res.status(200).json({ message: "Award deleted successfully" });
  } catch (error) {
    console.error("Error deleting award:", error);
    res.status(500).json({ message: "Error deleting award", error });
  }
};
