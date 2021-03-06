let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const Profile = require('../db').import('../models/profile');
// const cloudinary = require('cloudinary');npm 


// router.get('/practice', validateSession, function (req, res) {
//     res.send('Hey!! This is a practice route!')
// })

router.post('/add', validateSession, async (req, res) => {
    const profileEntry = {
        userId: req.user.id,
        picture: req.body.profile.picture,
        title: req.body.profile.title,
        details: req.body.profile.details
    }
    // Profile.create(profileEntry)
    //     .then(profile => res.status(200).json(profile))
    //     .catch(err => res.status(500).json({ error: err }))

    try {
        let profile = await Profile.create(profileEntry);
        res.status(200).json(profile)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

router.get('/', async (req, res) => {
    // Profile.findAll()
    //     .then(entries => res.status(200).json(entries))
    //     .catch(err => res.status(500).json({ error: err }))
    try {
        let entries = await Profile.findAll();
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

router.get('/mine', validateSession, async (req, res) => {
    let owner = req.user.id
    // Profile.findAll({
    //     where: { userId: owner }
    // })
    //     .then(entries => res.status(200).json(entries))
    //     .catch(err => res.status(500).json({ error: err }))

    try {
        let entries = await Profile.findAll({ where: { userId: owner } });
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

router.get('/one/:id', (req, res) => {
    Profile.findOne({
        where: { id: req.params.id },
    })
        .then((profile) =>
            res.status(200).json({
                message: 'Profile Retrieved',
                profile,
            })
        )
        .catch((err) => res.status(500).json({ error: err }));
});

// router.get('/cloudsign', valsess, async (req, res) => {
//     try {
//         const ts = Math.floor(new Date().getTime() / 1000).toString()

//         const sig = cloudinary.utils.api_sign_request(
//             { timestamp: ts, upload_preset: 'cloudinary-mayhem' },
//             process.env.CLOUDINARY_SECRET
//         )
//         res.status(200).json({
//             sig, ts
//         })
//     } catch (err) {
//         res.status(500).json({
//             message: 'failed to sign'
//         })
//     }
// })

router.put('/update/:entryId', validateSession, async (req, res) => {
    const updateProfileEntry = {
        picture: req.body.profile.picture,
        title: req.body.profile.title,
        details: req.body.profile.details,
    };
    const query = { where: { id: req.params.entryId, userId: req.user.id } }

    // Profile.update(updateProfileEntry, query)
    //     .then((entries) => res.status(200).json(entries))
    //     .catch((err) => res.status(500).json({ error: err }));

    try {
        let entries = await Profile.update(updateProfileEntry, query);
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

router.delete('/delete/:id', validateSession, async (req, res) => {
    const query = { where: { id: req.params.id, userId: req.user.id } };

    // Profile.destroy(query)
    //     .then(() => res.status(200).json({ message: 'Journal Entry Removed' }))
    //     .catch((err) => res.status(500).json({ error: err }));

    try {
        let entries = await Profile.destroy(query);
        res.status(200).json({ message: 'Entry Deleted' })
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router