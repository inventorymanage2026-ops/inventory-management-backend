const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  User.createUser(
    { username, password: hashedPassword, role },
    () => res.json({ message: "User registered successfully" })
  );
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findUserByUsername(username, (err, results) => {
    if (!results.length) {
      return res.status(401).json({ message: "Invalid username" });
    }

    const user = results[0];
    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, role: user.role });
  });
};
