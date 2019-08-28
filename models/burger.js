// var orm = require("..db/config/orm.js");
var orm = require("../db/config/orm");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(burgerName, isDevoured) {
      orm.insertOne(burgerName, isDevoured, function(res) {
        cb(res);
      });
    },
    updateOne: function(isDevoured, id) {
      orm.update(isDevoured, id, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
