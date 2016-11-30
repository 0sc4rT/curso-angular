/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/categorias              ->  index
 */

'use strict';
var jsonfile = require('jsonfile');
var lodash = require('lodash');
var path = require('path');
var FILE = path.resolve('db', 'categorias.json');

export function get(req, res) {
  jsonfile.readFile(FILE, function (err, obj) {
    if (err) {
      res.status(500).send('Internal Server Error');
    }
    var categoria = lodash.find(obj.categorias, function (category) {
      return category.key === req.params.key
    });
    if (!categoria) {
      res.status(404).send('Not Found');
    }
    res.json(categoria);
  });
}

export function update(req, res) {
  jsonfile.readFile(FILE, function (err, obj) {
    var result = null;
    var categoria = lodash.find(obj.categorias, function (category) {
      return category.key === req.params.key;
    });
    if (!categoria) {
      res.status(404).send('Category Not found: ' + req.params.key);
    }
    lodash.forEach(categoria.productos, function (product) {
      if (product.id == req.params.id) {
        product.marca = req.body.marca;
        product.modelo = req.body.modelo;
        product.precio = parseInt(req.body.precio);
        result = product;
      }
    });
    if (!result) {
      res.status(404).send('Error 404');
    }
    jsonfile.writeFile(FILE, { categorias: obj.categorias }, function (err) {
      console.error(err);
    });
    res.status(200).type('json').json(result);
  });
}

export function remove(req, res) {
  jsonfile.readFile(FILE, function (err, obj) {
    if (err) {
      res.status(500).send('Internal Server Error');
    }
    var categoria = lodash.find(obj.categorias, function (category) {
      return category.key === req.params.key;
    });
    if (!categoria) {
      res.status(404).send('Category Not found: ' + req.params.key);
    }
    var result = lodash.remove(categoria.productos, function (product) {
      return product.id == req.params.id;
    });
    jsonfile.writeFile(FILE, { categorias: obj.categorias }, function (err) {
      console.error(err);
    });
    res.status(200).json(result[0]);
  });
}