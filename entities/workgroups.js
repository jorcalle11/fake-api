const casual = require('casual');
const workgroups = [];

casual.define('entity_workgroup', id => {
  return {
    id,
    name: casual.title
  };
});

for (let i = 0; i < 20; i++) {
  workgroups.push(casual.entity_workgroup(i));
}

module.exports = workgroups;
