const {findMasteryPoints} = require('../models');

const getMasteryPoints = (req, res) => {
  findMasteryPoints({championId: req.query.championId, puuid: req.query.puuid}, (response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response.data);
  })
}

module.exports = getMasteryPoints;