const casual = require('casual');
const { cantData } = require('../config');
const employees = [];

casual.define('entity_employee', id => {
  return {
    id,
    firstName: casual.first_name,
    middleName: casual.first_name,
    lastName: casual.last_name,
    employeeId: casual.integer(from = 1, to = 1000),
    status: casual.boolean,
    email: casual.email,
    licenses: []
  };
});

for (let i = cantData.employees.start; i <= cantData.employees.end; i++) {
  employees.push(casual.entity_employee(i));

  for (let j = 0; j <= 2; j++) {
    employees[i].licenses.push(casual.entity_license);
  }
}

module.exports = employees;
