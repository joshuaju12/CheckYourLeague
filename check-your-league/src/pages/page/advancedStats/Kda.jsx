import './kda.css';

function Kda({matchData}) {

  return(
    <div>
      {matchData.info.participants.map((value, index) =>
        <span className="kdaValues" key={index}>{`${value.kills}/${value.deaths}/${value.assists}`}</span>
      )}
    </div>
  )
}

export default Kda;