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


// Define the mainMenu function which prompts the user for
// an action and executes the corresponding function
async function mainMenu() {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View departments",
        "View roles",
        "View employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee role",
        "Update employee manager",
        "View employees by manager",
        "View employees by department",
        "Delete departments",
        "Delete roles",
        "Delete employees",
        "View department budget",
        "Exit",
      ],
    },
  ]);

 // Call the corresponding function based on the selected action
  switch (action) {
    case "View departments":
      await queries.viewDepartments();
      mainMenu();
      break;
    case "View roles":
      await queries.viewRoles();
      mainMenu();
      break;
    case "View employees":
      await queries.viewEmployees();
      mainMenu();
      break;
    case "Add a department":
      promptAddDepartment();
      break;
    case "Add a role":
      promptAddRole();
      break;
    case "Add an employee":
      promptAddEmployee();
      break;
    case "Update employee role":
      promptUpdateEmployeeRole();
      break;
    case "Update employee manager":
      promptUpdateEmployeeManager();
      break;
    case "View employees by manager":
      promptViewEmployeesByManager();
      break;
    case "View employees by department":
      promptViewEmployeesByDepartment();
      break;
    case "Delete departments":
      promptDeleteDepartment();
      break;
    case "Delete roles":
      promptDeleteRole();
      break;
    case "Delete employees":
      promptDeleteEmployee();
      break;
    case "View department budget":
      promptViewDepartmentBudget();
      break;
    case "Exit":
      process.exit();
      break;
  }
}


// Define a function to prompt the user for department details
// and add a new department to the database
async function promptAddDepartment() {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the department name:",
    },
  ]);

  await queries.addDepartment(name);
  mainMenu();
}

// Define a function to prompt the user for role details
// and add a new role to the database
async function promptAddRole() {
  const departments = await queries.getDepartments();

  const { title, salary, departmentId } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the role title:",
    },
    {
      type: "input",
      name: "salary",
      message: "Enter the role salary:",
      validate: (input) => (isNaN(input) ? "Please enter a number." : true),
    },
    {
      type: "list",
      name: "departmentId",
      message: "Select the department for the role:",
      choices: departments.map((department) => ({
        name: department.name,
        value: department.id,
      })),
    },
  ]);

  await queries.addRole(title, salary, departmentId);
  mainMenu();
}

// Define a function to prompt the user for employee details
// and add a new employee to the database
async function promptAddEmployee() {
  const roles = await queries.getRoles();
  const employees = await queries.getEmployees();

  const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Enter the employee's first name:",
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter the employee's last name:",
    },
    {
      type: "list",
      name: "roleId",
      message: "Select the employee's role:",
      choices: roles.map((role) => ({
        name: role.title,
        value: role.id,
      })),
    },
    {
      type: "list",
      name: "managerId",
      message: "Select the employee's manager:",
      choices: [
        { name: "None", value: null },
        ...employees.map((employee) => ({
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        })),
      ],
    },
  ]);

  await queries.addEmployee(firstName, lastName, roleId, managerId);
  mainMenu();
}
