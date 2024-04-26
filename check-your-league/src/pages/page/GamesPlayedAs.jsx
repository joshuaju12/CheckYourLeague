import {useState, useEffect, useMemo} from 'react';
import axios from 'axios';

function GamesPlayedAs({championName, championId}) {

  const [mastery, setMastery] = useState(0);

  const getMasteryPoints = useMemo(() => async() => {
    try {
      const masteryPoints = await axios.get('http://localhost:3001/masteryPoints', {params: {championId: championId}});
      setMastery(masteryPoints.data.championPoints);
      return masteryPoints;
    } catch(error) {
      console.log('error retrieving mastery points');
    }
  }, []);

  useEffect(() => {

  }, []);

  return (
    <div>Games played as {championName} : {mastery / 600}</div>
  )
}

export default GamesPlayedAs;