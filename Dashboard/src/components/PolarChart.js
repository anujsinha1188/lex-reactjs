import React, { Component } from "react";

import { Polar } from "react-chartjs-2";

export class PolarChart extends Component {
  constructor(props) {
    super(props);

    this.state = { Data: {} , Data1: {}};
  }

  componentDidMount() {

        let coursename = ['Angular','React','Node'];

        let score = [900,1200,1500];
        let score1 = [500,600,800];

        this.setState({
          Data: {
            labels: coursename,

            datasets: [
              {

                data: score,

                backgroundColor: [
                  "#3cb371",

                  "#0000FF",

                  "#9966FF",

                  "#4C4CFF",

                  "#00FFFF",

                  "#f990a7",

                  "#aad2ed",

                  "#FF00FF",

                  "Blue",

                  "Red",
                ],
              },
            ],
          },
          Data1: {
            labels: coursename,

            datasets: [
              {

                data: score1,

                backgroundColor: [
                  "#cddc39",

                  "#ff9800",

                  "#9c27b0",
                ],
              },
            ],
          },
        });
  }

  render() {
    if(this.props.chart1) {
      return (
        <div>
          <Polar
            data={this.state.Data}
            options={{ maintainAspectRatio: false }}
            height={200}
          />
        </div>
      );
    }
    else {
      return (
        <div>
          <Polar
            data={this.state.Data1}
            options={{ maintainAspectRatio: false }}
            height={200}
          />
        </div>
      );
    }

  }
}

export default PolarChart;
