const User = require("../user.schema.js");

async function getUserByEmailProvider(email) {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    return error;
  }
}

module.exports = getUserByEmailProvider;
