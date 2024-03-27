
function Table({matchData, team}) {
  let start;
  const rows = [];
  console.log(matchData);

  if (team === 1) {
    start = 0;
    for (let i = 0; i < 5; i++) {
      let playerData = matchData.info.participants[i];
      rows.push(
        <tr key={i}>
          <td>{playerData.riotIdGameName}</td>
          <td>{playerData.kills}/{playerData.deaths}/{playerData.assists}</td>
          <td>
            <td>{playerData.totalDamageDealtToChampions}</td>
            <td>{playerData.totalDamageTaken}</td>
          </td>
          <td>{playerData.timeCCingOthers}</td>
          <td>{playerData.totalMinionsKilled}</td>
          <td>{playerData.goldEarned}</td>
        </tr>
      )
    }
    console.log(rows);
  } else {
    start = 5;
    for (let i = 5; i < 10; i++) {
      let playerData = matchData.info.participants[i];
      rows.push(
        <tr key={i}>
          <td>{playerData.riotIdGameName}</td>
          <td>{playerData.kills}/{playerData.deaths}/{playerData.assists}</td>
          <td>
            <td>{playerData.totalDamageDealtToChampions}</td>
            <td>{playerData.totalDamageTaken}</td>
          </td>
          <td>{playerData.timeCCingOthers}</td>
          <td>{playerData.totalMinionsKilled}</td>
          <td>{playerData.goldEarned}</td>
        </tr>
      )
    }
  }



  console.log(start);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>KDA</th>
          <th>Damage</th>
          <th>CC Score</th>
          <th>CS</th>
          <th>Gold</th>
          <th>Build</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
};

export default Table;