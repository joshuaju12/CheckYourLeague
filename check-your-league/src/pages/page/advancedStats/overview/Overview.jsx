import Table from './Table.jsx';

function Overview({matchData, id}) {

  let players = matchData.info.participants;
  let team1;
  let team2;

  for (let i = 0; i < players.length; i++) {
    if (players[i].puuid === id) {
      if (i <= 4) {
        team1 = 0
        team2 = 1;
      } else {
        team1 = 1;
        team2 = 0;
      }
    }
  }

  return (
    <div>
      <Table matchData={matchData} team={team1} />
      <Table matchData={matchData} team={team2} />
    </div>
  )
}

export default Overview;

