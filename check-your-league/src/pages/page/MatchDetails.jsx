import './matchDetails.css';
import {useState} from 'react';
import {formatDistanceStrict} from 'date-fns';
import Tabtitle from './tabs/TabTitle.jsx';
import TabContent from './tabs/TabContent.jsx';
import Overview from './tabs/overview/Overview.jsx';
import QueueType from './QueueType.jsx';

function MatchDetails({matchData, id}) {

  const date = formatDistanceStrict(new Date(matchData.info.gameCreation), new Date(), {addSuffix: true});
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  // console.log(matchData.info.queueId);
  let players = matchData.info.participants;
  let player;
  let team;

  for (let i = 0; i < players.length; i++) {
    if (players[i].puuid === id) {
      player = i;

      if (i <= 4) {
        team = 0;
      } else {
        team = 1;
      }
      break;
    }
  }

  const handleExpandClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div className="matchContainer">
      <div className="detailsContainer">
        <div className="overallInfo">
          <div>
            <div>{date}</div>
            <div className="playersContainer">
              <div className="team1">
                <div>{players[0].riotIdGameName}</div>
                <div>{players[1].riotIdGameName}</div>
                <div>{players[2].riotIdGameName}</div>
                <div>{players[3].riotIdGameName}</div>
                <div>{players[4].riotIdGameName}</div>
              </div>
              <div className="team2">
                <div>{players[5].riotIdGameName}</div>
                <div>{players[6].riotIdGameName}</div>
                <div>{players[7].riotIdGameName}</div>
                <div>{players[8].riotIdGameName}</div>
                <div>{players[9].riotIdGameName}</div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleExpandClick}>V</button>
      </div>
      <div className="detailsContainer2">
        <div className="overallGameDetails">
          <div className="overallGameDetailsType">
            <QueueType id={matchData.info.queueId} />
            <div>{date}</div>
          </div>
          <div className="overallGameDetailsOutcome">
            <div>{matchData.info.teams[team].win ? "Victory" : "Defeat"}</div>
            <div>{Math.floor(matchData.info.gameDuration / 60)}m {matchData.info.gameDuration % 60}s</div>
          </div>
        </div>
        <div className="overallPlayerDetails">
          <div className="overallPlayerDetailsChampion">
            <img src={require(`./tabs/overview/assets/champions/${players[player].championName}.png`)} alt=''/>
          </div>
          <div className="overallPlayerDetailsSums">
            <img src={require(`./tabs/overview/assets/summonerSpells/${players[player].summoner1Id}.png`)} alt='' />
            <img src={require(`./tabs/overview/assets/summonerSpells/${players[player].summoner2Id}.png`)} alt='' />
          </div>
          <div className="overallPlayerDetailsRunes">
            <img src={require(`./tabs/overview/assets/runes/${players[player].perks.styles[0].selections[0].perk}.png`)} alt='' />
            <img src={require(`./tabs/overview/assets/runes/${players[player].perks.styles[1].style}.png`)} alt='' />
          </div>
          <div className="overallPlayerDetailsStats">
            <div>{players[player].kills} / {players[player].deaths} / {players[player].assists}</div>
            <div>{players[player].championName}</div>
          </div>
        </div>
        <div className="overallPlayerStats">
          player stats
        </div>
        <div className="overallAllPlayers">
          overall All players
        </div>
      </div>
      {expanded ?
        <div className="statsContainer">
          <div className="tabs">
            <ul className="nav">
              <Tabtitle title="Overview" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
              <Tabtitle title="Stats" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
              <Tabtitle title="Gold Graph" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
              <Tabtitle title="Build" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab} />
            </ul>
          </div>
          <TabContent id="tab1" currentTab={activeTab}>
            <Overview matchData={matchData} id={id}/>
          </TabContent>
          <div>combat stuff</div>
        </div>
        : null
      }
    </div>
  )
}


export default MatchDetails;