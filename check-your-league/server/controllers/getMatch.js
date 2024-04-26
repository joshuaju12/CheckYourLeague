const {findMatch} = require('../models');

const getMatch = (req, res) => {
  findMatch({matchId: req.query.matchId}, (response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response.data);
  })
}

module.exports = getMatch;