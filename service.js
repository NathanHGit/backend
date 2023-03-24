const fs = require('fs');
let data = require('./data.json');

function saveData() {
    fs.writeFile('data.json', JSON.stringify(data), (err) => {
        if (err) {
            throw err;
        }
        console.log('JSON data is saved.');
    });
}

module.exports = function (app) {
    app.get('/history', function (request, response) {
        response.send(data.history);
    });

    app.post('/history/save', function (request, response) {
        data.history = JSON.parse(request.body);
        saveData();
        response.send(true);
    });

    app.get('/bookmarks', function (request, response) {
        response.send(data.bookmarks);
    });

    app.post('/bookmarks/save', function (request, response) {
        data.bookmarks = JSON.parse(request.body);
        saveData();
        response.send(true);
    });
};
