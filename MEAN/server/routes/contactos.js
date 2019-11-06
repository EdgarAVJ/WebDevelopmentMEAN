var express = require('express');
var router = express.Router();
const contactsArray = require('../content/contactos.json');

router.get('/', function(req, res, next) {
  res.status(200).send(contactsArray);
});

module.exports = router;
