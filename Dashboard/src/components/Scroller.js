import React from 'react';
import Slider from 'infinite-react-carousel'
import CardsProps from '../card/Card';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import PolarChart from './PolarChart';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import BarChartIcon from '@material-ui/icons/BarChart';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import PieChartIcon from '@material-ui/icons/PieChart';

export default class Scroller extends React.Component {
    constructor() {
        super()
        this.state = {
        cardsSet3:[{title:"Course Consumption-2021",chart:<BarChart/>,icon:<BarChartIcon style={{color:'blue',verticalAlign:'middle'}}/>},
        {title:"Browser Usage-2021",chart:<DoughnutChart/>,icon:<DonutLargeIcon style={{color:'blue',verticalAlign:'middle'}}/>},
        {title:"Sessions delivered-2021",chart:<LineChart/>,icon:<MultilineChartIcon style={{color:'blue',verticalAlign:'middle'}}/>},
        {title:"Top 3 consumed courses-2021",chart:<PolarChart/>,icon:<PieChartIcon style={{color:'blue',verticalAlign:'middle'}}/>},
        {title:"Course Consumption-2020",chart:<BarChart/>,icon:<BarChartIcon style={{color:'blue',verticalAlign:'middle'}}/>},
        {title:"Browser Usage-2020",chart:<DoughnutChart/>,icon:<DonutLargeIcon style={{color:'blue',verticalAlign:'middle'}}/>},
        {title:"Sessions delivered-2020",chart:<LineChart/>,icon:<MultilineChartIcon style={{color:'blue',verticalAlign:'middle'}}/>},
        {title:"Top 3 consumed courses-2020",chart:<PolarChart/>,icon:<PieChartIcon style={{color:'blue',verticalAlign:'middle'}}/>}
      ]
        }
      }

      
    async change(draggedCard,card){
        let tempCardSet3 = this.state.cardsSet3
        tempCardSet3.splice(draggedCard.id,1,card)
        let res = await this.reorderElem(tempCardSet3)
        this.setState({cardsSet3:res})
    }   

    reorderElem = (cardSet) => {
        var result =  cardSet.map((el,id) => (!(id in el) ? Object.assign({}, el, { id }) : el))
        return result;
    }

    async componentDidMount(){
        let res = await this.reorderElem(this.state.cardsSet3)
          this.setState({cardsSet3:res});
    } 
    render() {
        const settings = {
            arrows: true,
            arrowsBlock: true,
            dots: false,
            slidesPerRow: 4,
            adaptiveHeight: true
        };
        return (
            <div style={{backgroundColor:'#24d6d652',padding:'5px'}}>
                <h4>Drag the cards from this container</h4>
                <Slider {...settings}>
                    {this.state.cardsSet3.map((card)=>{
                    return ( <div key={card.title} draggable onDrag={(event) => this.props.onDrag(event,card)} className="card_container2">
                        <CardsProps title={card.title} chart={card.chart} icon={card.icon}/>
                    </div>)
                })}
                </Slider>
            </div>
        );
    }
}
