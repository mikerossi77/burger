// Requiring our Todo model
var db = require("../models");

module.exports = function(app) {

    // GET route for getting all of the todos
    app.all("/api/burgers", function(req, res) {
      // findAll returns all entries for a table when used with no options
      db.burger.findAll({}).then(function(dbBurgers) {
        // We have access to the todos as an argument inside of the callback function
        res.json(dbBurgers);
      });
    });
  
    // POST route for saving a new todo
    app.post("/api/burgers", function(req, res) {
      console.log(req.body);
      // create takes an argument of an object describing the item we want to
      // insert into our table. In this case we just we pass in an object with a text
      // and complete property (req.body)
      db.Todo.create({
        burgerName: req.body.burgerName,
        isDevoured: req.body.isDevoured
      }).then(function(dbBurgers) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbBurgers);
      });
    });
  
    // DELETE route for deleting todos. We can get the id of the todo we want to delete from
    // req.params.id
    app.delete("/api/burgers/:id", function(req, res) {
        console.log("There is no delete code yet")
    });
  
    //PUT route for updating todos. We can get the updated todo from req.body
    app.put("/api/todos", function(req, res) {
        console.log("There is no update code yet")
    });
  };

  module.exports = router;
  