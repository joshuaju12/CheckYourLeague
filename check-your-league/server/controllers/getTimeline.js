const {findTimeline} = require('../models');

const getTimeline = (req, res) => {
  findTimeline({matchId: req.query.matchId}, (response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response.data);
  });
};

module.exports = getTimeline;