-- Drops the task_saver_db if it already exists --


-- Create the database and specified it for use.
CREATE DATABASE burger_db;

USE burger_db;

-- Create the table.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);

