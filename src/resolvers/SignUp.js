const connection = require("../../dbconfig/ConnectDb");
const jwt = require("jsonwebtoken");
const SignUp = (parent, args) => {
  const { name, email, password } = args;
  var sql = "INSERT INTO users (name, email, password) VALUES (?,?,?)";
  connection.query(sql, [name, email, password], function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  const token = jwt.sign({ foo: "bar" }, "por3jgpemg9erjg", {
    expiresIn: "1h",
  });

  return token;
};

const SignIn = (parent, args) => {
  const { email, password } = args;

  var sql = "SELECT * FROM users WHERE email  = ? AND password = ?";

  connection.execute(sql, [email, password], (err, res) => {
    if (err) {
      return err;
    }

    console.log(res[0]);
    return res[0];
  });
};

module.exports = { SignUp, SignIn };
