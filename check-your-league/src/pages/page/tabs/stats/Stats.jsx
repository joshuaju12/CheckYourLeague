import {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import './stats.css';


function Stats({matchId, puuidToChamp, championName, teams, puuid}) {

  const [selectedPuuid, setSelectedPuuid] = useState(puuid);
  const [timeline, setTimeline] = useState({});
  const [selectedPlayer, setSelectedPlayer] = useState(championName);
  const [kills, setKills] = useState({});
  const [killedChampions, setKilledChampions] = useState([]);
  const [enemyTeam, setEnemyTeam] = useState([]);

  const getEnemyTeam = () => {
    if (teams[0].indexOf(selectedPlayer) >= 0) {

    }
  }

  const getKillResults = () => {
    axios.get('http://localhost:3001/timeline', {params: {matchId: matchId}})
      .then((timeline) => {
        const participants = timeline.data.info.participants;
        const mapParticipants = () => {
          const participantsToChamps = [];
          for (let i = 0; i < participants.length; i++) {
            const participantsInfo = {}
            participantsInfo.name = puuidToChamp[participants[i].puuid];
            participantsInfo.participantId = i + 1;
            participantsInfo.puuid = timeline.data.info.participants[i].puuid;
            participantsToChamps.push(participantsInfo);
          }
          return participantsToChamps;
        }
        const mapParticipantsResults = mapParticipants();
        return [mapParticipantsResults, timeline.data];
      })
      .then((data) => {
        console.log(data);
        const timelineData = data[1].info.frames;
        const killTracker = {};
        const findCurrentPlayer = () => {
          for (let i = 0; i < data[0].length; i++) {
            if (data[0][i].name === selectedPlayer && data[0][i].puuid === selectedPuuid) {
              return data[0][i].participantId;
            }
          }
        };
        const currentParticipant = Number(findCurrentPlayer());

        for (let i = 0; i < timelineData.length; i++) {
          for (let j = 0; j < timelineData[i].events.length; j++) {
            if (timelineData[i].events[j].type === "CHAMPION_KILL" && timelineData[i].events[j].killerId === currentParticipant) {
              if (!killTracker[data[0][timelineData[i].events[j].victimId]]) {
                killTracker[data[0][timelineData[i].events[j].victimId]] = 1;
              } else {
                killTracker[data[0][timelineData[i].events[j].victimId]]++;
              }
            }
          }
        }
        setKills(killTracker);
      })
  }


  useEffect(() => {
    getKillResults();
  }, [selectedPlayer])

  return (
    <div>test</div>
  )
}

export default Stats;