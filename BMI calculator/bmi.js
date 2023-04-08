const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app
  .get("/", function name(req, res) {
    res.sendFile(__dirname + "/index.html");
  })
  .post("/", function (req, res) {
    var bmiValue =
      Number(req.body.weight) / Number(Math.pow(Number(req.body.height), 2));
    res.send("Your BMI value Is: " + bmiValue);
  });

app.listen(5000, function () {
  console.log("Server started at 5000");
});
