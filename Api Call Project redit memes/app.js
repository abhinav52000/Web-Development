import express from "express";
import { get } from "https";

const app = express();

app.get("/", function (_req, res) {
  const url = "https://api.imgflip.com/get_memes";
  get(url, function (response) {
    let memeData = "";
    let memeDecodedData;

    response.on("data", function (data) {
      memeData += data;
    });

    response.on("end", function () {
      memeDecodedData = JSON.parse(memeData);
      for (var i = 0; i < memeDecodedData.data.memes.length; ++i) {
        res.write(
          "<div style = 'margin: 0 auto; text-align: center;'>  <h2 >" +
            memeDecodedData.data.memes[i].name +
            "</h2>  <img src='" +
            memeDecodedData.data.memes[i].url +
            "'style = 'width: 500px; height: 500px; margin-bottom: 50px;' alt='Image '></div > "
        );
      }
      res.end();
    });
  });
});

app.listen(3000, function () {
  console.log("ServerStarted at port 3000");
});
