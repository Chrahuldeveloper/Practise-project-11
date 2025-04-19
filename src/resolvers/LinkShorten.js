const connection = require("../../dbconfig/ConnectDb");
const crypto = require("crypto");

const LinkShorten = async (parent, args) => {
  try {
    const { url } = args;

    const urlId = crypto.randomBytes(6).toString("hex");

    const shortUrl = `https://shaw.ty/${urlId}`;

    console.log(url, shortUrl);

    const sql = "INSERT INTO urls (url, shorturl) VALUES (?,?)";

     await connection.promise().execute(sql, [url, shortUrl]);

    return shortUrl;
  } catch (error) {
    console.log(error);
  }
};

module.exports = LinkShorten;
