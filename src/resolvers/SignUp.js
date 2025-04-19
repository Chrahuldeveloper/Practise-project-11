const connection = require("../../dbconfig/ConnectDb");
const jwt = require("jsonwebtoken");
const SignUp = (parent, args) => {
  const { name, email, password } = args;
  var sql = "INSERT INTO users (name, email, password) VALUES (?,?,?)";
  connection.query(sql, [name, email, password], function (err, result) {
    if (err) throw err;
    console.log(result);
  });

 const token =  jwt.sign({ foo: "bar" }, "por3jgpemg9erjg", { expiresIn: "1h" });

  return token;
};

module.exports = SignUp;
