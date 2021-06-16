INSERT INTO department (id, name) 
VALUES (1, "Sale");
INSERT INTO department (name)
VALUES (2, "Engineering");
INSERT INTO department (name)
VALUES (3, "Finance");

INSERT INTO role (id, title, salary, department_id) 
VALUES (1, "Sale Lead", 100000, 101);
INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Lead Engineer", 150000, 201);
INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Accountant", 125000, 301);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) 
VALUES (4, "Miamy", "Mylan", 101, 109);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "John", "Doe", 201, 108);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Mike", "Chan", 301, 107);
