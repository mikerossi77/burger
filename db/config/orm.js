var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function (burgerName, isDevoured) {
        var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES (??, ??);"
        connection.query(queryString, [burgerName, isDevoured], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function (isDevoured, id) {
        var queryString = "UPDATE burgers SET devoured = ?? WHERE id = ??;"
        connection.query(queryString, [isDevoured, id], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};
module.exports = orm;
