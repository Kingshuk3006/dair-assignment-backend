const userModel = require("../../Models/userSchema");

const getUserbyId = async (id) => {
  try {
    const user = await userModel.findById(id);
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUserbyId
