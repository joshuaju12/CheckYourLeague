import './profileHeader.css';

function ProfileHeader({userInfo, name, tag, rankedInfo}) {
  // console.log(rankedInfo);
  let highestRank;
  let lp;
  let queue;
  const tierList = {
    IRON: 0,
    BRONZE: 1,
    SILVER: 2,
    GOLD: 3,
    PLATINUM: 4,
    EMERALD: 5,
    DIAMOND: 6,
    MASTER: 7,
    GRANDMASTER: 8,
    CHALLENGER: 9,
  };

  const numerals = {
    I: "1",
    II: "2",
    III: "3",
    IV: "4",
  };

  const queueType = {
    RANKED_FLEX_SR: "Flex",
    RANKED_SOLO_5x5: "Solo/Duo",
  };

  const findHighestRank = (data) => {
    if (data.length === 0) {
      highestRank = 'Unranked';
      return;
    };
    if (data.length > 1) {
      let rankOne = data[0];
      let rankTwo = data[1];
      if (tierList[rankOne.tier] >= tierList[rankTwo.tier]) {
        highestRank = rankOne.tier[0] + rankOne.tier.slice(1).toLowerCase() + " " + numerals[rankOne.rank];
        lp = rankOne.leaguePoints;
        queue = queueType[rankOne.queueType];
      } else {
        if (tierList[rankOne.tier] < tierList[rankTwo.tier]) {
          highestRank = rankTwo.tier[0] + rankTwo.tier.slice(1).toLowerCase() + " " + numerals[rankTwo.rank];
          lp = rankTwo.leaguePoints;
          queue = queueType[rankTwo.queueType];
        };
      };
    };
  };

  findHighestRank(rankedInfo);


  return (
    <div className="profileWrapper">
      <img className="profileIcon" src={require(`./assets/profileIcon/${userInfo.iconId}.png`)} alt="" />
      <div className=" playerDetailsWrapper">
        <span>{name} </span>
        <span> #{tag}</span>
      </div>
    </div>
  );
};

export default ProfileHeader;