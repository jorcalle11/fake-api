const casual = require('casual');

casual.define('entity_user', () => {
  return {
    id: casual.integer(from = 1, to= 100),
    firstName: casual.first_name,
    middleName: casual.first_name,
    lastName: casual.last_name,
    userName: casual.username,
    role: casual.word,
    email: casual.email,
    applications : {
      humanResources: casual.boolean,
      education: true,
      credentialing: casual.boolean
    }
  }
});

module.exports = casual.entity_user;
