const express = require("express");
const router = express.Router();
const checkUserExist = require("../controller/userController/checkUserExist");
const createUser = require("../controller/userController/addNewUser");
const passport = require("passport");
flash = require('connect-flash');

router.post("/signup", async (req, res) => {
  try {
    const { username, password, name } = req.body;
    const user = await checkUserExist(username, password);
    if (!user) {
      await createUser(username, password, name);
      res.status(200).json({
        message: "User Created Successfully",
      });
    } else {
      res.status(200).json({
        message: "Usr already exist",
      });
    }
  } catch (err) {
    res.status(500).json({ message: "There was some error" });
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// router.post("/logout", );

module.exports = router;
