import './teamGold.css';
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import moment from 'moment';
import 'chartjs-adapter-moment';

function TeamGold ({data}) {
  console.log(data);
  // console.log(moment("00:15", "hh:mm"))


  // (async function() {
  //   new Chart(
  //     document.getElementById('teamGoldGraph'),
  //     {
  //       type: 'line',
  //       options: {
  //         animation: false,
  //         scales: {
  //           xAxis: {
  //             type: 'time',
  //             ticks: {
  //               source: 'labels'
  //             },
  //             time: {
  //               minUnit: 'minute',
  //               displayFormats: {
  //                 minute: "HH:mm",
  //                 hour: "dd/MM HH:mm",
  //                 day: "dd/MM",
  //                 week: "dd/MM",
  //                 month: "MMMM yyyy",
  //                 quarter: 'MMMM yyyy',
  //                 year: "yyyy",
  //               }
  //             }
  //           }
  //         }
  //       },
  //       data: {
  //         labels: ['0:15', '0:30'],
  //         datasets: [
  //           {
  //             label: 'test',
  //             data: [4, 5]
  //           }
  //         ]
  //       }
  //     }
  //   );
  // })();

  const options = {
    scales: {
      x: {
        type: 'time',
        ticks: {
          source: 'labels',
        },
        time: {
          parser: "HH:mm",
          // minUnit: 'minute',
          displayFormats: {
            minute: "HH:mm",
            hour: "HH:mm",
            day: "HH:mm",
            week: "HH:mm",
            month: "HH:mm",
            quarter: 'HH:mm',
            year: "HH:mm",
          }
        }
      }
    }
  }

  // const labels = [
  //   "0:15",
  //   "0:30"
  // ];


  const labels = [
    moment("00:00", "hh:mm"),
    moment("00:15", "hh:mm"),
    moment("00:30", "hh:mm"),
    moment("00:45", "hh:mm"),
    moment("01:00", "hh:mm"),
  ]

  const generateTestSeries = () => {
    let series = [{"x": moment("00:10", "hh:mm"), "y": 20}, {"x": moment("00:20", "hh:mm"), "y": 40}, {"x": moment("00:30", "hh:mm"), "y": -40}];
    // let temp = 15;
    // for (let i = 0; i < 5; i++) {
    //   series.push({"x": `0:${(temp + 1).toString()}` , "y": 20})
    //   temp++;
    // }
    // for (let i = 0; i < labels.length; i++) {
//
      // series.push({"x": moment("00:10", "hh:mm"), "y": 20})
    // }
    return series;
  }

  const testData = {
    labels: labels,
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
      {/* <canvas id="teamGoldGraph"></canvas> */}
      <Line
        data={testData}
        options={options}
      />
    </div>
  )
}

export default TeamGold;