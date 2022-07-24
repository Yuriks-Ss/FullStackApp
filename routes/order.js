const express = require('express')
const controller = require('../controllers/order')
const passport = require("passport");

const router = express.Router()

// /api/auth/
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
// router.post('/', passport.authenticate('jwt', {session: false}), controller.create)


module.exports = router