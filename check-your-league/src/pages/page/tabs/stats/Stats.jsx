import {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import './stats.css';


function Stats({matchId}) {

  const [timeline, setTimeline] = useState({})

  const getTimeline = useMemo(() => async() => {
    try {
      const timeline = await axios.get('http://localhost:3001/timeline', {params: {matchId: matchId}});
      setTimeline(timeline.data);
      return timeline;
    } catch(err) {
      console.log('error getting timeline');
    }
  }, [matchId]);

  useEffect(() => {
    getTimeline();
  }, [])

  return (
    <div>Stats tab</div>
  )
}

export default Stats;