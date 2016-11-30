'use strict';

var express = require('express');
var controller = require('./categoria.controller');

var router = express.Router();

router.get('/:key', controller.get);
router.get('/:key/:id', controller.remove);
router.put('/:key/:id', controller.update);

module.exports = router;
