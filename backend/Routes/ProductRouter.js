const ensureAuthenticated = require('../Middlewared/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req,res) => {
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "laptop",
            price: 50000
        }
    ])
});

module.exports = router;
