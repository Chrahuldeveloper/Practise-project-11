const connection = require("../../dbconfig/ConnectDb");
const jwt = require("jsonwebtoken");
const SignUp = async (parent, args) => {
  const { name, email, password } = args;
  var sql = "INSERT INTO users (name, email, password) VALUES (?,?,?)";

  try {
    await connection.promise().execute(sql, [name, email, password]);

    const token = jwt.sign({ foo: "bar" }, "por3jgpemg9erjg", {
      expiresIn: "1h",
    });

    return token;
  } catch (error) {
    console.log(error);
  }
};

const SignIn = async (parent, args) => {
  const { email, password } = args;

  try {
    var sql = "SELECT * FROM users WHERE email  = ? AND password = ?";
    const [results] = await connection
      .promise()
      .execute(sql, [email, password]);

    if (results.length === 0) {
      throw new Error("Invalid credentials");
    }

    const user = {
      id: results[0].id,
      name: results[0].name,
      email: results[0].email,
      password: results[0].password,
    };

    const token = jwt.sign({ foo: user.password }, "por3jgpemg9erjg", {
      expiresIn: "1h",
    });

    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { SignUp, SignIn };
