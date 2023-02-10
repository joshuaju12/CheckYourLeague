import './kda.css';

function Kda({matchData}) {

  return(
    <div className="kdaValueContainer">
      {matchData.info.participants.map((value, index) =>
        <div className="kdaValues" key={index}>{`${value.kills}/${value.deaths}/${value.assists}`}</div>
      )}
    </div>
  )
}

export default Kda;