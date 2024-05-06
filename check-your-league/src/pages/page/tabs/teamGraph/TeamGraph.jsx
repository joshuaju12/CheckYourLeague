import './teamGraph.css';
const {idToChampion} = require('./idToChampion.js');

function TeamGraph({matchId, matchData}) {
  console.log(matchData);
  console.log(idToChampion);
  const teamOneData = matchData.info.teams[0];
  const teamTwoData = matchData.info.teams[1];
  const teamOne = {
    kda: {kills: 0, deaths: 0, assists: 0},
    gold: 0,
    towers: teamOneData.objectives.tower.kills,
    voidGrubs: teamOneData.objectives.horde.kills,
    heralds: teamOneData.objectives.riftHerald.kills,
    dragons: teamOneData.objectives.dragon.kills,
    elders: 0,
    barons: teamOneData.objectives.baron.kills,
    bans: [],
    damage: [],
  };
  const teamTwo = {
    kda: {kills: 0, deaths: 0, assists: 0},
    gold: 0,
    towers: 0,
    voidGrubs: 0,
    heralds: 0,
    dragons: 0,
    elders: 0,
    barons: 0,
    bans: [],
    damage: [],
  };
  //need var for kda, gold, towers, void grubs, heralds, dragons, elders, barons, bans.
  //need var for damage
  return (
    <div>
      TeamGraph
    </div>
  )
}

export default TeamGraph;