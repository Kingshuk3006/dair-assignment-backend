const userModel = require("../../Models/userSchema");

const createUser = async (id, username, password, name) => {
  try {
    userModel.create({
      _id: id,
      username,
      password,
      name,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = createUser;
