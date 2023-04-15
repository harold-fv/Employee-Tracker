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

npm init -y ,
npm i inquirer@8.2.4 ,
npm i mysql ,
npm i console.table.

After you install the package ,from the command line type node index.js to run the program.

# Usage

1. To use the Employee Tracker program, navigate to the root directory of your GitHub repository in your terminal and run the following command: node index.js .

![image](https://user-images.githubusercontent.com/120603153/232168315-f303ebc8-57c1-4d66-a73f-7ed245f596ec.png)

2. The system will be presented with the following options.

view departments, 
view roles, 
view employees,
add a department, 
add a role, 
add an employee, 
and update an employee role

![image](https://user-images.githubusercontent.com/120603153/232168359-0fdb8d8c-0d64-4591-b16d-f1335b1c38e7.png)

3. When a user chooses to view all departments then the system will  present with a formatted table showing department names and department ids.

![image](https://user-images.githubusercontent.com/120603153/232170081-6498de2f-d3ec-4a64-b861-edea7ab817ce.png)

4. When a user views all roles, then the system will present with the job title, role id, the department that role belongs to, and the salary for that role.

![image](https://user-images.githubusercontent.com/120603153/232170156-c2c007c8-9588-46b0-b69d-e5c717ad7835.png)

5. When a user chooses to view all employees, then the system will present with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.

![image](https://user-images.githubusercontent.com/120603153/232170196-d6524f98-f3a5-4daf-8cea-b8473de285ea.png)

6. When a user chooses to add a department,then the system will prompt to enter the name of the department. The system will generate the request and that department is added to the database.

![image](https://user-images.githubusercontent.com/120603153/232170252-f94045fe-bd05-4630-abb8-b065bd486b6e.png)

7. When a user chooses to add a role, then the system will prompt to enter the role title, salary, and department for the role. The system will generate the request and that role is added to the database.

![image](https://user-images.githubusercontent.com/120603153/232170346-61eea28b-cb95-4d09-a65e-ca92e5c13711.png)

8. When a user chooses to add an employee, then the system will prompt to enter the employee’s first name, last name, role, and the employee's manager. The system will generate the request and the employee is added to the database.

![image](https://user-images.githubusercontent.com/120603153/232170401-bbcdb367-dc08-4cf6-a50e-05b7a753f209.png)

9. When a user chooses to update an employee role, then the system will prompt to select an employee to update and their new role. The system will generate the request and this information is updated in the database.

![image](https://user-images.githubusercontent.com/120603153/232170515-b7d7aa2d-dd86-4506-9138-e3088963eee3.png)

10. When a user chooses to update the employee Manager, then the system will prompt to select the employee to update and the manager for that employee. The system will generate the request and a new manager for that employee has been updated in the database.

![image](https://user-images.githubusercontent.com/120603153/232170594-8d28fc14-8048-4274-9183-a33b78021ed3.png)

11. When a user chooses to view the employees by manager, then the system will prompt to select the manager to view their employees.

![image](https://user-images.githubusercontent.com/120603153/232170767-d57032ea-8e34-4a9a-a000-985ad6f61a66.png)

12. When a user chooses to view employees by department, then the system will prompt to select the department to view its employees.

 ![image](https://user-images.githubusercontent.com/120603153/232170908-9de3bfcc-398d-4f3d-9b3d-a3fe3a73f444.png)

13. When a user chooses to delete departments, then the system will prompt to select the department to delete, then it will prompt again to confirm to delete the chosen department. Once the systems deletes the department, it will notify the user that the department deleted successfuly.

![image](https://user-images.githubusercontent.com/120603153/232171091-b93fd8c1-c081-4ee1-bb24-6027466378ed.png)

![image](https://user-images.githubusercontent.com/120603153/232171126-838849bc-b1ad-4738-adf1-e0856397f7b9.png)

14. When a user chooses to delete a role, then the system will prompt to select the role to delete. Once the system finds it in the database, it will proceed on deletion and will notify the user that the role deleted successfuly.

![image](https://user-images.githubusercontent.com/120603153/232171288-48b2c1a3-a43b-4b88-afa8-4b9699d2a538.png)

15. When a user chooses to delete an employee, then the system will prompt to select the employee to delete. Once it's deleted, the system will notify the user that the employee deleted successfuly.

![image](https://user-images.githubusercontent.com/120603153/232171464-c140ba4f-4908-45ca-b5f8-5e530bcd1a39.png)

16. When a user chooses to view the total utilized budget of a department, in other words, the combined salaries of all employees in that department, then the system will prompt to select the department to view its budget.

![image](https://user-images.githubusercontent.com/120603153/232171571-b859b0e7-433c-40d7-9243-2870aae348bc.png)

# Walkthrough Video
https://github.com/harold-fv/Employee-Tracker/blob/main/Employee-Tracker-Video-Demo.gif

• The included image demonstrates the application functionality:

The Employee Tracker program is a program that allows the user to easily view and manage the company's employee database. An application that helps track the employee records such as the names, title, department, salary and the employee's manager in order to simply organize and plan the business.
