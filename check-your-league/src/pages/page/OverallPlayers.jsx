import './overallPlayers.css';

function OverallPlayers ({players}) {

  let rows0 = [];
  let rows1 = [];
  let teamOneWin;
  let teamTwoWin;

  for (let i = 0; i < players.length; i++) {
    if (i <= 4) {
      rows0.push(
        <div className="playersRowOne" key={i}>
          <img src={require(`./tabs/overview/assets/champions/${players[i].championName}.png`)} alt='' />
          <div className="overallPlayersName">{players[i].riotIdGameName}</div>
        </div>
      )
    } else {
      rows1.push(
        <div className="playersRowTwo" key={i}>
          <img src={require(`./tabs/overview/assets/champions/${players[i].championName}.png`)} alt='' />
          <div className="overallPlayersName">{players[i].riotIdGameName}</div>
        </div>
      )
    }
  }

  return (
    <div className="overallAllPlayers">
      <div className="playersOneContainer">
        {rows0}
      </div>
      <div className="playersTwoContainer">
        {rows1}
      </div>
    </div>
  )
}

export default OverallPlayers;