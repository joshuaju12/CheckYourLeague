import './playerStatistics.css';

function PlayerStatistics({rankedInfo}) {

  // console.log(rankedInfo);

  let lowestRank = "Unranked";
  let lowestTier = "";
  let lowestType = "";
  let highestRank = "Unranked";
  let highestTier = "";
  let highestType = "";

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
    "RANKED_SOLO_5X5" : "Solo/Duo",
    "RANKED_FLEX_SR" : "Flex",
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
      lowestRank = rankedInfo[1].tier;
      lowestRank = lowestRank[0].toUpperCase() + highestRank.slice(1).toLowerCase();
      lowestTier = rankedTier[rankedInfo[1].rank];
      lowestType = rankedTypes[rankedInfo[1].queueType];
    } else {
      highestRank = rankedInfo[1].tier;
      highestRank = highestRank[0].toUpperCase() + highestRank.slice(1).toLowerCase();
      highestTier = rankedTier[rankedInfo[1].rank];
      highestType = rankedTypes[rankedInfo[1].queueType];
      lowestRank = rankedInfo[0].tier;
      lowestRank = lowestRank[0].toUpperCase() + highestRank.slice(1).toLowerCase();
      lowestTier = rankedTier[rankedInfo[0].rank];
      lowestType = rankedTypes[rankedInfo[0].queueType];
    };
  } else {
    highestRank = rankedValues[rankedInfo[0].tier];
    highestTier = rankedTier[rankedInfo[0].rank];
    highestType = rankedTypes[rankedInfo[0].queueType];
    if (highestType === "Solo/Duo") {
      lowestType = "Flex";
    } else  {
      lowestType = "Solo/Duo";
    }
  }

  return (
    <div className="playerStatisticsContainer">
      <div className="highestRankContainer"></div>
      <div className="lowestRankContainer"></div>
    </div>
  )
}

export default PlayerStatistics;