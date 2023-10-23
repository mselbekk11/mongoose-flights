const express = require('express')
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets')

// GET /performers/new (new functionality)
router.get('/tickets/new', ticketsCtrl.new)

// POST /performers (create functionality)
router.post('/tickets', ticketsCtrl.create);

module.exports = router
