
'use strict';
var jsonfile = require('jsonfile');
var lodash = require('lodash');
var path = require('path');
var FILE = path.resolve('db', 'usuarios.json');

export function get(req, res) {
  jsonfile.readFile(FILE, function (err, obj) {
    if (err) {
      res.status(500).send('Internal Server Error');
    }
    var result = {
      user: false,
      pass: false
    };
    lodash.forEach(obj.usuarios, function (user) {
      if (user.usuario == req.params.user) {
        result.user = true;
        if (user.password == req.params.pass) {
          result.pass = true;
        }
      }
    });
    res.json(result);
  });
}

/*
export function del(req, res) {
  jsonfile.readFile(FILE, function (err, obj) {
    if (err) {
      res.status(500).send('Internal Server Error');
    }
    var result = lodash.remove(obj.usuarios, function (currentObject) {
      return currentObject.usuario == req.params.user && currentObject.password == req.params.pass;
    });
    jsonfile.writeFile(FILE, { courses: obj.usuarios }, function (err) {
      console.error(err);
    });
    res.status(200).json(result[0]);
  });
}
*/
