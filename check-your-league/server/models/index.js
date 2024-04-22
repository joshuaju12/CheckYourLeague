const axios = require('axios');

exports.findAccount = (data, cb) => {
  axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${data.summonerName}/${data.tagline}`, {params: {"api_key" : process.env.RIOT_API_KEY}})
    .then(cb)
    .catch((err) => {
      console.log('error retrieving account info, ', err);
    })
}