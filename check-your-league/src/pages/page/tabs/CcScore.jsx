import './ccScore.css';

function CcScore({matchData}) {
  console.log(matchData);
  return (
    <div className='ccValueContainer'>
      {matchData.info.participants.map((value, index) =>
        <div className='ccValues' key={index}>{value.timeCCingOthers}</div>
      )}
    </div>
  )
}

export default CcScore;