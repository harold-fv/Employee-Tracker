USE employee_tracker_db;

INSERT INTO department (name)
VALUES ("Human Resources"), ("Engineering"), ("Sales"), ("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("HR Manager", 90000, 1), ("Software Engineer", 78000, 2), ("Sales Manager", 65000, 3), ("Marketing Specialist", 48000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Wall", 1, 1), ("Joe", "Mcline", 2, 1), ("Sheena", "Johnson", 3, 1), ("Sara", "Yo", 4, 1);