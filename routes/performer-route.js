const express = require('express')
const PerformerCtrl = require('../controllers/performer-ctrl')
const router = express.Router()
router.get('/performers/new', PerformerCtrl.show)
router.post('/performers', PerformerCtrl.new)

module.exports = router
