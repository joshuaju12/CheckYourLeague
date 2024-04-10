import './table.css';

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
          <td>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img className="smallImage" src={require(`./assets/champions/${playerData.championName}.png`)} alt="" />
                  </td>
                  <td>
                    <div>
                      <img className="overviewSummonerImage" src={require(`./assets/summonerSpells/${playerData.summoner1Id}.png`)} alt="" />
                    </div>
                    <div>
                      <img className="overviewSummonerImage" src={require(`./assets/summonerSpells/${playerData.summoner2Id}.png`)} alt="" />
                    </div>
                  </td>
                  <td>
                    <div>
                      <img className="overviewRuneImage" src={require(`./assets/runes/${playerData.perks.styles[0].selections[0].perk}.png`)} alt="" />
                    </div>
                    <div>
                      <img className="overviewRuneImage" src={require(`./assets/runes/${playerData.perks.styles[1].style}.png`)} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="nameHeader">{playerData.riotIdGameName}</div>
                    <div>{playerData.championName}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
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
          <td>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img className="smallImage" src={require(`./assets/champions/${playerData.championName}.png`)} alt="" />
                  </td>
                  <td>
                    <div>
                      <img className="overviewSummonerImage" src={require(`./assets/summonerSpells/${playerData.summoner1Id}.png`)} alt="" />
                    </div>
                    <div>
                      <img className="overviewSummonerImage" src={require(`./assets/summonerSpells/${playerData.summoner2Id}.png`)} alt="" />
                    </div>
                  </td>
                  <td>
                    <div>
                      <img className="overviewRuneImage" src={require(`./assets/runes/${playerData.perks.styles[0].selections[0].perk}.png`)} alt="" />
                    </div>
                    <div>
                      <img className="overviewRuneImage" src={require(`./assets/runes/${playerData.perks.styles[1].style}.png`)} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="nameHeader">{playerData.riotIdGameName}</div>
                    <div>{playerData.championName}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
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



  return (
    <table className="overViewTable">
      <thead>
        <tr>
          <th className="nameHeader">Team</th>
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