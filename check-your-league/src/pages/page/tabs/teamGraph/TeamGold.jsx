import './teamGold.css';
import {Line} from 'react-chartjs-2';
import moment from 'moment';
import 'chartjs-adapter-moment';

function TeamGold ({data}) {
  console.log(data);

  const getGoldDifference = (index) => {

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
          timeStamps.push(moment(`00:${Math.floor(data[data.length - 1].timestamp / 60000)}:${Math.round((data[data.length - 1].timestamp % 60000) / 1000)}:00`, "h:mm:ss"))
        }
        break;
      }

      if (data[current].timestamp / 60000 >= 60) {
        timeStamps.push(moment(`${Math.floor(currentTime / 60000)}:${Math.round((currentTime / 60000) % .6) * 100}:00`, "h:mm:ss"));
      } else {
        timeStamps.push(moment(`00:${Math.floor(currentTime / 60000)}:${Math.round((currentTime % 60000) / 1000)}:00`, "h:mm:ss"))
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
        goldData.push({"x": moment(`${Math.floor(currentTime) / 60000}: ${Math.round((currentTime / 60000) % .6) * 100}:00`, "h:mm:ss")})
        // need to add y value. It's going to call getGoldDifference, passing the index, then returns a positive or negative number for now.
      }
    }
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          title: function(tooltipItems, data) {
            return '';
          },
          // value: function(tooltipItems, data) {
//
          // },
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
      }
    }
  }

  const labels = [
    moment("0:15:00", "h:mm:ss"),
    moment("0:30:00", "h:mm:ss"),
    moment("0:0:00", "h:mm:ss"),
    moment("0:45:00", "h:mm:ss"),
    moment("1:0:00", "h:mm:ss"),
  ]

  const generateTestSeries = () => {
    let series = [{"x": moment("00:10:00", "h:mm:ss"), "y": 30}];
    return series;
  }

  const testData = {
    labels: getLabels(),
    datasets: [{
      label: 'Test',
      data: generateTestSeries(),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return(
    <div className="teamGoldContainer">
      <Line
        data={testData}
        options={options}
      />
    </div>
  )
}

export default TeamGold;