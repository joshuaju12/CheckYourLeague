const {findRanked} = require('../models');

const getRanked = (req, res) => {
  findRanked({accountId: req.query.accountId}, (response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response.data);
  })
}

module.exports = getRanked;