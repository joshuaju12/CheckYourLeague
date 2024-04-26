const {findChampionMastery} = require('../models');

const getMasteryPoints = (req, res) => {
  findChampionMastery({championId: req.query.championId, puuid: req.query.puuid}, (response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response.data);
  })
}

module.exports = getMasteryPoints;