'use strict';

var express = require('express');
var controller = require('./usuario.controller');

var router = express.Router();

router.get('/:user/:pass', controller.get);

module.exports = router;
