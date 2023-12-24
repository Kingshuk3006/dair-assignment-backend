const express = require("express");
const getUserbyId = require("../controller/userController/getUserById");
const router = express.Router();

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await getUserbyId(userId);
    if (user) {
      res.send(user);
      res.status(200);
    } else {
      res.status(200).send(user).statusMessage("User not found");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router