import './matchDetails.css';

function MatchDetails({matchData}) {
  const date = new Date(matchData.info.gameCreation);
  console.log(matchData);

  return (
    <div className="matchContainer">
      <div>Date: {date.toLocaleDateString('en-US')}</div>
      <div className="playersContainer">
        {matchData.info.participants.map((playerInfo, index) =>
          <span>{playerInfo.summonerName}; </span>
        )}
      </div>
    </div>

  )
}


export default MatchDetails;