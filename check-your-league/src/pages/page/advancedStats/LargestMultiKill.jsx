import './LargestMultiKill.css';

function largestMultiKill({matchData}) {

  return (
    <div className="largestMultiKillContainer">
      {matchData.info.participants.map((value, index) =>
        <div className="multiKillValues" key={index}>{value.largestMultiKill}</div>
      )}
    </div>
  )
}

export default largestMultiKill;