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

  
    // Define a method to view all departments in the database
    async viewDepartments() {
      const connection = await this.getConnection();
      const [rows] = await connection.query("SELECT * FROM department");
      connection.end();
  
      console.table(rows);
      return rows;
    }

    