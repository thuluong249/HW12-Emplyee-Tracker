INSERT INTO department (name) 
VALUES ("Sale");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("HR");
INSERT INTO department (name)
VALUES ("Admin");
INSERT INTO department (name)
VALUES ("Technical");

INSERT INTO role (title, salary, department_id) 
VALUES ("Sale Lead", 100000, 901);
INSERT INTO role (id, title, salary, department_id)
VALUES ("Lead Engineer", 150000, 801);
INSERT INTO role (id, title, salary, department_id)
VALUES ("Accountant Manager", 125000, 701);
INSERT INTO role (id, title, salary, department_id)
VALUES ("HR Manager", 90000, 601);
INSERT INTO role (id, title, salary, department_id)
VALUES ("Admin Manager", 80000, 502);
INSERT INTO role (id, title, salary, department_id)
VALUES ("Technical Manager", 110000, 401);


INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ("Miamy", "Mylan", 901, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 801, 308, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 701, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Topik", 601, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Manila", "Brown", 502, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Kenydy", 401, 6);
