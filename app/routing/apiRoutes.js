var path = require('path');

var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var userInput = req.body;
        var userResponse = userInput.scores

        var bestMatchName = '';
        var bestMatchImage = '';
    });
}

friends.push(userInput);
