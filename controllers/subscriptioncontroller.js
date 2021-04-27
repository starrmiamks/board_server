const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const User = require('../models/User');
const Subscription = require('../db').import('../models/subscription');

router.post('/signup', validateSession, (req, res) => {
    const subscription = {
        streetAddress1: req.body.subscription.streetAddress1,
        streetAddress2: req.body.subscription.streetAddress2,
        city: req.body.subscription.city,
        state: req.body.subscription.state,
        zip: req.body.subscription.zip
    }
    Subscription.create(subscription)
        .then(sub => res.status(200).json(sub))
        .catch(err => res.status(500).json({ error: err}))
})

module.exports = router;