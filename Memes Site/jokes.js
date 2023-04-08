const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("BotBirthMonth", "March");
encodedParams.append("BotBirthPlace", "India");
encodedParams.append("BotFavBook", "Harry Potter");
encodedParams.append("BotGender", "Male");
encodedParams.append("BotBirthDate", "1");
encodedParams.append("BotBirthYear", "2020");
encodedParams.append("BotMaster", "Naman Sharma");
encodedParams.append("BotFavActor", "Jim Carrey");
encodedParams.append("BotLocation", "India");
encodedParams.append("BotBuild", "Public");
encodedParams.append("BotFavBand", "1D");
encodedParams.append("BotFavActress", "Emma Watson");
encodedParams.append("BotFavColor", "Black");
encodedParams.append("BotFavArtist", "Eminem");
encodedParams.append("BotName", "Black Sheep");
encodedParams.append("BotAge", "19");
encodedParams.append("BotCompany", "PGamerX");
encodedParams.append("BotEmail", "admin@pgamerx.com");

const options = {
  method: "POST",
  url: "https://random-stuff-api.p.rapidapi.com/ai/customize",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    Authorization: "q9Oh7Lg7J0Hd",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "random-stuff-api.p.rapidapi.com",
  },
  data: encodedParams,
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
