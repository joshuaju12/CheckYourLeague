const axios = require('axios');

exports.findAccount = (data, cb) => {
  axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${data.summonerName}/${data.tagline}`, {params: {"api_key": process.env.RIOT_API_KEY}})
    .then(cb)
    .catch((err) => {
      console.log('error retrieving account info, ');
    })
};

exports.findSummoner = (data, cb) => {
  axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${data.puuid}`, {params: {"api_key": process.env.RIOT_API_KEY}})
    .then(cb)
    .catch((err) => {
      console.log('error retrieving summoner', err);
    });
};

exports.findAllMatches = (data, cb) => {
  axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${data.puuid}/ids`, {params: {"api_key": process.env.RIOT_API_KEY, "start": 0, "count": 5}})
    .then(cb)
    .catch((err) => {
      console.log('error retrieving all matches');
    });
};

exports.findMatch = (data, cb) => {
  axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${data.matchId}`, {params: {"api_key": process.env.RIOT_API_KEY}})
    .then(cb)
    .catch((err) => {
      console.log('error retrieving match');
    })
};

exports.findChampionMastery = (data, cb) => {
  axios.get(`https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${data.puuid}/by-champion/${data.championId}`, {params: {"api_key": process.env.RIOT_API_KEY}})
    .then(cb)
    .catch((err) => {
      console.log('error retrieving mastery points');
    })
}

exports.findRanked = (data, cb) => {
  axios.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${data.accountId}`, {params: {"api_key": process.env.RIOT_API_KEY}})
    .then(cb)
    .catch((err) => {
      console.log('error retrieving ranked stats');
    })
}