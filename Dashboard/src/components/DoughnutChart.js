import React from 'react';
import {Doughnut} from 'react-chartjs-2';
const data = {
  labels: [
    'Chrome',
    'IE',
    'Firefox'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};
const data1 = {
  labels: [
    'Chrome',
    'IE',
    'Firefox'
  ],
  datasets: [{
    data: [500,60,400],
    backgroundColor: [
    '#FF6425',
    '#42C5B4',
    '#ad9f27'
    ],
    hoverBackgroundColor: [
      '#FF6425',
      '#42C5B4',
      '#ad9f27'
    ]
  }]
};
function DoughnutChart({chart1}) {
  if(chart1) {
    return (
      <div>
          <Doughnut data={data} height={200} options={{ maintainAspectRatio: false }}/>
      </div>
    );
  }
  else {
    return (
      <div>
          <Doughnut data={data1} height={200} options={{ maintainAspectRatio: false }}/>
      </div>
    );
  }
 
}
export default DoughnutChart;