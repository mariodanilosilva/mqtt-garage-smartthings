const axios = require("axios");

const server = {
  name: "Server",
  url: "http://localhost:4001"
};

setInterval(async function () {

  await axios({
    url: server.url,
    method: "get"
  }).then((response) => {
    console.log(response.data);
  });

}, 2000);