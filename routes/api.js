const express = require('express');
const { standardRespose, middleware } = require('./api-helper');
const user = require('./apis/user');
const router = express.Router();

router.get('/', middleware.authCheck, (req, res, next)=>{
    /** Response format */
    const {user, business} = req;
    res.json(standardRespose({business, user}, null));
});
router.get('/users', middleware.authCheck, user.all);
router.post('/users', middleware.authCheck, user.create);
/** middlewares */



module.exports = router;