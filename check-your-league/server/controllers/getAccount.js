const {findAccount} = require('../models');

const getAccount = (req, res) => {
  findAccount({summonerName: req.query.summonerName, tagline: req.query.tagline}, (response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response.data);
  });
}

module.exports = getAccount;