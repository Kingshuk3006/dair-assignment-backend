const express = require("express");
const router = express.Router();
const checkUserExist = require("../controller/userController/checkUserExist");
const createUser = require("../controller/userController/addNewUser");
const passport = require("passport");
flash = require("connect-flash");

router.post("/signup", async (req, res) => {
  try {
    const { id, username, password, name } = req.body;
    const user = await checkUserExist(username, password);
    if (!user) {
      await createUser(id, username, password, name);
      res.status(200).send({
        message: "User Created Successfully",
      });
    } else {
      res.status(500).json({
        message: "User already exist",
      });
    }
  } catch (err) {
    res.status(500).json({ message: "There was some error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userData = await checkUserExist(username, password);
    if(userData){
      res.status(200).send(userData)
    }else{
      res.status(404).json({
        message:"User not found"
      })
    }
  } catch (error) {
    console.log(error)
  }
});


// router.post("/logout", );

module.exports = router;
