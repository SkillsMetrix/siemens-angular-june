const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 3000;
const SECRET_KEY = "dsdsd00909";
app.use(cors());
app.use(bodyparser.json())

// mocking the dummy users
const users = [
  { id: 1, username: "user1", password: "pass123" },
  { id: 2, username: "user2", password: "pass1234" },
];
// create login endpoints
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    // create a token
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({
      message: "Authentication Sucessfull",
      token,
    });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
});
// access protected route
app.get("/api/protected", authenticationUser, (req, res) => {
  res.json({ message: "This is protected Data", user: req.user });
});

// middleware to intercept the incomming request
function authenticationUser(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req, (user = user);
    next();
  });
}
app.listen(PORT, () => {
  console.log("server is ready");
});
