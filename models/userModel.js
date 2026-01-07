const db = require("./db");

exports.findUserByUsername = (username, callback) => {
  db.query("SELECT * FROM users WHERE username=?", [username], callback);
};

exports.createUser = (user, callback) => {
  db.query(
    "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
    [user.username, user.password, user.role],
    callback
  );
};
