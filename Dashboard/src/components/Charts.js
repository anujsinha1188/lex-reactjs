import React from "react";
import CardsProps from "../card/Card";
import Scroller from "./Scroller";
import NavBar from "../navbar/NavBar";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import PolarChart from "./PolarChart";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import BarChartIcon from "@material-ui/icons/BarChart";
import MultilineChartIcon from "@material-ui/icons/MultilineChart";
import PieChartIcon from "@material-ui/icons/PieChart";

export default class Charts extends React.Component {
  constructor() {
    super();
    this.infiniteRef = React.createRef();
    this.state = {
      cardsSet1: [
        {
          title: "Top 3 consumed courses",
          chart: <PolarChart chart1="true" />,
          icon: (
            <PieChartIcon style={{ color: "blue", verticalAlign: "middle" }} />
          ),
        },
        {
          title: "Sessions delivered",
          chart: <LineChart chart1="true" />,
          icon: (
            <MultilineChartIcon
              style={{ color: "blue", verticalAlign: "middle" }}
            />
          ),
        },
        {
          title: "Course Consumption",
          chart: <BarChart chart1="true" />,
          icon: (
            <BarChartIcon style={{ color: "blue", verticalAlign: "middle" }} />
          ),
        },
        {
          title: "Browser Usage",
          chart: <DoughnutChart chart1="true" />,
          icon: (
            <DonutLargeIcon
              style={{ color: "blue", verticalAlign: "middle" }}
            />
          ),
        },
      ],
      draggedCard: {},
      passDraggedCard: {},
      droppedCard: {},
    };
  }
  onDrag = (event, card) => {
    event.preventDefault();
    this.setState({
      draggedCard: card,
      passDraggedCard: card,
    });
  };
  onDragOver = (event) => {
    event.preventDefault();
  };

  async onDrop(event, card) {
    const { draggedCard } = this.state;
    let tempCardSet1 = this.state.cardsSet1;
    tempCardSet1.splice(card.id, 1, draggedCard);
    this.infiniteRef.current.change(draggedCard, card);
    let res = await this.reorderElem(tempCardSet1);
    this.setState({
      cardsSet1: res,
      droppedCard: card,
      draggedCard: {},
    });
  }

  reorderElem = (cardSet) => {
    var result = cardSet.map((el, id) =>
      !(id in el) ? Object.assign({}, el, { id }) : el
    );
    return result;
  };

  async componentDidMount() {
    let res = await this.reorderElem(this.state.cardsSet1);
    this.setState({ cardsSet1: res });
  }
  render() {
    return (
      <div>
        <NavBar />
        <h4>
          Note: While exploring the application, the cards from the bottom
          scroller can be dragged and dropped into the top container.
        </h4>
        <div className="customize_wrapper">
          <div id="main">
            <div className="draggable_container">
              <div>
                
                <div
                  style={{ backgroundColor: "#0fc50f63" }}
                  className="chart_card_container"
                >
                  <h4>Drop the cards to this container</h4>
                  {this.state.cardsSet1.map((card) => {
                    return (
                      <div
                        key={card.title}
                        onDrop={(event) => this.onDrop(event, card)}
                        onDragOver={(event) => this.onDragOver(event)}
                        className="card_container1"
                      >
                        <CardsProps
                          title={card.title}
                          chart={card.chart}
                          icon={card.icon}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <br />
              <Scroller
                onDrag={this.onDrag}
                ref={this.infiniteRef}
                passDraggedCard={this.state.passDraggedCard}
                droppedCard={this.state.droppedCard}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
