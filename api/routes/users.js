const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Users were fetched'
    })
})
router.post('/', (req, res, next) => {
    const user = {
        name: req.body.name
    }
    res.status(200).json({
        message: 'Users were created',
        createdName: user
    });
});

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    
    res.status(200).json({
        message: 'You passed an ID'
    });
});

router.patch('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'updated user'
    });
});
router.delete('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'Delected product'
    });
});
module.exports = router;