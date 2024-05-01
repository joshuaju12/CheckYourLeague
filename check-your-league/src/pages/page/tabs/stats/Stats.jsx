import {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import './stats.css';


function Stats({matchId, puuidToChamp}) {

  const [timeline, setTimeline] = useState({});
  const participantToChamp = {};

  const getTimeline = useMemo(() => async() => {
    try {
      const timeline = await axios.get('http://localhost:3001/timeline', {params: {matchId: matchId}});
      console.log(timeline.data);
      setTimeline(timeline.data);
      return timeline;
    } catch(err) {
      console.log('error getting timeline');
    }
  }, [matchId]);

  const getParticipants = useMemo(() => async() => {
    try {
      const matchData = await getTimeline();
      const participants = matchData.data.info.participants;
      console.log(participants);
    } catch(err) {
      console.log('error getting participants', err);
    }
  })


  useEffect(() => {
    getTimeline();
    getParticipants();
  }, [])

  return (
    <div>Stats tab</div>
  )
}

export default Stats;