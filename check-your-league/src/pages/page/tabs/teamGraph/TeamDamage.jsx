import './teamDamage.css';

function TeamDamage ({data, matchData}) {
  console.log(matchData);
  const playerData = {};
  const getHighestDamage = () => {
    const allPlayers = matchData.info.participants
    for (let i = 0; i < allPlayers.length; i++) {
      if (!playerData.highest) {
        playerData.highest = {name:allPlayers[i].championName, value: allPlayers[i].totalDamageDealtToChampions};
      } else {
        if (allPlayers[i].totalDamageDealtToChampions > playerData.highest.value) {
          playerData.highest = {name: allPlayers[i].championName, value: allPlayers[i].totalDamageDealtToChampions};
        }
      }
      // playerData[i] = {championName:}
    }
  }

  return(
    <div>
      this should show
    </div>
  )
}

export default TeamDamage;