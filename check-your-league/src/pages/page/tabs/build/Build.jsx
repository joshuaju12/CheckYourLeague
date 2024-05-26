import './build.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function Build ({matchId, matchData, puuidToChamp, championName, teams, puuid, players}) {

  // const [timeline, setTimeline] = useState({});
  const [selectedPuuid, setSelectedPuuid] = useState(puuid);
  const [selectedPlayer, setSelectedPlayer] = useState(championName);
  const [build, setBuild] = useState([]);
  const [participant, setParticipant] = useState(-1);
  const [loaded, setLoaded] = useState(false);

  const options = [];

  for (let i = 0; i < players.length; i++) {
    const option = {};
    option.value = players[i];
    option.label = players[i].playerName;
    options.push(option);
  };

  const getTimeline = () => {
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
        const playerActions = []
        const timelineData = data[1].info.frames;

        const findCurrentPlayer = () => {
          for (let i = 0; i < data[0].length; i++) {
            if (data[0][i].name === selectedPlayer && data[0][i].puuid === selectedPuuid) {
              return data[0][i].participantId;
            }
          }
        };

        const currentParticipant = Number(findCurrentPlayer());

        for (let i = 0; i < timelineData.length; i++) {
          const actions = {events: []};
          for (let j = 0; j < timelineData[i].events.length; j++) {
            if (timelineData[i].events[j].type === "ITEM_PURCHASED" && timelineData[i].events[j].participantId === currentParticipant) {
              if (actions.events.length === 0) {
                  actions.timestamp = timelineData[i].timestamp;
                  actions.events.push(timelineData[i].events[j]);
              } else {
                let added = false;

                for (let k = 0; k < actions.events.length; k++) {
                  if (actions.events[k].itemId === timelineData[i].events[j].itemId) {
                    const tempObject = {...actions.events[k]};
                    if (!tempObject.times) {
                      tempObject.times = 2;
                      actions.events.splice(k, 1, tempObject);
                      added = true;
                      break;
                    } else {
                      tempObject.times++;
                      actions.events.splice(k, 1, tempObject);
                      added = true;
                      break;
                    }
                  }
                }
                if (!added) {
                  actions.events.push(timelineData[i].events[j]);
                }
              }
            }
          }
          if (actions.events.length > 0) {
            playerActions.push(actions);
          }
        }
        setBuild(playerActions);
        setParticipant(currentParticipant - 1);
      })
  };

  useEffect(() => {
    getTimeline();
  }, [selectedPlayer])

  return (
    <div>
      { participant > -1
      ? <div>
          Build
        </div>
      : <div>Loading</div>
      }
    </div>
  )
}

export default Build;