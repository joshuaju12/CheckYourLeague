import './overallPlayers.css';

function OverallPlayers ({players}) {

  let rows0 = [];
  let rows1 = [];
  let teamOneWin;
  let teamTwoWin;

  const playerOnClick = (e) => {
    e.preventDefault();
    console.log('clicked');
  }

  for (let i = 0; i < players.length; i++) {
    if (i <= 4) {
      rows0.push(
        // <div className="playersRowOne" key={i}>
        //   <img src={require(`./tabs/overview/assets/champions/${players[i].championName}.png`)} alt='' />
        //   <div className="overallPlayersName" onClick={playerOnClick}>{players[i].riotIdGameName}</div>
        // </div>
        <div className="playersRowOne" key={i}>
          <img src={require(`./tabs/overview/assets/champions/${players[i].championName}.png`)} alt='' />
          <div className="overallPlayersNameWrapper">
            <span className="overallPlayersName" onClick={playerOnClick}>{players[i].riotIdGameName}</span>
          </div>
        </div>
      )
    } else {
      rows1.push(
        // <div className="playersRowTwo" key={i}>
        //   <img src={require(`./tabs/overview/assets/champions/${players[i].championName}.png`)} alt='' />
        //   <div className="overallPlayersName">{players[i].riotIdGameName}</div>
        // </div>
        <div className="playersRowTwo" key={i}>
          <img src={require(`./tabs/overview/assets/champions/${players[i].championName}.png`)} alt='' />
          <div className="overallPlayersNameWrapper">
            <span className="overallPlayersName">{players[i].riotIdGameName}</span>
          </div>
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