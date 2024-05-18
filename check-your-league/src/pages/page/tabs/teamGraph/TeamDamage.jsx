import './teamDamage.css';

function TeamDamage ({data, matchData}) {
  // console.log(data);
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
      <div className="teamDamageColumnTitle">CHAMPION DAMAGE</div>
      <div className="teamDamageWrapper">
        <div className="teamDamageTeamOne">
          {teamOnePlayerData.map((value, index) => (
            teamOnePlayerData[index].damage < highestDamage
              ? (<div className="teamDamagePlayerContainer" key={index}>
                  <img className="teamDamageImage" src={require(`../overview/assets/champions/${teamOnePlayerData[index].championName}.png`)} alt="" />
                  <div className="teamDamageStatsContainer">
                    <div className="teamDamagePlayerName">{teamOnePlayerData[index].playerName}</div>
                    <div className="teamDamageDamageValue">{teamOnePlayerData[index].damage}</div>
                    <div className="teamDamageDamageBarWrapper">
                      <div className="teamDamageDamageBar" style={{width: `${(teamOnePlayerData[index].damage / highestDamage) * 100}%`}}></div>
                    </div>
                  </div>
                </div>
                )
              : (<div className="teamDamagePlayerContainer" key={index}>
                  <img className="teamDamageImage" src={require(`../overview/assets/champions/${teamOnePlayerData[index].championName}.png`)} alt="" />
                  <div className="teamDamageStatsContainer">
                    <div className="teamDamagePlayerName">{teamOnePlayerData[index].playerName}</div>
                    <div className="teamDamageDamageValue">{teamOnePlayerData[index].damage}</div>
                    <div className="teamDamageDamageBarWrapper">
                      <div className="teamDamageDamageBar" style={{width: "100%"}}></div>
                    </div>
                  </div>
                </div>
                )
          ))}
        </div>
        <div className="teamDamageTeamTwo">
          {teamTwoPlayerData.map((value, index) => (
              teamTwoPlayerData[index].damage < highestDamage
                ? (<div className="teamDamagePlayerContainerTeamTwo" key={index}>
                    <div className="teamDamageStatsContainerTeamTwo">
                      <div className="teamDamagePlayerNameTeamTwo">{teamTwoPlayerData[index].playerName}</div>
                      <div className="teamDamageDamageValueTeamTwo">{teamTwoPlayerData[index].damage}</div>
                      <div className="teamDamageDamageBarTeamTwoWrapper">
                        <div className="teamDamageDamageBarTeamTwo" style={{width: `${(teamTwoPlayerData[index].damage / highestDamage) * 100}%`}}></div>
                      </div>
                    </div>
                    <img className="teamDamageImage" src={require(`../overview/assets/champions/${teamTwoPlayerData[index].championName}.png`)} alt="" />
                  </div>
                  )
                : (<div className="teamDamagePlayerContainerTeamTwo" key={index}>
                    <div className="teamDamageStatsContainerTeamTwo">
                      <div className="teamDamagePlayerNameTeamTwo">{teamTwoPlayerData[index].playerName}</div>
                      <div className="teamDamageDamageValueTeamTwo">{teamTwoPlayerData[index].damage}</div>
                      <div className="teamDamageDamageBarTeamTwoWrapper">
                        <div className="teamDamageDamageBarTeamTwo" style={{width: "100%"}}></div>
                      </div>
                    </div>
                    <img className="teamDamageImage" src={require(`../overview/assets/champions/${teamTwoPlayerData[index].championName}.png`)} alt="" />
                  </div>
                  )
            ))}
        </div>
      </div>
    </div>
  )
}

export default TeamDamage;