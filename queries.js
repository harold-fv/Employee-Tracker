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

// Define a method to view the total budget (salary) of a specific department
async viewDepartmentBudget(departmentId) {
  const connection = await this.getConnection();
  const [rows] = await connection.query(
    "SELECT department.id, department.name, SUM(role.salary) AS budget FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE department.id = ? GROUP BY department.id",
    [departmentId]
  );
  connection.end();

  console.table(rows);
  return rows;
}


  // Define a method to view all roles in the database
  async viewRoles() {
    const connection = await this.getConnection();
    const [rows] = await connection.query(
      "SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id"
    );
    connection.end();

    console.table(rows);
    return rows;
  }

  
    // Define a method to view all employees in the database
    async viewEmployees() {
      const connection = await this.getConnection();
      const [rows] = await connection.query(
        "SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id LEFT JOIN role ON e.role_id = role.id LEFT JOIN department ON role.department_id = department.id"
      );
      connection.end();
  
      console.table(rows);
      return rows;
    }

    
   // Define a method to view employees by a specific department
async viewEmployeesByDepartment(departmentId) {
  const connection = await this.getConnection();
  const [rows] = await connection.query(
    "SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id LEFT JOIN role ON e.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE department.id = ?",
    [departmentId]
  );
  connection.end();

  console.table(rows);
  return rows;
}


// Define a method to view employees by a specific manager
async viewEmployeesByManager(managerId) {
  const connection = await this.getConnection();
  const [rows] = await connection.query(
    "SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id LEFT JOIN role ON e.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE e.manager_id = ?",
    [managerId]
  );
  connection.end();

  console.table(rows);
  return rows;
}


// Define a method to add a new department to the database
async addDepartment(name) {
  const connection = await this.getConnection();
  const [result] = await connection.query("INSERT INTO department SET ?", {
    name: name,
  });
  connection.end();

  console.log("Department added successfully.");
  return result;
}









