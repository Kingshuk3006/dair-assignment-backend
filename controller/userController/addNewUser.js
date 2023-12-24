const userModel = require("../../Models/userSchema");

const createUser = async (username, password, name) => {
  try {
    userModel.create({
      username,
      password,
      name,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = createUser;
