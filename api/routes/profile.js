const express = require('express');
const {user} = require('../mockdata');

const router = express.Router();

router.get("/getuser", (req, res) => {
  res.status(200).json({user: user})
})

module.exports = router;
