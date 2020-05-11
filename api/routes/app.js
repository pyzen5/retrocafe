const express = require('express');
const bodyParser = require('body-parser');
const {user, dishes} = require('../mockdata');
const jwt = require("jsonwebtoken");
const router = express.Router();
const fs = require("fs");
const RSA_PRIVATE_KEY = fs.readFileSync("./pvt.key");

router.get("/", (req, res) => {
    res.status(200).json({msg: 'hello'});
})

router.get("/menu", (req, res) => {
    res.status(200).json(dishes);
})

router.post("/login", (req, res) => {
  const email = req.body.email,
    password = req.body.password;
  if (validateEmailAndPassword()) {    
    const userId = findUserIdForEmail(email);    
    const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
      algorithm: "RS256",
      expiresIn: 120,
      subject: userId,
    });

    // set it in an HTTP Only + Secure Cookie
    // res.cookie("SESSIONID", jwtBearerToken, { httpOnly: true, secure: true });
    // send the JWT back to the user

    // set it in the HTTP Response body
    res.status(200).json({
      idToken: jwtBearerToken,
      expiresIn: 120,
    });
  } else {
    // send status 401 Unauthorized
    res.sendStatus(401);
  }
});

function validateEmailAndPassword() {
    return true;
}

function findUserIdForEmail(email) {
    return 'phani';
}

module.exports = router;
