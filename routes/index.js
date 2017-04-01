const express = require('express');
const config = require('./../config');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: config.app.title,
    resume: config.resume,
  });
});

module.exports = router;
