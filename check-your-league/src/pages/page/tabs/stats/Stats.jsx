import {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import './stats.css';


function Stats({matchId, puuidToChamp, championName}) {

  const [timeline, setTimeline] = useState({});
  const [selectedPlayer, setSelectedPlayer] = useState(championName);
  const [kills, setKills] = useState({});
  const [killedChampions, setKilledChampions] = useState([]);

  const test = () => {
    axios.get('http://localhost:3001/timeline', {params: {matchId: matchId}})
      .then((timeline) => {
        const participants = timeline.data.info.participants;
        const mapParticipants = () => {
          const participantsToChamps = {};
          for (let i = 0; i < participants.length; i++) {
            participantsToChamps[i + 1] = puuidToChamp[participants[i].puuid];
          }
          return participantsToChamps;
        }
        const mapParticipantsResults = mapParticipants();
        return [mapParticipantsResults, timeline.data];
      })
      .then((data) => {
        const timelineData = data[1].info.frames;
        const killTracker = {};
        const killed = [];
        const findCurrentPlayer = () => {
          for (let key in data[0]) {
            if (data[0][key] === selectedPlayer) {
              return key;
            };
          };
        };
<<<<<<< HEAD
      };

      const currentParticipant = await findCurrentPlayer();

      // for (let i = 0; i < timelineData.length; i++) {
      //   for (let j = 0; j < timelineData[i].events.length; j++) {
      //     if (timelineData[i].events[j].type === "CHAMPION_KILL") {
      //       console.log('got a match');
      //     }
      //   }
      // }


    } catch(err) {
      console.log('error getting kills', err);
    }
  }, [getParticipants, selectedPlayer]);

=======
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
>>>>>>> test


  useEffect(() => {
    test();
  }, [selectedPlayer])

  return (
    <div>test</div>
  )
}

export default Stats;