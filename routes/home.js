const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('home okay!')
});


module.exports = router;