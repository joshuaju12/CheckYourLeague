const {findAllMatches} = require('../models');

const getAllMatches = (req, res) => {
  findAllMatches({puuid: req.query.puuid}, (response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response.data);
  })
};

module.exports = getAllMatches;