import {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import './stats.css';


function Stats({matchId, matchData, puuidToChamp, championName, teams, puuid}) {

  const [selectedPuuid, setSelectedPuuid] = useState(puuid);
  const [selectedPlayer, setSelectedPlayer] = useState(championName);
  const [kills, setKills] = useState({});
  const [enemyTeam, setEnemyTeam] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [participant, setParticipant] = useState(-1);
  const test = "Brand";

  const getKillResults = () => {
    axios.get('http://localhost:3001/timeline', {params: {matchId: matchId}})
      .then((timeline) => {
        const participants = timeline.data.info.participants;
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
                killTracker[data[2][timelineData[i].events[j].victimId]] = 1;
              } else {
                killTracker[data[2][timelineData[i].events[j].victimId]]++;
              }
            }
          }
        }

        setKills(killTracker);
        setEnemyTeam(teams[opposingTeam]);
        setParticipant(currentParticipant - 1);
      })
  }


  useEffect(() => {
    getKillResults();
  }, [selectedPlayer])

  return (
    <div>
      {participant > -1 ?
        <div className="statsKillsContainer">
          <table className="statsKillTable">
            <thead>
              <tr>
                <th className="statsTablePlayerHeader">player</th>
                {enemyTeam.map((value, index) =>
                <th className="statsTableHeader" style={{background: `url(${require(`../overview/assets/champions/${value}.png`)})`, backgroundPosition: 'center', backgroundSize: 'cover'}} key={index}>{value}</th>
                // <th key={index}>{value}</th>
              )}
              </tr>
            </thead>
          </table>
          {/* <img src={require(`../overview/assets/champions/${test}.png`)} alt="" /> */}
        </div>
      : null
      }
    </div>
  )
}

export default Stats;