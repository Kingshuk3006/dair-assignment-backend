var LocalStrategy = require("passport-local");
var passport = require("passport");
const userModel = require("../Models/userSchema");

exports.initializePassport = (passport) => {
  passport.use(
    new LocalStrategy(function verify(username, password, cb) {
      try {
        const user = userModel.findOne({ username: username });

        if (!user) {
          return cb(null, false);
        }

        if (user && user?.password !== password) {
          return cb(null, false);
        }

        return cb(null, user);
      } catch (err) {
        return cb(err, false);
      }
    })
  );

  passport.serializeUser(function (user, cb) {
    cb(null, user.id);
  });
  
  passport.deserializeUser(async (id, cb) => {
    try {
      const user = await userModel.findById(id);
      cb(null, user);
    } catch (error) {
      cb(error, false);
    }
  });
};


