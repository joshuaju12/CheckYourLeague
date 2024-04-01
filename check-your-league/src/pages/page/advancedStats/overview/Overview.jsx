import Table from './Table.jsx';

function Overview({matchData}) {
  return (
    <div>
      <Table matchData={matchData} team={1} />
      <Table matchData={matchData} team={2} />
    </div>
  )
}

export default Overview;

