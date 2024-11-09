const {findAllMatches} = require('../models');

const getAllMatches = (req, res) => {
  findAllMatches({puuid: req.query.puuid, start: req.query.start, count: req.query.count}, (response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response.data);
  })
};

module.exports = getAllMatches;