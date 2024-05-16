import './teamDamage.css';

function TeamDamage ({data, matchData}) {
  console.log(matchData);
  const teamOnePlayerData = [];
  const teamTwoPlayerData = [];
  let highestDamage;

  const getDamage = () => {
    const allPlayers = matchData.info.participants
    for (let i = 0; i < allPlayers.length; i++) {
      if (!highestDamage) {
        highestDamage = allPlayers[i].totalDamageDealtToChampions;
      } else {
        if (allPlayers[i].totalDamageDealtToChampions > highestDamage) {
          highestDamage = allPlayers[i].totalDamageDealtToChampions;
        }
      }
      if (i < 5) {
        teamOnePlayerData.push({championName: allPlayers[i].championName, playerName: allPlayers[i].riotIdGameName, damage: allPlayers[i].totalDamageDealtToChampions});
      } else {
        teamTwoPlayerData.push({championName: allPlayers[i].championName, playerName: allPlayers[i].riotIdGameName, damage: allPlayers[i].totalDamageDealtToChampions});
      }
    }
  };

  getDamage();

  return(
    <div className="teamDamageContainer">
      <div className="teamDamageTeamOne">
        {teamOnePlayerData.map((value, index) => (
          teamOnePlayerData[index].damage < highestDamage
            ? (<div key={index}>
                 <img className="teamDamageImage" src={require(`../overview/assets/champions/${teamOnePlayerData[index].championName}.png`)} alt="" />
                 <div className="teamDamageStatsContainer">
                   <div className="teamDamagePlayerName">{teamOnePlayerData[index].playerName}</div>
                   <div className="teamDamageDamageValue">{teamOnePlayerData[index].damage}</div>
                   <div className="teamDamageDamageBar">bar</div>
                 </div>
               </div>
              )
            : (<div key={index}>
                 <img className="teamDamageImage" src={require(`../overview/assets/champions/${teamOnePlayerData[index].championName}.png`)} alt="" />
                 <div className="teamDamageStatsContainer">
                   <div className="teamDamagePlayerName">{teamOnePlayerData[index].playerName}</div>
                   <div className="teamDamageDamageValue">{teamOnePlayerData[index].damage}</div>
                   <div className="teamDamageDamageBar">highestDamageBar</div>
                 </div>
               </div>
              )
        ))}
      </div>
      <div className="teamDamageTeamTwo">
        {/* {teamTwoPlayerData.map((value, index) => (
          teamTwoPlayerData[index].damage < highestDamage
            ? (<div key={index}>{teamTwoPlayerData[index].damage}</div>)
            : (<div key={index}>{teamTwoPlayerData[index].damage}</div>)
        ))} */}
      </div>
    </div>
  )
}

export default TeamDamage;