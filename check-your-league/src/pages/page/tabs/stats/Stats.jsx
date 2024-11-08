import {useState, useEffect} from 'react';
import axios from 'axios';
import Select from 'react-select';
import './stats.css';


function Stats({matchId, matchData, puuidToChamp, championName, teams, puuid, players}) {
  const [selectedPuuid, setSelectedPuuid] = useState(puuid);
  const [selectedPlayer, setSelectedPlayer] = useState(championName);
  const [kills, setKills] = useState({});
  const [enemyTeam, setEnemyTeam] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [participant, setParticipant] = useState(-1);
  const test = "Brand";
  const test2 = [{value: {a: 1}, label: "option1"}, {value: 1, label: "option2"}];
  const options = [];

  for (let i = 0; i < players.length; i++) {
    const option = {};
    option.value = players[i];
    option.label = players[i].playerName;
    options.push(option);
  };

  const getKillResults = () => {
    axios.get('http://localhost:3001/timeline', {params: {matchId: matchId}})
      .then((timeline) => {
        const participants = timeline.data.info.participants;
        // console.log(timeline.data);
        const participantIdToChamp = {};
        const mapParticipants = () => {
          const participantsToChamps = [];
          for (let i = 0; i < participants.length; i++) {
            participantIdToChamp[i + 1] = puuidToChamp[participants[i].puuid];
            const participantsInfo = {}
            participantsInfo.name = puuidToChamp[participants[i].puuid];
            participantsInfo.participantId = i + 1;
            participantsInfo.puuid = timeline.data.info.participants[i].puuid;
            participantsToChamps.push(participantsInfo);
          }
          return participantsToChamps;
        }
        const mapParticipantsResults = mapParticipants();
        return [mapParticipantsResults, timeline.data, participantIdToChamp];
      })
      .then((data) => {
        const timelineData = data[1].info.frames;
        const killTracker = {};
        let opposingTeam;
        const findCurrentPlayer = () => {
          for (let i = 0; i < data[0].length; i++) {
            if (data[0][i].name === selectedPlayer && data[0][i].puuid === selectedPuuid) {
              if (i <= 4) {
                opposingTeam = 1;
              } else {
                opposingTeam = 0;
              }
              return data[0][i].participantId;
            }
          }
        };
        const currentParticipant = Number(findCurrentPlayer());

        for (let i = 0; i < timelineData.length; i++) {
          for (let j = 0; j < timelineData[i].events.length; j++) {
            if (timelineData[i].events[j].type === "CHAMPION_KILL" && timelineData[i].events[j].killerId === currentParticipant) {
              if (!killTracker[data[2][timelineData[i].events[j].victimId]]) {
                let tuple = Array(2);
                tuple[0] = 1;
                killTracker[data[2][timelineData[i].events[j].victimId]] = tuple;
              } else {
                if (!killTracker[data[2][timelineData[i].events[j].victimId]][0]) {
                  killTracker[data[2][timelineData[i].events[j].victimId]][0] = 1;
                } else {
                  killTracker[data[2][timelineData[i].events[j].victimId]][0]++;
                }
              }
            } else {
              const assists = timelineData[i].events[j].assistingParticipantIds;
              if (timelineData[i].events[j].type === "CHAMPION_KILL" && assists && assists.indexOf(currentParticipant) >= 0) {
                if (killTracker[data[2][timelineData[i].events[j].victimId]] === undefined) {
                  let tuple = Array(2);
                  tuple[1] = 1;
                  killTracker[data[2][timelineData[i].events[j].victimId]] = tuple;
                } else {
                  if (!killTracker[data[2][timelineData[i].events[j].victimId]][1]) {
                    killTracker[data[2][timelineData[i].events[j].victimId]][1] = 1;
                  } else {
                    killTracker[data[2][timelineData[i].events[j].victimId]][1]++;
                  };
                };
              };
            };
          };
        };
        setKills(killTracker);
        setEnemyTeam(teams[opposingTeam]);
        setParticipant(currentParticipant - 1);
        setLoaded(true);
      })
  };

  const onClick = (e) => {
    setSelectedPuuid(e.value.puuid);
    setSelectedPlayer(e.value.championName);
    setLoaded(false);
  };


  useEffect(() => {
    getKillResults();
  }, [selectedPlayer])

  return (
    <div>
      {participant > -1 && loaded === true ?
        <div className="statsContentWrapper">
          <div className="dropdownContainer">
            <Select
              defaultValue={options[participant]}
              options={options}
              onChange={e => onClick(e)}
              isSearchable={false}
              formatOptionLabel={player => (
                <div className="optionsContainer">
                  <img className="optionsImage" src={require(`../overview/assets/champions/${player.value.championName}.png`)} alt="" />
                  <div className="optionsLabel">{player.value.playerName}</div>
                </div>
              )}
            />
          </div>
          <div className="statsKillsAndAssistsContainer">
            <div className="statsKillContainer">
              <div>Kills</div>
              <table className="statsKillTable">
                <thead>
                  <tr>
                    <th className="statsTablePlayerHeader">player</th>
                    {enemyTeam.map((value, index) =>
                      <th className="statsTableHeader" style={{backgroundImage: `url(${require(`../overview/assets/champions/${value}.png`)})` , backgroundPosition: 'center', backgroundSize: 'cover'}} key={index}>{value}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img className="statsTableRowPlayer" src={require(`../overview/assets/champions/${selectedPlayer}.png`)} alt="" />
                    </td>
                    {enemyTeam.map((value, index) => {
                      if (!kills[value] || !kills[value][0]) {
                        return <td className="statsTableRowKills" key={index}>0</td>
                      } else {
                        return <td className="statsTableRowKills" key={index}>{kills[value][0]}</td>
                      }
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="statsAssistContainer">
              <div>Assists</div>
              <table className="statsAssistTable">
                <thead>
                  <tr>
                    <th className="statsTablePlayerHeader">player</th>
                    {enemyTeam.map((value, index) =>
                      <th className="statsTableHeader" style={{backgroundImage: `url(${require(`../overview/assets/champions/${value}.png`)})`, backgroundPosition: 'center', backgroundSize: 'cover'}} key={index}>{value}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img className="statsTableRowPlayer" src={require(`../overview/assets/champions/${selectedPlayer}.png`)} alt="" />
                    </td>
                    {enemyTeam.map((value, index) => {
                      if (!kills[value] || !kills[value][1]) {
                        return <td className="statsTableRowKills" key={index}>0</td>
                      } else {
                        return <td className="statsTableRowKills" key={index}>{kills[value][1]}</td>
                      }
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="statsCombatStatsContainer">
            <table className="statsCombatStatsTable">
              <thead>
                <tr>
                  <th className="statsCombatStatsCombatHeader">Combat</th>
                  <th className="statsCombatStatsDamageDealtHeader">Damage Dealt</th>
                  <th className="statsCombatStatsIncomingDamageHeader">Incoming Damage</th>
                  <th className="statsCombatStatsGoldHeader">Gold</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="statsCombatTableCombat">
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Largest Killing Spree</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].largestKillingSpree}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Largest Multi Kill</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].largestMultiKill}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Crowd Control Score</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].timeCCingOthers}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Vision Score</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].visionScore}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Wards Places</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].wardsPlaced}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Wards Destroyed</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].wardsKilled}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Control Wards Purchased</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].visionWardsBoughtInGame}</div>
                    </div>
                  </td>
                  <td className="statsCombatTableDamageDealt">
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Total Dmg to Champs</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].totalDamageDealtToChampions}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Physical Dmg to Champs</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].physicalDamageDealtToChampions}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Magic Dmg to Champs</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].magicDamageDealtToChampions}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">True Dmg to Champs</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].trueDamageDealtToChampions}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Dmg to Turrets</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].damageDealtToTurrets}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Dmg to Objectives</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].damageDealtToObjectives}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle"></div>
                      <div className="statsCombatTableValue"></div>
                    </div>
                  </td>
                  <td className="statsCombatTableIncomingDamage">
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Dmg Healed</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].totalHeal}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Dmg Taken</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].totalDamageTaken}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Self Mitigated Dmg</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].damageSelfMitigated}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Shields to Others</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].totalDamageShieldedOnTeammates}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Physical Dmg Taken</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].physicalDamageTaken}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Magic Dmg Taken</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].magicDamageTaken}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">True Dmg Taken</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].trueDamageTaken}</div>
                    </div>
                  </td>
                  <td className="statsCombatTableGold">
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Gold Earned</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].goldEarned}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Gold Spent</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].goldSpent}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Minions</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].totalMinionsKilled}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle">Jungle Minions</div>
                      <div className="statsCombatTableValue">{matchData.info.participants[participant].neutralMinionsKilled}</div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle"></div>
                      <div className="statsCombatTableValue"></div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle"></div>
                      <div className="statsCombatTableValue"></div>
                    </div>
                    <div className="statsCombatTableValueContainer">
                      <div className="statsCombatTableValueTitle"></div>
                      <div className="statsCombatTableValue"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      : <div className="loader">Loading...</div>
      }
    </div>
  )
}

export default Stats;