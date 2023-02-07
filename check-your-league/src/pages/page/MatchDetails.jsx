import './matchDetails.css';
import {useState} from 'react';

function MatchDetails({matchData}) {
  const date = new Date(matchData.info.gameCreation);
  const [expanded, setExpanded] = useState(false);
  console.log(matchData);


  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };


  return (
    <div className="matchContainer">
      <div className="detailsContainer">
        <div className="overalInfo">
          <div>Date: {date.toLocaleDateString('en-US')}</div>
          <div className="playersContainer">
            <div className="team1">
              <div>{matchData.info.participants[0].summonerName}</div>
              <div>{matchData.info.participants[1].summonerName}</div>
              <div>{matchData.info.participants[2].summonerName}</div>
              <div>{matchData.info.participants[3].summonerName}</div>
              <div>{matchData.info.participants[4].summonerName}</div>
            </div>
            <div className="team2">
              <div>{matchData.info.participants[5].summonerName}</div>
              <div>{matchData.info.participants[6].summonerName}</div>
              <div>{matchData.info.participants[7].summonerName}</div>
              <div>{matchData.info.participants[8].summonerName}</div>
              <div>{matchData.info.participants[9].summonerName}</div>
            </div>
          </div>
        </div>
        <button onClick={handleExpandClick}>V</button>
      </div>
      {expanded ?
        <div>this should show</div>
        : null
      }
    </div>

  )
}


export default MatchDetails;