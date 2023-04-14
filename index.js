// Import inquirer to create an interactive command line interface
// and Queries class to perform MySQL database operations
const inquirer = require("inquirer");
const Queries = require("./queries");

// Define a configuration object to establish a connection
// with the MySQL database
const config = {
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "employee_tracker_db",
};

// Initialize a new Queries object with the given configuration
// to perform database operations
const queries = new Queries(config);
