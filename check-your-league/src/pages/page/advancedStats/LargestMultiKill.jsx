import './LargestMultiKill.css';

function LargestMultiKill({matchData}) {

  return (
    <div className="largestMultiKillContainer">
      {matchData.info.participants.map((value, index) =>
        <div className="multiKillValues" key={index}>{value.largestMultiKill}</div>
      )}
    </div>
  )
}

export default LargestMultiKill;