import Table from './Table.jsx';
import './overview.css';

function Overview({matchData, id}) {

  let players = matchData.info.participants;
  let teamOne;
  let teamTwo;
  let teamOneKills = 0;
  let teamTwoKills = 0;
  let teamOneGold = 0;
  let teamTwoGold = 0;

  for (let i = 0; i < players.length; i++) {
    if (players[i].puuid === id) {
      if (i <= 4) {
        teamOne = 0;
        teamTwo = 1;
      } else {
        teamOne = 1;
        teamTwo = 0;
      }
    }
    if (i <= 4) {
      teamOneKills = teamOneKills + players[i].kills;
      teamOneGold = teamOneGold + players[i].goldEarned;
    } else {
      teamTwoKills = teamTwoKills + players[i].kills;
      teamTwoGold = teamTwoGold + players[i].goldEarned;
    }
  }

  return (
    <div>
      <Table matchData={matchData} team={teamOne} />
      <div className="teamComparisonContainer">
        {teamOne === 0  && matchData.info.teams[0].win ?
          <div className="teamOneStatus">Victory</div>
          : <div className="teamOneStatus">Defeat</div>
        }
        <div className="comparisonContainer">
          <div className="killComparisonContainer">
              {teamOne === 0 ?
                <span>
                  {teamOneKills}
                </span>
                : <span>
                  {teamTwoKills}
                </span>
              }
              <img className="killIcon" src={require('./assets/icons/kills.png')} alt=""/>
              {teamOne === 0 ?
                <span>
                  {teamTwoKills}
                </span>
                : <span>
                  {teamOneKills}
                </span>
              }
            </div>
          <div className="goldComparisonContainer">
            {teamOne === 0 ?
              <span>
                {teamOneGold}
              </span>
              : <span>
                {teamTwoGold}
              </span>
            }
            <img className = "goldIcon" src={require('./assets/icons/gold.png')} alt="" />
            {teamOne === 0 ?
              <span>
                {teamTwoGold}
              </span>
              : <span>
                {teamOneGold}
              </span>
            }
          </div>
        </div>
        {/* <div>content3</div> */}
        {teamOne === 0 && matchData.info.teams[0].win ?
          <div className="teamTwoStatus">Defeat</div>
          : <div className="teamTwoStatus">Victory</div>
        }
      </div>
      <Table matchData={matchData} team={teamTwo} />
    </div>
  )
}

export default Overview;

