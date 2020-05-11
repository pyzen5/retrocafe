const express = require('express');
const router = express.Router();
const profile = require('./profile');
const app = require('./app');

const fs = require("fs");
const RSA_PUBLIC_KEY = fs.readFileSync('./public.key');
const expressJwt = require('express-jwt');
const checkIfAuthenticated = expressJwt({secret: RSA_PUBLIC_KEY});

router.use('/app', app);
router.use('/profile', checkIfAuthenticated, profile);

module.exports = router;