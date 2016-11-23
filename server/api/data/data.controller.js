
'use strict';
var jsonfile = require('jsonfile');
var lodash = require('lodash');
var path = require('path');
var FILE = path.resolve('db', 'usuarios.json');

export function index(req, res) {
  jsonfile.readFile(FILE, function (err, obj) {
    res.json(obj);
  });
}

export function verify(req, res) {
  jsonfile.readFile(FILE, function (err, obj) {
    if (err) {
      res.status(500).send('Internal Server Error');
    }
    var result = null;
    var usuario = lodash.forEach(obj.usuarios, function (u) {
      if (u.usuario == req.params.user && u.password == req.params.pass) {
        result = u;
      }
    });
    /*
    if (!result) {
      //res.send(500, JSON.stringify({error: true}));
      //result = JSON.stringify({error: true});
    }
    */
    
    res.json(result);
  });
}

