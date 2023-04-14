# Employee-Tracker

# Description
This appplication creates an interfaces that allow non-developers to easily view and interact with information stored in databases. This system is a command-line application designed to manage a company's employee database, using Node.js, Inquirer, and MySQL.

# User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

# Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```


# Installation

To install and use the Employee Tracker application, please follow these steps:

1.You can clone this repository to your local machine using Git:

Git clone https://github.com/harold-fv/Employee-Tracker.

Next, run the following on the command line, 

npm init -y
npm i inquirer@8.2.4
npm i mysql 
npm i console.table.

After you install the package ,from the command line type node index.js to run the program.

# Usage

1. To use the Employee Tracker program, navigate to the root directory of your GitHub repository in your terminal and run the following command: node index.js .

![image](https://user-images.githubusercontent.com/120603153/232168315-f303ebc8-57c1-4d66-a73f-7ed245f596ec.png)

2. The system will be presented with the following options.

view all departments, 
view all roles, 
view all employees,
add a department, 
add a role, 
add an employee, 
and update an employee role

![image](https://user-images.githubusercontent.com/120603153/232168359-0fdb8d8c-0d64-4591-b16d-f1335b1c38e7.png)

3. When a user chooses to view all departments then the system will  present with a formatted table showing department names and department ids.

![image](https://user-images.githubusercontent.com/120603153/232168517-7f959c2f-fbbd-4ab8-8cbe-6c3a5d394ce8.png)

4. When a user views all roles, then the system will present with the job title, role id, the department that role belongs to, and the salary for that role.

![image](https://user-images.githubusercontent.com/120603153/232168764-6b68c88d-29c1-47ed-a35d-4e9efda15360.png)

5. When a user chooses to view all employees, then the system will present with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.

![image](https://user-images.githubusercontent.com/120603153/232168876-720c29aa-9e7b-4e2f-969e-b06dabeba85c.png)

6. When a user chooses to add a department,then the system will prompt to enter the name of the department and that department is added to the database.

![image](https://user-images.githubusercontent.com/120603153/232169010-fd100c50-1a6c-4f93-b76f-b5919011b555.png)

7. When a user chooses to add a role, then the system will prompt to enter the name, salary, and department for the role and that role is added to the database.

![image](https://user-images.githubusercontent.com/120603153/232169142-af978682-cf0b-4fcd-91d9-f2bbb349e4e6.png)

8. When a user chooses to add an employee, then the system will prompt to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.

![image](https://user-images.githubusercontent.com/120603153/232169277-e6feea7b-9987-4c3e-ad10-1b67949bd7e9.png)

9. When a user chooses to update an employee role, then the system will prompt to select an employee to update and their new role and this information is updated in the database.

![image](https://user-images.githubusercontent.com/120603153/232169364-65383fbb-7411-4acf-9cd9-008ebc83b509.png)

10. When a user chooses to update the employee Managers, then the system will 


















Walkthrough Video
https://github.com/harold-fv/Employee-Tracker/blob/main/Employee-Tracker-Video-Demo.gif

• The included image demonstrates the application functionality:

The Employee Tracker program allows you to easily view and interact with information stored in databases.