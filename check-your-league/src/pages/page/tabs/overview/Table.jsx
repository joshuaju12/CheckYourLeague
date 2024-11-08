import './table.css';
import {useNavigate} from 'react-router-dom'

function Table({matchData, team}) {

  const rows = [];
  const navigate = useNavigate();
  // console.log(matchData);


  const handleNavigate = (playerName, playerTag) => {
    return navigate("/page", {state: {name: playerName, tag: playerTag}});
  }

  const overviewNameOnClick = (playerData) => {
    handleNavigate(playerData.riotIdGameName, playerData.riotIdTagline);
    navigate(0);
  }

  if (team === 0) {
    for (let i = 0; i < 5; i++) {
      let playerData = matchData.info.participants[i];

      rows.push(
        <tr className="rowContainer" key={i}>
          <td className="teamContainer">
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
                    {/* <div className="nameHeader">{playerData.riotIdGameName}</div> */}
                    <div className="nameHeaderWrapper">
                      <span onClick={() => overviewNameOnClick(playerData)}>{playerData.riotIdGameName}</span>
                    </div>
                    <div>{playerData.championName}</div>
                  </td>
                  <td>
                    <div>
                      <img className="itemImage" src={require(`./assets/items/${playerData.item0}.png`)} alt ="" />
                      <img className="itemImage" src={require(`./assets/items/${playerData.item1}.png`)} alt ="" />
                      <img className="itemImage" src={require(`./assets/items/${playerData.item2}.png`)} alt ="" />
                      <img className="itemImage" src={require(`./assets/items/${playerData.item3}.png`)} alt ="" />
                      <img className="itemImage" src={require(`./assets/items/${playerData.item4}.png`)} alt ="" />
                      <img className="itemImage" src={require(`./assets/items/${playerData.item5}.png`)} alt ="" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="kdaValue">{playerData.kills}/{playerData.deaths}/{playerData.assists}</td>
          <td>
            <table>
              <tbody>
                <tr className="damageContainer">
                  <td className="damageDealt">{playerData.totalDamageDealtToChampions}</td>
                  <td className="damageReceived">{playerData.totalDamageTaken}</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="cellContent">{playerData.timeCCingOthers}</td>
          <td className="cellContent">{playerData.totalHeal}</td>
          <td className="cellContent">{playerData.totalDamageShieldedOnTeammates}</td>
          <td className="cellContent">{playerData.totalMinionsKilled}</td>
          <td className="cellContent">{playerData.goldEarned}</td>
        </tr>
      )
    }
  } else {
    for (let i = 5; i < 10; i++) {
      let playerData = matchData.info.participants[i];
      rows.push(
        <tr className="rowContainer" key={i}>
          <td className="teamContainer">
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
                    <div className="nameHeaderWrapper">
                      <span onClick={() => overviewNameOnClick(playerData)}>{playerData.riotIdGameName}</span>
                    </div>
                    {/* <div className="nameHeader">{playerData.riotIdGameName}</div> */}
                    <div>{playerData.championName}</div>
                  </td>
                  <td>
                    <div>
                      <img className="itemImage" src={require(`./assets/items/${playerData.item0}.png`)} alt ="" />
                      <img className="itemImage" src={require(`./assets/items/${playerData.item1}.png`)} alt ="" />
                      <img className="itemImage" src={require(`./assets/items/${playerData.item2}.png`)} alt ="" />
                      <img className="itemImage" src={require(`./assets/items/${playerData.item3}.png`)} alt ="" />
                      <img className="itemImage" src={require(`./assets/items/${playerData.item4}.png`)} alt ="" />
                      <img className="itemImage" src={require(`./assets/items/${playerData.item5}.png`)} alt ="" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="kdaValue">{playerData.kills}/{playerData.deaths}/{playerData.assists}</td>
          <td>
            <table>
              <tbody>
                <tr className="damageContainer">
                  <td className="damageDealt">{playerData.totalDamageDealtToChampions}</td>
                  <td className="damageReceived">{playerData.totalDamageTaken}</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="cellContent">{playerData.timeCCingOthers}</td>
          <td className="cellContent">{playerData.totalHeal}</td>
          <td className="cellContent">{playerData.totalDamageShieldedOnTeammates}</td>
          <td className="cellContent">{playerData.totalMinionsKilled}</td>
          <td className="cellContent">{playerData.goldEarned}</td>
        </tr>
      )
    }
  }



  return (
    <div className="overViewTableWrapper" style={{backgroundColor: matchData.info.teams[team].win ? "#03868c" : "#992525"}}>
      <table className="overViewTable">
        <thead>
          <tr className="headerContainer">
            {matchData.info.teams[team].win ?
              <th className="nameHeader">Victory</th>
              : <th className="nameHeader">Defeat</th>
            }
            <th className="kdaHeader">KDA</th>
            <th className="damageHeader">Damage</th>
            <th className="ccHeader">CC</th>
            <th className="healsHeader">Heals</th>
            <th className="shieldsHeader">Shields</th>
            <th>CS</th>
            <th>Gold</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
};

export default Table;