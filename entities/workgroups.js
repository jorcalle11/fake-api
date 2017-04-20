const casual = require('casual');
const { cantData } = require('../config');
const workgroups = [];

casual.define('entity_workgroup', id => {
  return {
    id,
    name: casual.title
  };
});

for (let i = cantData.workgroups.start; i <= cantData.workgroups.end; i++) {
  workgroups.push(casual.entity_workgroup(i))
}

module.exports = workgroups;