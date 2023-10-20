const express = require('express')
const router = express.Router()
const destinationsCtrl = require('../controllers/destinations')
// All routes start with '/' (root)

// POST /movies/:id/reviews
router.post('/flights/:id/destination', destinationsCtrl.create)

module.exports = router
