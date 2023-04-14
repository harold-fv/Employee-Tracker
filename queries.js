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
      
    // create the connection
      const connection = await this.getConnection();
      
     // query database
      const [rows] = await connection.query("SELECT * FROM department");
      connection.end();
  //display data in a tabular format
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

// Define a method to add a new role to the database
async addRole(title, salary, departmentId) {
  const connection = await this.getConnection();
  const [result] = await connection.query("INSERT INTO role SET ?", {
    title: title,
    salary: salary,
    department_id: departmentId,
  });
  connection.end();

  console.log("Role added successfully.");
  return result;
}

// Define a method to add a new employee to the database
async addEmployee(firstName, lastName, roleId, managerId) {
  const connection = await this.getConnection();
  const [result] = await connection.query("INSERT INTO employee SET ?", {
    first_name: firstName,
    last_name: lastName,
    role_id: roleId,
    manager_id: managerId,
  });
  connection.end();

  console.log("Employee added successfully.");
  return result;
}
// Define a method to update an employee's role in the database
async updateEmployeeRole(employeeId, newRoleId) {
  const connection = await this.getConnection();
  const [result] = await connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [newRoleId, employeeId]);
  connection.end();

  console.log("Employee role updated successfully.");
  return result;
}
// Define a method to update an employee's manager in the database
async updateEmployeeManager(employeeId, newManagerId) {
  const connection = await this.getConnection();
  const [result] = await connection.query("UPDATE employee SET manager_id = ? WHERE id = ?", [newManagerId, employeeId]);
  connection.end();

  console.log("Employee manager updated successfully.");
  return result;
}
// Define a method to retrieve all departments from the database
async getDepartments() {
  const connection = await this.getConnection();
  const [rows] = await connection.query("SELECT * FROM department");
  connection.end();

  return rows;
}
// Define a method to retrieve all roles from the database
async getRoles() {
  const connection = await this.getConnection();
  const [rows] = await connection.query("SELECT * FROM role");
  connection.end();

  return rows;
}
// Define a method to retrieve all employees from the database
async getEmployees() {
  const connection = await this.getConnection();
  const [rows] = await connection.query("SELECT * FROM employee");
  connection.end();

  return rows;
}

// Define a method to retrieve all managers from the database
async getManagers() {
  const connection = await this.getConnection();
  const [rows] = await connection.query(
    "SELECT DISTINCT m.id, m.first_name, m.last_name FROM employee e JOIN employee m ON e.manager_id = m.id"
  );
  connection.end();

  return rows;
}

// Define a method to delete a department from the database
async deleteDepartment(id) {
  const connection = await this.getConnection();
  const [result] = await connection.query("DELETE FROM department WHERE id = ?", [id]);
  connection.end();

  console.log("Department deleted successfully.");
  return result;
}

// Define a method to retrieve roles by a specific department from the database
async getRolesByDepartment(departmentId) {
  const connection = await this.getConnection();
  const [rows] = await connection.query("SELECT * FROM role WHERE department_id = ?", [departmentId]);
  connection.end();

  return rows;
}

// Define a method to delete a role from the database
async deleteRole(id) {
  const connection = await this.getConnection();
  const [result] = await connection.query("DELETE FROM role WHERE id = ?", [id]);
  connection.end();

  console.log("Role deleted successfully.");
  return result;
}

// Define a method to delete an employee from the database
async deleteEmployee(id) {
  const connection = await this.getConnection();
  const [result] = await connection.query("DELETE FROM employee WHERE id = ?", [id]);
  connection.end();

  console.log("Employee deleted successfully.");
  return result;
}
}

// Export the Queries class for use in other modules
module.exports = Queries;











