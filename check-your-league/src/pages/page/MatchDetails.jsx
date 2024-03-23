import './matchDetails.css';
import {useState} from 'react';
import Tabtitle from './advancedStats/TabTitle.jsx';
import TabContent from './advancedStats/TabContent.jsx';
import Overview from './advancedStats/overview/Overview.jsx';

function MatchDetails({matchData}) {
  const date = new Date(matchData.info.gameCreation);
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  console.log(matchData);


  const handleExpandClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div className="matchContainer">
      <div className="detailsContainer">
        <div className="overalInfo">
          <div>
            <div>Date: {date.toLocaleDateString('en-US')}</div>
            <div className="playersContainer">
              <div className="team1">
                <div>{matchData.info.participants[0].summonerName}</div>
                <div>{matchData.info.participants[1].summonerName}</div>
                <div>{matchData.info.participants[2].summonerName}</div>
                <div>{matchData.info.participants[3].summonerName}</div>
                <div>{matchData.info.participants[4].summonerName}</div>
              </div>
              <div className="team2">
                <div>{matchData.info.participants[5].summonerName}</div>
                <div>{matchData.info.participants[6].summonerName}</div>
                <div>{matchData.info.participants[7].summonerName}</div>
                <div>{matchData.info.participants[8].summonerName}</div>
                <div>{matchData.info.participants[9].summonerName}</div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleExpandClick}>V</button>
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
            <Overview matchData={matchData} />
          </TabContent>
          <div>combat stuff</div>
        </div>
        : null
      }
    </div>
  )
}


export default MatchDetails;