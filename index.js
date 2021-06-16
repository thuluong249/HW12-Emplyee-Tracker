const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Jtn2491987",
  database: "employeeDB",
});

const start = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Department",
        "View Role",
        "View Employees",
        "Remove Employees",
        "Update Employee Roles",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "View Department":
          viewDepartment();
          break;

        case "View Role":
          viewRole();
          break;

        case "View Employees":
          viewEmployee();
          break;

        case "Remove Employees":
          removeEmployee();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "Exit":
          connection.end();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the department id?",
      },
      {
        name: "name",
        type: "input",
        message: "What is the department name?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO department SET ?",
        {
          id: answer.id,
          name: answer.name,
        },
        (err) => {
          if (err) throw err;
          console.log("New department was successfully added!");
          start();
        }
      );
    });
};

const viewDepartment = () => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the role id?",
      },
      {
        name: "title",
        type: "input",
        message: "What is the role title?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the role salary?",
      },
      {
        name: "depId",
        type: "input",
        message: "What is the department id?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO role SET ?",
        {
          id: answer.id,
          title: answer.title,
          salary: answer.salary,
          department_id: answer.depId,
        },
        (err) => {
          if (err) throw err;
          console.log("New role was successfully added!");

          start();
        }
      );
    });
};

const viewRole = () => {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the employee id?",
      },
      {
        name: "firstName",
        type: "input",
        message: "What is the employee first name?",
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the employee last name?",
      },
      {
        name: "roleID",
        type: "input",
        message: "What is the role ID?",
      },
      {
        name: "managerID",
        type: "input",
        message: "What is the manager ID?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          id: answer.id,
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleID,
          manager_id: answer.managerID,
        },
        (err) => {
          if (err) throw err;
          console.log("New employee was successfully added!");
          start();
        }
      );
    });
};

const viewEmployee = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
};

const removeEmployee = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the employee id you want to remove?",
      },
      {
        name: "firstName",
        type: "input",
        message: "What is the first name of that person?",
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the last name of that person?",
      },
      {
        name: "roleID",
        type: "input",
        message: "What is the role ID?",
      },
      {
        name: "managerID",
        type: "input",
        message: "What is the manager ID?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          id: answer.id,
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleID,
          manager_id: answer.managerID,
        },
        (err) => {
          if (err) throw err;
          console.log("The employee was successfully removed!");
          start();
        }
      );
    });
};

const updateEmployeeRole = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the employee id?",
      },
      {
        name: "firstName",
        type: "input",
        message: "What is the employee first name?",
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the employee last name?",
      },
      {
        name: "roleID",
        type: "input",
        message: "What is the role ID?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO role SET ?",
        {
          id: answer.id,
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleID,
        },
        (err) => {
          if (err) throw err;
          console.log("New role was successfully added!");

          start();
        }
      );
    });
};

// connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  // console.log("Success!")
  start();
});
