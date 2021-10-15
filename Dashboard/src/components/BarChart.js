import React from 'react';
import {Bar} from 'react-chartjs-2';
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'consumption',
      backgroundColor: '#2196f3',
      borderColor: '#3f51b5',
      borderWidth: 1,
      hoverBackgroundColor: '#2196f3',
      hoverBorderColor: '#3f51b5',
      data: [65, 59, 80, 81, 56, 60, 80]
    }
  ]
};
const data1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'consumption',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [80,78,76,55,35,90,57]
    }
  ]
};
function BarChart({chart1}) {
  if(chart1) {
    return (
      <div>
          <Bar
            data={data}
            // width={100}
            height={200}
            options={{
              maintainAspectRatio: false
            }}
          />
      </div>
    );
  }
  else {
    return (
      <div>
          <Bar
            data={data1}
            // width={100}
            height={200}
            options={{
              maintainAspectRatio: false
            }}
          />
      </div>
    );
  }
  
}
export default BarChart;