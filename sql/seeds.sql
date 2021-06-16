INSERT INTO department (id, name) 
VALUES (100, "Sale");
INSERT INTO department (name)
VALUES (200, "Engineering");
INSERT INTO department (name)
VALUES (300, "Finance");
INSERT INTO department (name)
VALUES (400, "HR");
INSERT INTO department (name)
VALUES (500, "Admin");
INSERT INTO department (name)
VALUES (600, "Technical");

INSERT INTO role (id, title, salary, department_id) 
VALUES (111, "Sale Lead", 100000, 901);
INSERT INTO role (id, title, salary, department_id)
VALUES (222, "Lead Engineer", 150000, 801);
INSERT INTO role (id, title, salary, department_id)
VALUES (333, "Accountant Manager", 125000, 701);
INSERT INTO role (id, title, salary, department_id)
VALUES (444, "HR Manager", 90000, 601);
INSERT INTO role (id, title, salary, department_id)
VALUES (555, "Admin Manager", 80000, 502);
INSERT INTO role (id, title, salary, department_id)
VALUES (666, "Technical Manager", 110000, 401);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id) 
VALUES (456, "Miamy", "Mylan", 901, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (567, "John", "Doe", 801, 308);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (678, "Mike", "Chan", 701, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (789, "Kevin", "Topik", 601, 506);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (890, "Manila", "Brown", 502, 605);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (910, "Sarah", "Kenydy", 401, 704);
