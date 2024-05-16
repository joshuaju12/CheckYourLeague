import axios from 'axios';
import './teamGraph.css';
import {useEffect, useState} from 'react';
import TeamDamage from './TeamDamage.jsx';
const {idToChampion} = require('./idToChampion.js');

function TeamGraph({matchId, matchData}) {
  // console.log(matchData);
  const [data, setData] = useState({});
  const [teamOneDragons, setTeamOneDragons] = useState({});
  const [teamTwoDragons, setTeamTwoDragons] = useState({});
  const teamOneData = matchData.info.teams[0];
  const teamTwoData = matchData.info.teams[1];
  const teamOne = {
    kda: {kills: 0, deaths: 0, assists: 0},
    gold: 0,
    towers: teamOneData.objectives.tower.kills,
    voidGrubs: teamOneData.objectives.horde.kills,
    heralds: teamOneData.objectives.riftHerald.kills,
    dragons: [],
    elders: 0,
    barons: teamOneData.objectives.baron.kills,
    bans: [],
    damage: [],
  };
  const teamTwo = {
    kda: {kills: 0, deaths: 0, assists: 0},
    gold: 0,
    towers: teamTwoData.objectives.tower.kills,
    voidGrubs: teamTwoData.objectives.horde.kills,
    heralds: teamTwoData.objectives.riftHerald.kills,
    dragons: [],
    elders: 0,
    barons: teamTwoData.objectives.baron.kills,
    bans: [],
    damage: [],
  };

  const getBans = () => {
    for (let i = 0; i < teamOneData.bans.length; i++) {
      if (!idToChampion[teamOneData.bans[i].championId]) {
        teamOne.bans.push("None");
      } else {
        teamOne.bans.push(idToChampion[teamOneData.bans[i].championId]);
      };
      if (!idToChampion[teamTwoData.bans[i].championId]) {
        teamTwo.bans.push("None");
      } else {
        teamTwo.bans.push(idToChampion[teamTwoData.bans[i].championId]);
      };
    };
  };

  const getCombatStats = () => {
    for (let i = 0; i < matchData.info.participants.length; i++) {
      const player = matchData.info.participants[i];
      if (i < 5) {
        teamOne.kda.kills += player.kills;
        teamOne.kda.deaths += player.deaths;
        teamOne.kda.assists += player.assists;
        teamOne.gold += player.goldEarned;
        teamOne.damage.push({championName: player.championName, playerName: player.riotIdGameName, damage: player.totalDamageDealtToChampions});
      } else {
        teamTwo.kda.kills += player.kills;
        teamTwo.kda.deaths += player.deaths;
        teamTwo.kda.assists += player.assists;
        teamTwo.gold += player.goldEarned;
        teamTwo.damage.push({championName: player.championName, playerName: player.riotIdGameName, damage: player.totalDamageDealtToChampions});
      };
    };
  };

  const getTimeline = () => {
    axios.get('http://localhost:3001/timeline', {params: {matchId: matchId}})
    .then((timeline) => {
      const timelineData = timeline.data.info.frames;
      const matchData = {set: true, data: timelineData};
      const teamOneDragonArray = [];
      const teamTwoDragonArray = [];
      let teamOneElders = 0;
      let teamTwoElders = 0;

      for (let i = 0; i < timelineData.length; i++) {
        for (let j = 0; j < timelineData[i].events.length; j++) {
          if (timelineData[i].events[j].type === "ELITE_MONSTER_KILL" && timelineData[i].events[j].monsterType === "DRAGON") {
            if (timelineData[i].events[j].killerTeamId === 100) {
              if (timelineData[i].events[j].monsterSubType === "ELDER_DRAGON") {
                teamOneElders++;
              } else {
                teamOneDragonArray.push(timelineData[i].events[j].monsterSubType);
              };
            };
            if (timelineData[i].events[j].killerTeamId === 200) {
              if (timelineData[i].events[j].monsterSubType === "ELDER_DRAGON") {
                teamTwoElders++;
              } else {
                teamTwoDragonArray.push(timelineData[i].events[j].monsterSubType);
              };
            };
          };
        };
      };

      setTeamOneDragons({dragons: teamOneDragonArray, elders: teamOneElders});
      setTeamTwoDragons({dragons: teamTwoDragonArray, elders: teamTwoElders});
      setData(matchData);
    })
  };

  getBans();
  getCombatStats();

  useEffect(() => {
    getTimeline();
  }, [])

  return (
    <div>
      {data.set ?
        <div>
          <div className="teamGraphTeamOutcome">
            <div>Blue Team</div>
            <div>Red Team</div>
          </div>
          <div className="teamGraphOverallContainer">
            <div className="teamGraphGameStatsContainer">
              <div className="teamGraphGameStatsRowContainer">
                <div>GAME STATS</div>
              </div>
              <div className="teamGraphGameStatsRowContainer">
                <div className="teamGraphValueWrapperLeft">
                  <div className="teamGraphLeft">{teamOne.kda.kills}/{teamOne.kda.deaths}/{teamOne.kda.assists}</div>
                </div>
                <div className="teamGraphTitle">KDA</div>
                <div className="teamGraphValueWrapperRight">
                  <div className="teamGraphRight">{teamTwo.kda.kills}/{teamTwo.kda.deaths}/{teamTwo.kda.assists}</div>
                </div>
              </div>
              <div className="teamGraphGameStatsRowContainer">
                <div className="teamGraphValueWrapperLeft">
                  <div className="teamGraphLeft">{(teamOne.gold / 1000).toFixed(1)}K</div>
                </div>
                <div className="teamGraphTitle">GOLD</div>
                <div className="teamGraphValueWrapperRight">
                  <div className="teamGraphRight">{(teamTwo.gold / 1000).toFixed(1)}K</div>
                </div>
              </div>
              <div className="teamGraphGameStatsRowContainer">
                <div className="teamGraphValueWrapperLeft">
                  <div className="teamGraphLeft">{teamOne.towers}</div>
                </div>
                <div className="teamGraphTitle">TOWERS</div>
                <div className="teamGraphValueWrapperRight">
                  <div className="teamGraphRight">{teamTwo.towers}</div>
                </div>
              </div>
              <div className="teamGraphGameStatsRowContainer">
                <div className="teamGraphValueWrapperLeft">
                  <div className="teamGraphLeft">{teamOne.voidGrubs}</div>
                </div>
                <div className="teamGraphTitle">VOID GRUBS</div>
                <div className="teamGraphValueWrapperRight">
                  <div className="teamGraphRight">{teamTwo.voidGrubs}</div>
                </div>
              </div>
              <div className="teamGraphGameStatsRowContainer">
                {teamOne.heralds > 0 ?
                  <div className="teamGraphImageContainerLeft">
                    {Array.from({length: teamOne.heralds}).map((value, index) =>
                      <img className="teamGraphStatsHeraldsImage" src={require('./assets/herald.png')} key={index} alt="" />
                    )}
                    </div>
                : <div className="teamGraphValueWrapperLeft">
                    <div className="teamGraphLeft">—</div>
                  </div>
                }
                <div className="teamGraphTitle">HERALDS</div>
                {teamTwo.heralds > 0 ?
                  <div className="teamGraphImageContainerRight">
                    {Array.from({length: teamTwo.heralds}).map((value, index) =>
                      <img className="teamGraphStatsHeraldsImage" src={require('./assets/herald.png')} key={index} alt="" />
                    )}
                  </div>
                : <div className="teamGraphValueWrapperRight">
                    <div className="teamGraphRight">—</div>
                  </div>
                }
              </div>
              <div className="teamGraphGameStatsRowContainer">
                {teamOneDragons.dragons.length > 0 ?
                  <div className="teamGraphImageContainerLeft">
                    {[...teamOneDragons.dragons].reverse().map((value, index) =>
                      <img className="teamGraphStatsDragonsImage" src={require(`./assets/${value}.png`)} key={index} alt="" />
                    )}
                  </div>
                : <div className="teamGraphValueWrapperLeft">
                    <div className="teamGraphLeft">—</div>
                  </div>
                }
                <div className="teamGraphTitle">DRAKES</div>
                {teamTwoDragons.dragons.length > 0 ?
                  <div className="teamGraphImageContainerRight">
                    {teamTwoDragons.dragons.map((value, index) =>
                      <img className="teamGraphStatsDragonsImage" src={require(`./assets/${value}.png`)} key={index} alt="" />
                    )}
                  </div>
                : <div className="teamGraphValueWrapperRight">
                    <div className="teamGraphRight">—</div>
                  </div>
                }
              </div>
              <div className="teamGraphGameStatsRowContainer">
                {teamOneDragons.elders > 0 ?
                  <div className="teamGraphImageContainerLeft">
                    {Array.from({length: teamOneDragons.elders}).map((value, index) =>
                      <img className="teamGraphElderImage" src={require('./assets/ELDER_DRAGON.png')} key={index} alt="" />
                    )}
                  </div>
                : <div className="teamGraphValueWrapperLeft">
                    <div className="teamGraphLeft">—</div>
                  </div>
                }
                <div className="teamGraphTitle">ELDERS</div>
                {teamTwoDragons.elders > 0 ?
                  <div className="teamGraphImageContainerRight">
                    {Array.from({length: teamTwoDragons.elders}).map((value, index) =>
                      <img className="teamGraphElderImage" src={require('./assets/ELDER_DRAGON.png')} key={index} alt="" />
                    )}
                  </div>
                : <div className="teamGraphValueWrapperRight">
                    <div className="teamGraphRight">—</div>
                  </div>
                }
              </div>
              <div className="teamGraphGameStatsRowContainer">
                {teamOne.barons > 0 ?
                  <div className="teamGraphImageContainerLeft">
                    {Array.from({length: teamOne.barons}).map((value, index) =>
                      <img className="teamGraphBaronImage" src={require('./assets/baron.png')} key={index} alt="" />
                    )}
                  </div>
                : <div className="teamGraphValueWrapperLeft">
                    <div className="teamGraphLeft">—</div>
                  </div>
                }
                <div className="teamGraphTitle">BARONS</div>
                {teamTwo.barons > 0 ?
                  <div className="teamGraphImageContainerRight">
                    {Array.from({length: teamTwo.barons}).map((value, index) =>
                      <img className="teamGraphBaronImage" src={require('./assets/baron.png')} key={index} alt="" />
                    )}
                  </div>
                : <div className="teamGraphValueWrapperRight">
                    <div className="teamGraphRight">—</div>
                  </div>
                }
              </div>
              <div className="teamGraphGameStatsRowContainer">
                <div className="teamGraphImageContainerLeft teamGraphBansLeft">
                  {teamOne.bans.map((value, index) =>
                    <img className="teamGraphBanImage" src={require(`../overview/assets/champions/${value}.png`)} key={index} alt="" />
                  )}
                </div>
                <div className="teamGraphTitle">BANS</div>
                  <div className="teamGraphImageContainerRight teamGraphBansRight">
                    {teamTwo.bans.map((value, index) =>
                      <img className="teamGraphBanImage" src={require(`../overview/assets/champions/${value}.png`)} key={index} alt="" />
                    )}
                </div>
              </div>
            </div>
            <div className="teamGraphDamageDealtContainer">
              <TeamDamage data={data.data} matchData={matchData} />
              <div className="teamGraphGoldDifferenceContainer">
                <div className="teamGraphGoldDifference">

                </div>
              </div>
            </div>
          </div>
        </div>
      : <div>Loading</div>
      }
    </div>
  )
}

export default TeamGraph;