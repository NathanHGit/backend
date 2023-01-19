const fs = require("fs");
let data = require("./data.json");

function saveData() {
  fs.writeFile("data.json", JSON.stringify(data), (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });
}

module.exports = function (app) {
  app.get("/history", function (request, response) {
    response.send(data.history);
  });

  app.post("/history/add", function (request, response) {
    data.history.unshift(request.body);
    saveData();
    response.send(true);
  });

  app.get("/bookmarks", function (request, response) {
    response.send(data.bookmarks);
  });

  app.post("/bookmarks/add", function (request, response) {
    data.bookmarks.unshift(request.body);
    saveData();
    response.send(true);
  });

  app.post("/bookmarks/remove", function (request, response) {
    data.bookmarks = data.bookmarks.filter((v) => v !== request.body);
    saveData();
    response.send(true);
  });
};
