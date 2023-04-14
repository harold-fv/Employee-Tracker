// Import the required MySQL library for establishing a connection
const mysql = require("mysql2/promise");

// Define a Queries class to handle MySQL database operations
class Queries {
  constructor(config) {
    this.config = config;
  }

 // Define a method to establish and return a MySQL connection
  async getConnection() {
    return await mysql.createConnection(this.config);
  }
