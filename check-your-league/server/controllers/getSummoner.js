const {findSummoner} = require('../models');

const getSummoner = (req, res) => {
  findSummoner({puuid: req.query.puuid}, (response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response.data);
  })
};

module.exports = getSummoner;