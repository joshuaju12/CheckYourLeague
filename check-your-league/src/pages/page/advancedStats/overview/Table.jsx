import './table.css';
import {exhaust, barrier, ghost, ignite, flash, heal, clarity, smite, snowball} from './assets/summonerSpells';

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
          <td className="test">{playerData.riotIdGameName}</td>
          <td>{playerData.kills}/{playerData.deaths}/{playerData.assists}</td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>{playerData.totalDamageDealtToChampions}</td>
                  <td>{playerData.totalDamageTaken}</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>{playerData.timeCCingOthers}</td>
          <td>{playerData.totalMinionsKilled}</td>
          <td>{playerData.goldEarned}</td>
        </tr>
      )
    }
  } else {
    start = 5;
    for (let i = 5; i < 10; i++) {
      let playerData = matchData.info.participants[i];
      rows.push(
        <tr key={i}>
          <td>{playerData.riotIdGameName}</td>
          <td>{playerData.kills}/{playerData.deaths}/{playerData.assists}</td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>{playerData.totalDamageDealtToChampions}</td>
                  <td>{playerData.totalDamageTaken}</td>
                </tr>
              </tbody>
            </table>
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
    <table className="overViewTable">
      <thead>
        <tr>
          <th className="nameHeader">Name</th>
          <th>KDA</th>
          <th>Damage</th>
          <th>CC Score</th>
          <th>CS</th>
          <th>Gold</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
};

export default Table;