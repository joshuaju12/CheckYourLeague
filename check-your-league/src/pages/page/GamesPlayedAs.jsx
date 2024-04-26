import {useState, useEffect, useMemo} from 'react';
import axios from 'axios';

function GamesPlayedAs({puuid, championName, championId}) {

  const [mastery, setMastery] = useState(0);

  const getMasteryPoints = useMemo(() => async() => {
    try {
      const masteryPoints = await axios.get('http://localhost:3001/masteryPoints', {params: {puuid: puuid, championId: championId}});
      setMastery(masteryPoints.data.championPoints);
      return masteryPoints;
    } catch(error) {
      console.log('error retrieving mastery points');
    }
  }, []);

  useEffect(() => {
    getMasteryPoints();
  }, []);

  return (
    <div>Games played as {championName} : {Math.round(mastery / 600) > 0 ? Math.round(mastery / 600) : 1}</div>
  )
}

export default GamesPlayedAs;