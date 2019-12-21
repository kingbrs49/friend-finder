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
        var differenceTotal = 100;

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < userResponse.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponse[j]);
            }
            if (diff < differenceTotal) {
                differenceTotal = diff;
                bestMatchName = friends[i].name;
                bestMatchImage = friends[i].photo;
            }
        }
    });
}

friends.push(userInput);
