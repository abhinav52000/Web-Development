import express from "express";
import { get } from "https";

const app = express();

app.get("/", function (_req, res) {
  const url = "https://api.chucknorris.io/jokes/random";
  get(url, function (response) {
    // console.log(response.statusCode);

    response.on("data", function (data) {
      const geetaSlock = JSON.parse(data);
      console.log(geetaSlock);
      // in case you have only one thing to send
      // res.send(
      //   "<p>" +
      //     geetaSlock.value +
      //     "</p>" +
      //     "<img src =https://picsum.photos/seed/picsum/200/300>"
      // );
      // In case you have multiple lines to send
      res.write("<p>" + geetaSlock.created_at + "</p>");
      res.write("<h1>" + geetaSlock.value + "</h1>");
      res.write("<img src = 'https://picsum.photos/seed/picsum/1000/1000'>");
      res.end();
    });
  });
  //   res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("ServerStarted at port 3000");
});
