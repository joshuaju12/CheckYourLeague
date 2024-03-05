import './matchDetails.css';
import {useState} from 'react';
import Kda from './advancedStats/Kda.jsx';
import LargestKillingSpree from './advancedStats/LargestKillingSpree.jsx';

function MatchDetails({matchData}) {
  const date = new Date(matchData.info.gameCreation);
  const [expanded, setExpanded] = useState(false);
  const [combatExpanded, setCombatExpanded] = useState(true);
  const [damageDealtExpanded, setDamageDealtExpanded] = useState(true);
  // console.log(matchData);


  const handleExpandClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  const handleCombatClick = (e) => {
    setCombatExpanded(!combatExpanded);
  }

  const handleDamageDealtClick = (e) => {
    setDamageDealtExpanded(!damageDealtExpanded);
  }


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
        <div className="extraStats">
          <div className="combatStats">
            <button onClick={handleCombatClick}> V Combat</button>
            {combatExpanded ?
              <div className="combatContainer">
                <div className="kda">
                  <div className="category">KDA</div>
                  <Kda matchData={matchData} />
                </div>
                <div className="largestKillingSpree">
                  <div className="category">Largest Killing Spree</div>
                  <LargestKillingSpree matchData={matchData} />
                </div>
                <div className="largestMultiKill">
                  <div className="category">Largest Multi Kill</div>
                </div>
                <div className="ccScore">
                  <div className="category">Crowd Control Score</div>
                </div>
                <div className="firstBlood">
                  <div className="category">First Blood</div>
                </div>
              </div>
              : null
            }
          </div>
          <div className="damageDealtStats">
            <button onClick={handleDamageDealtClick}> V Damage Dealt</button>
            {damageDealtExpanded ?
                <div>fes</div>
              : null
            }
          </div>
        </div>
        : null
      }
    </div>
  )
}


export default MatchDetails;