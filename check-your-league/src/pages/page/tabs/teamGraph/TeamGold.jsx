import './teamGold.css';
import {Line} from 'react-chartjs-2';
import {Chart} from 'chart.js/auto';
import moment from 'moment';
import 'chartjs-adapter-moment';


function TeamGold ({data}) {
  let highest;
  let lowest;

  const getGoldDifference = (index) => {
    let teamOneGold = 0;
    let teamTwoGold = 0;
    for (let i = 0; i < Object.keys(data[index].participantFrames).length; i++) {

      if (i < 5) {
        teamOneGold = teamOneGold + data[index].participantFrames[(i + 1).toString()].totalGold;
      } else {
        teamTwoGold = teamTwoGold + data[index].participantFrames[(i + 1).toString()].totalGold;
      }
    };

    if ((teamOneGold - teamTwoGold) < 0) {
      if (lowest) {
        if ((teamOneGold - teamTwoGold) < lowest) {
          lowest = teamOneGold - teamTwoGold;
        }
      } else {
        lowest = teamOneGold - teamTwoGold;
      }
    } else {
      if (highest) {
        if ((teamOneGold - teamTwoGold) > highest) {
          highest = teamOneGold - teamTwoGold;
        }
      } else {
        highest = teamOneGold - teamTwoGold;
      }
    }

    return teamOneGold - teamTwoGold;
  }

  const getLabels = () => {
    let timeStamps = [];
    let current = 0;
    let step;
    if ((data.length / 5) % 1 === 0.5) {
      step = Math.floor(data.length / 6);
    } else {
      step = Math.round(data.length / 6);
    }
    for (let i = 0; i < 6; i++) {
      let currentTime = data[current].timestamp;

      if (i === 5) {
        if (data[data.length - 1].timestamp / 60000 >= 60) {
          timeStamps.push(moment(`${Math.floor(data[data.length - 1].timestamp / 60000)}:${Math.round((data[data.length - 1].timestamp / 60000) % .6) * 100}:00`, "h:mm:ss"));
        } else {
          timeStamps.push(moment(`00:${Math.floor(data[data.length - 1].timestamp / 60000)}:${Math.round((data[data.length - 1].timestamp % 60000) / 1000)}`, "h:mm:ss"))
        }
        break;
      }

      if (data[current].timestamp / 60000 >= 60) {
        timeStamps.push(moment(`${Math.floor(currentTime / 60000)}:${Math.round((currentTime / 60000) % .6) * 100}:00`, "h:mm:ss"));
      } else {
        timeStamps.push(moment(`00:${Math.floor(currentTime / 60000)}:${Math.round((currentTime % 60000) / 1000)}`, "h:mm:ss"))
      }
      current = current + step;
    }
    return timeStamps;
  }

  const getData = () => {
    const goldData = [];
    for (let i = 0; i < data.length; i++) {
      let currentTime = data[i].timestamp;

      if (currentTime / 60000 >= 60) {
        goldData.push({"x": moment(`${Math.floor(currentTime) / 60000}: ${Math.round((currentTime / 60000) % .6) * 100}:00`, "h:mm:ss"), "y": getGoldDifference(i)});
      } else {
        goldData.push({"x": moment(`00:${Math.floor(currentTime / 60000)}:00`, "h:mm:ss"), "y": getGoldDifference(i)});
      }
    }
    return goldData;
  };

  const getFillerData = () => {
    return [{"x": moment("00:00:00", "h:mm:ss"), "y": -(highest)}, {"x": moment("00:00:00", "h:mm:ss"), "y": -(lowest)}]
  };

  const options = {
    animation: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItems, data) {
            if (Number(tooltipItems.formattedValue.replaceAll(',', '')) > 0) {
              return `Blue ahead by ${Number(tooltipItems.formattedValue.replaceAll(',', ''))}`;
            }
            if (Number(tooltipItems.formattedValue.replaceAll(',', '')) < 0) {
              return `Red ahead by ${-Number(tooltipItems.formattedValue.replaceAll(',', ''))}`;
            }
            if (Number(tooltipItems.formattedValue) === 0) {
              return 'Even gold';
            }
          },
          title: function(tooltipItems, data) {
            return '';
          },
          value: function(tooltipItems, data) {
            console.log(data);
            return '';
          },
        }
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        type: 'time',
        ticks: {
          source: 'labels',
        },
        time: {
          parser: "h:mm:ss",
          displayFormats: {
            minute: "mm",
            hour: "mm:ss",
            day: "mm:ss",
            week: "mm:ss",
            month: "mm:ss",
            quarter: "mm:ss",
            year: "mm:ss",
          }
        }
      },
      y: {
        ticks: {
          callback: function(value, index, values) {
            return value < 0 ? `${-value / 1000}k` : `${value / 1000}k`;
          }
        }
      }
    },
  }

  const gameData = {
    labels: getLabels(),
    datasets: [
      {
        label: 'Gold',
        data: getData(),
        pointBackgroundColor: 'transparent',
        fill: {
          target: 'origin',
          above: 'rgba(107, 174, 255, 0.5)',
          below: 'rgba(255, 71, 90, 0.5)'
        },
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: "Filler",
        data: getFillerData(),
        fill: false,
        pointRadius: 0,
        tension: 0,
        showLine: false,
      }
    ]
  };


  return(
    <div className="teamGoldContainer">
      <Line
        id="teamGoldChart"
        data={gameData}
        options={options}
      />
    </div>
  )
}

export default TeamGold;