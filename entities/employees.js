const casual = require('casual');
const licenses = require('./licenses');
const employees = [];

casual.define('entity_employee', id => {
  return {
    id,
    firstName: casual.first_name,
    middleName: casual.first_name,
    lastName: casual.last_name,
    employeeId: casual.integer(from = 1, to = 1000),
    status: casual.random_element(['active', 'inactive']),
    email: casual.email,
    licenses: licenses.slice(casual.integer(from = 0, to = 5),casual.integer(from = 5, to = 10))
  };
});

for (let i = 0; i < 100; i++) {
  employees.push(casual.entity_employee(i));
}

module.exports = employees;
