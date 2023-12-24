const bodyParser = require("body-parser");
const express = require("express");
var expressSession = require("express-session");
const connectDb = require("./config/db.config");
const { initializePassport } = require("./config/passport.config");
const passport = require("passport");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user")
const cors = require("cors");

const app = express();
const PORT = 8000;
connectDb();
initializePassport(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors(
  {
    origin:'*',
  }
));
app.use(
  expressSession({ secret: "secret", resave: false, saveUninitialized: false })
);
app.use(passport.session());


app.use("/auth", authRoutes);
app.use("/user", userRoutes);


app.get("/", (req, res) => {
  res.send("This is Home route");
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
