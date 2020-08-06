const logo = require ("asciiart-logo");
const connection = require ("./config/connection.js");
const inquirer = require("inquirer");

function init () {
    const logoText = logo ({ name:"Employee Manager"}).render();
    console.log(logoText);
    inquirer.prompt([
        {
        type: "list",
        name:"choice",
        message:"What would you like to do?",
        choices: [
            {
                name: "View all departments",
                value: "VIEW",
            },
            {
                name:"View All Roles",
                value:"VIEW_ROLES",
            }
        ],
    },
])
.then((response) => {
        console.log(response);
        if(response.choice === "VIEW") {
            orm.viewAll();
        }else if (response.choice === VIEW_ROLES) {
            orm.viewRoles();
        }
    
        
    });
}
const orm ={
    viewAll: function () {
        connection.query("SELECT * FROM employee", (err, allEmployees) => {
            if(err) throw err;
            console.table(allEmployees);
            // init();
        });
        
    },
    viewRoles: function () {
        connection.query("SELECT * FROM department", (err, allDepartments) => {
            if(err) throw err;
            console.table(allDepartments);
            // init();
        });

    }
}
init()

connection.query("SELECT * FROM department", (err, data) => {
    if(err) throw err;
    console.log(data);
});