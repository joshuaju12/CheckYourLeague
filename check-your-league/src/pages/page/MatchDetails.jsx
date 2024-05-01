import './matchDetails.css';
import {useState} from 'react';
import {formatDistanceStrict} from 'date-fns';
import Tabtitle from './tabs/TabTitle.jsx';
import TabContent from './tabs/TabContent.jsx';
import Overview from './tabs/overview/Overview.jsx';
import QueueType from './QueueType.jsx';
import OverallPlayers from './OverallPlayers.jsx';
import GamesPlayedAs from './GamesPlayedAs.jsx';
import Stats from './tabs/stats/Stats.jsx';

function MatchDetails({matchData, matchId, id}) {

  const date = formatDistanceStrict(new Date(matchData.info.gameCreation), new Date(), {addSuffix: true});
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  let players = matchData.info.participants;
  let player;
  let team;
  let kills = {
    '0' : 0,
    '1' : 0,
  }
  let puuidToChamp = {

  };


  for (let i = 0; i < players.length; i++) {
    if (players[i].puuid === id) {
      player = i;
      if (i <= 4) {
        team = 0;
      } else {
        team = 1;
      }
    }
    if (i <= 4) {
      kills['0'] += players[i].kills;
    } else {
      kills['1'] += players[i].kills;
    }
    puuidToChamp[players[i].puuid] = players[i].championName;
  }

  const handleExpandClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div className="matchContainer">
      <div className="detailsContainer">
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
          <div className="overallPlayerDetailsWrapper">
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
          <GamesPlayedAs puuid={players[player].puuid} championName={players[player].championName} championId={players[player].championId} />
        </div>
        <div className="overallPlayerStats">
          <div className="overallPlayerStatsWrapper">
            <div>CS {players[player].totalMinionsKilled + players[player].neutralMinionsKilled}</div>
            <div>Kill% {Math.ceil((players[player].kills + players[player].assists) / kills[team] * 100)}</div>
            <div>Damage {(players[player].totalDamageDealtToChampions / 1000).toFixed(1)}k</div>
            <div>Vision Score {players[player].visionScore}</div>
          </div>
        </div>
        <OverallPlayers players={players} />
        {expanded ?
          <button className="buttonFlipped button" onClick={handleExpandClick}>V</button>
          :  <button className="button" onClick={handleExpandClick}>V</button>

        }
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
            <Overview matchData={matchData} id={id} />
          </TabContent>
          <TabContent id="tab2" currentTab={activeTab}>
            <Stats matchId={matchId} puuidToChamp={puuidToChamp} />
          </TabContent>
        </div>
        : null
      }
    </div>
  )
}


export default MatchDetails;