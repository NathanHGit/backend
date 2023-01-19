const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.text());

var corsOptions = {
  origin: ["http://localhost:4200"],
};

app.use(cors(corsOptions));

app.listen(8000, () => {
  console.log("Server is started and listening.");
});

app.get("/", function (request, response) {
  response.send("Hello world!");
});

require("./service")(app);
