var express = require('express');
var router = express.Router();

// router.use('/findpw', require('./findpw.js'));
router.use('/join', require('./join.js'));
router.use('/login', require('./login.js'));
router.use('/logout', require('./logout.js'));
router.use('/emailcheck', require('./emailcheck.js'));
router.use('/nicknamecheck', require('./nicknamecheck.js'));

module.exports = router;
