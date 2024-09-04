const express = require('express');
const router = express.Router();
const awardController = require('../controllers/awardController');

router.post('/awards', awardController.createAward);
router.get('/awards', awardController.getAwards);
router.put('/awards/:id', awardController.updateAward);
router.delete('/awards/:id', awardController.deleteAward);

module.exports = router;
