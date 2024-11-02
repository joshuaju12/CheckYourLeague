import './playerStatistics.css';

function PlayerStatistics({rankedInfo}) {

  let lowestRank = "Unranked";
  let lowestTier = "";
  let lowestType = "";
  let lowestLP = 0;
  let lowestWin = 0;
  let lowestLoss = 0;
  let highestRank = "Unranked";
  let highestTier = "";
  let highestType = "";
  let highestLP = 0;
  let highestWin = 0;
  let highestLoss = 0;

  const rankedValues = {
    "IRON" : 0,
    "BRONZE" : 100,
    "SILVER" : 200,
    "GOLD" : 300,
    "PLATINUM" : 400,
    "EMERALD" : 500,
    "DIAMOND" : 600,
    "MASTER" : 700,
    "GRANDMASTER" : 800,
    "CHALLENGER" : 900,
  };

  const rankedTypes = {
    "RANKED_SOLO_5x5" : "Ranked Solo/Duo",
    "RANKED_FLEX_SR" : "Ranked Flex",
  };

  const rankedTier = {
    "I" : "1",
    "II" : "2",
    "III" : "3",
    "IV" : '4',
  };



  if (rankedInfo.length > 1) {
    let rankOne = rankedValues[rankedInfo[0].tier] + rankedInfo[0].leaguePoints;
    let rankTwo = rankedValues[rankedInfo[1].tier] + rankedInfo[1].leaguePoints;

    if (rankOne > rankTwo) {
      highestRank = rankedInfo[0].tier;
      highestRank = highestRank[0].toUpperCase() + highestRank.slice(1).toLowerCase();
      highestTier = rankedTier[rankedInfo[0].rank];
      highestType = rankedTypes[rankedInfo[0].queueType];
      highestLP = rankedInfo[0].leaguePoints;
      highestWin = rankedInfo[0].wins;
      highestLoss = rankedInfo[0].losses;
      lowestRank = rankedInfo[1].tier;
      lowestRank = lowestRank[0].toUpperCase() + lowestRank.slice(1).toLowerCase();
      lowestTier = rankedTier[rankedInfo[1].rank];
      lowestType = rankedTypes[rankedInfo[1].queueType];
      lowestLP = rankedInfo[1].leaguePoints;
      lowestWin = rankedInfo[1].wins;
      lowestLoss = rankedInfo[1].losses;
    } else {
      highestRank = rankedInfo[1].tier;
      highestRank = highestRank[0].toUpperCase() + highestRank.slice(1).toLowerCase();
      highestTier = rankedTier[rankedInfo[1].rank];
      highestType = rankedTypes[rankedInfo[1].queueType];
      highestLP = rankedInfo[1].leaguePoints;
      highestWin = rankedInfo[1].wins;
      highestLoss = rankedInfo[1].losses;
      lowestRank = rankedInfo[0].tier;
      lowestRank = lowestRank[0].toUpperCase() + lowestRank.slice(1).toLowerCase();
      lowestTier = rankedTier[rankedInfo[0].rank];
      lowestType = rankedTypes[rankedInfo[0].queueType];
      lowestLP = rankedInfo[0].leaguePoints;
      lowestWin = rankedInfo[0].wins;
      lowestLoss = rankedInfo[0].losses;
    };
  } else {
    if (rankedInfo.length === 1) {
      highestRank = rankedInfo[0].tier;
      highestRank = highestRank[0].toUpperCase() + highestRank.slice(1).toLowerCase();
      highestTier = rankedTier[rankedInfo[0].rank];
      highestType = rankedTypes[rankedInfo[0].queueType];
      highestLP = rankedInfo[0].leaguePoints;
      highestWin = rankedInfo[0].wins;
      highestLoss = rankedInfo[0].losses;
      if (highestType === "Solo/Duo") {
        lowestType = "Ranked Flex";
      } else  {
        lowestType = "Ranked Solo/Duo";
      }
    }  else {
      highestType = "Ranked Solo/Duo";
      lowestType = "Ranked Flex";
    }
  }

  return (
    <div className="playerStatisticsContainer">
      <div className="rankContainerWrapper">
        {rankedInfo.length === 0 ?
          <div className ="rankContainer">
            <div className="rankTypeWrapper">
              <div className="rankType">
                {highestType}
              </div>
            </div>
            <div className="rankInfo">
              <div className="rankInfoPlaceholder"></div>
            </div>
            <div>Unranked</div>
          </div> :
          <div className="rankContainer">
            <div className="rankTypeWrapper">
              <div className="rankType">
                {highestType}
              </div>
            </div>
            <div className="rankInfo">
              <img className="rankImage" src={require(`./assets/ranks/${highestRank.toUpperCase()}.png`)} alt="" />
            </div>
            <div>{highestRank} {highestTier}</div>
            <div className="rankStatisticsContainer">
              <div>{highestWin}W {highestLoss}L</div>
              <div>{highestLP} LP</div>
              <div>Win Rate {Math.floor(highestWin / (highestWin + highestLoss) * 100)}%</div>
            </div>
          </div>
        }
      </div>
      <div className="rankContainerWrapper">
        {rankedInfo.length === 0 ?
          <div className ="rankContainer">
          <div className="rankTypeWrapper">
            <div className="rankType">
              {lowestType}
            </div>
          </div>
          <div className="rankInfo">
            <div className="rankInfoPlaceholder"></div>
          </div>
          <div>Unranked</div>
        </div> :
        <div className="rankContainer">
          <div className="rankTypeWrapper">
            <div className="rankType">
              {lowestType}
            </div>
          </div>
          {rankedInfo.length === 1 ?
            <>
              <div className="rankInfo">
                <div className="rankInfoPlaceholder"></div>
              </div>
              <div>Unranked</div>
            </> :
            <>
            <div className="rankInfo">
                <img className="rankImage" src={require(`./assets/ranks/${lowestRank.toUpperCase()}.png`)} alt="" />
              </div>
              <div>{lowestRank} {lowestTier}</div>
              <div className="rankStatisticsContainer">
                <div>{lowestWin}W {lowestLoss}L</div>
                <div>{lowestLP} LP</div>
                <div>Win Rate {Math.floor(lowestWin / (lowestWin + lowestLoss) * 100)}%</div>
              </div>
            </>
          }
        </div>
        }
      </div>
    </div>
  )
}

export default PlayerStatistics;