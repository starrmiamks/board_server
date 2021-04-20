const express = require('express');
const { userInfo } = require('node:os');
const router = require('express').Router();
const validateSession = require('../middleware/validate-session');
const Sub = require('../db').import('../models/subscription');

router.post('/signUp', validateSession, function (req, res) {

    Subscription.create({
        subscriptionStart: req.body.sub.subscriptionStart,
        subscriptionType: req.body.sub.subscriptionType,
        streetAddress1: req.body.sub.streetAddress1,
        streetAddress2: req.body.sub.streetAddress2,
        city: req.body.sub.city,
        state: req.body.sub.state,
        zip: req.body.sub.zip,
    })
        .then(
            function createSuccess(subscriber) {
                let token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, { expiresIn: 60 * 60 *24});
                res.json({
                    subscriber: subscriber,
                    message: 'User successfully subscribed!',
                    sessionToken: token
                });
            }
        )
        .catch(err => res.status(500).json({ error: err}))
});



module.exports = router;