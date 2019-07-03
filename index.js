const express = require("express");
const app = express();
var mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

app.post("/func/submit", (req, res) => {
  var con = mysql.createConnection({
    host: "darkknight.cratae9ipzdd.ap-southeast-1.rds.amazonaws.com",
    user: "darkknight",
    password: "darkknight",
    database: "darkknight"
  });
  con.connect(function(err) {
    if (err) {
      con.end();
      return res.send(
        "后台错误，该错误可能和数据库连接有关，请重新扫描二维码尝试"
      );
    }
    console.log("Connected!");
    var sql =
      "INSERT INTO darkknight (name, phone, people, grade, abroad, country, toefl, question) VALUES (" +
      "'" +
      req.body.name +
      "'," +
      "'" +
      req.body.phone +
      "'," +
      "'" +
      req.body.people +
      "'," +
      "'" +
      req.body.grade +
      "'," +
      "'" +
      req.body.abroad +
      "'," +
      "'" +
      req.body.country +
      "'," +
      "'" +
      req.body.toefl +
      "'," +
      "'" +
      req.body.question +
      "'" +
      ")";
    con.query(sql, function(err, result) {
      if (err) {
        con.end();
        return res.send("您输入了乱码，请正确填写报名表");
      }
      console.log("1 record inserted");
      res.send("恭喜你，报名成功！");
      con.end();
    });
  });
});

app.get("/func/admin/monitor", (req, res) => {
  var con = mysql.createConnection({
    host: "darkknight.cratae9ipzdd.ap-southeast-1.rds.amazonaws.com",
    user: "darkknight",
    password: "darkknight",
    database: "darkknight"
  });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM darkknight", function(err, result, fields) {
      if (err) {
        con.end();
        return res.send("admin error");
      }
      res.send(result);
      con.end();
    });
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
