var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('D:/Workshop/Belajar Back-End/WebSocket/views/index.html');
});

module.exports = router;
