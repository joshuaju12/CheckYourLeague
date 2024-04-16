import './matchDetails.css';
import {useState} from 'react';
import {formatDistanceStrict} from 'date-fns';
import Tabtitle from './advancedStats/TabTitle.jsx';
import TabContent from './advancedStats/TabContent.jsx';
import Overview from './advancedStats/overview/Overview.jsx';

function MatchDetails({matchData, id}) {

  const date = formatDistanceStrict(new Date(matchData.info.gameCreation), new Date(), {addSuffix: true});
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  // console.log(matchData);


  const handleExpandClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div className="matchContainer">
      <div className="detailsContainer">
        <div className="overalInfo">
          <div>
            <div>{date}</div>
            <div className="playersContainer">
              <div className="team1">
                <div>{matchData.info.participants[0].riotIdGameName}</div>
                <div>{matchData.info.participants[1].riotIdGameName}</div>
                <div>{matchData.info.participants[2].riotIdGameName}</div>
                <div>{matchData.info.participants[3].riotIdGameName}</div>
                <div>{matchData.info.participants[4].riotIdGameName}</div>
              </div>
              <div className="team2">
                <div>{matchData.info.participants[5].riotIdGameName}</div>
                <div>{matchData.info.participants[6].riotIdGameName}</div>
                <div>{matchData.info.participants[7].riotIdGameName}</div>
                <div>{matchData.info.participants[8].riotIdGameName}</div>
                <div>{matchData.info.participants[9].riotIdGameName}</div>
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