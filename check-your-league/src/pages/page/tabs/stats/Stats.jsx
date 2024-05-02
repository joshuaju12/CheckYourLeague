import {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import './stats.css';


function Stats({matchId, puuidToChamp, championName}) {

  const [timeline, setTimeline] = useState({});
  const [selectedPlayer, setSelectedPlayer] = useState(championName);

  const getTimeline = useMemo(() => async() => {
    try {
      const timeline = await axios.get('http://localhost:3001/timeline', {params: {matchId: matchId}});
      // console.log(timeline.data);
      setTimeline(timeline.data);
      return timeline;
    } catch(err) {
      console.log('error getting timeline');
    }
  }, []);

  const getParticipants = useMemo(() => async() => {
    try {
      const matchData = await getTimeline();
      const participants = matchData.data.info.participants;

      const mapParticipants = () => {
        const participantsToChamps = {};
        for (let i = 0; i < participants.length; i++) {
          participantsToChamps[i + 1] = puuidToChamp[participants[i].puuid];
        }
        return participantsToChamps;
      }

      const mapParticipantsResults = await mapParticipants();
      return [mapParticipantsResults, timeline];
    } catch(err) {
      console.log('error getting participants', err);
    }
  }, [getTimeline, puuidToChamp]);

  const getKills = useMemo(() => async() => {
    try {

      const helper = async() => {
        const asyncData = await getParticipants();
        return asyncData;
      }

      const data = await helper();
      // const data = await getParticipants();
      // console.log(data.info);
      const timelineData = data[1].info.frames;

      const findCurrentPlayer = () => {
        for (let key in data[0]) {
          if (data[0][key] === selectedPlayer) {
            return key;
          };
        };
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



  useEffect(() => {
    getTimeline();
    getParticipants();
    getKills();
  }, [])

  return (
    <div>test</div>
  )
}

export default Stats;