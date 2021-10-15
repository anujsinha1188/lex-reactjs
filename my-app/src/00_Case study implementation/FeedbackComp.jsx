import React from 'react';
import Rater from './Rater.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/RateComp.css';

class FeedbackComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latestFeedback: "",
            rating: '5'
        };
    }
    handleFeedbackChange = (e) => {
        this.setState({ body: e.target.value })
    }
    render() {
        var items = [];
        this.props.feedbacks.forEach(function (fb) {
            items.push(<div key={fb.pdtCode}><a href="#"><h4>{fb.user}</h4></a>
                <Rater value={fb.rating} maxlength="6" />
                  &nbsp;&nbsp;<span style={{ "fontSize": "9px" }}>{fb.rating}/5</span><br /><div>{fb.body}</div>
                <h6 style={{ "fontStyle": "italic", "color": "lightgrey" }}>-{fb.updatedAt.substr(0, 10)}</h6>
            </div>)
        });
        return (
            <div>
                {items}
                <div className={"form-group"}>
                    <textarea className={"form-control"} rows="5" cols="12" value={this.state.latestFeedback}
                        name="username" onChange={this.handleFeedbackChange}></textarea>
                </div>
                <div>
                    <Rater value={this.state.rating} maxlength="6" /><span style={{ "fontSize": "9px" }} />
                    <span>{this.state.rating}/5</span>
                </div><br />
                <button className={"btn btn-primary"}>Submit Feedback</button>
            </div>
        );
    }

}

export default FeedbackComp;
