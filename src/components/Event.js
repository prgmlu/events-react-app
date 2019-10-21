import React, { Component } from 'react';
import moment from 'moment';


export default class Event extends Component {

    render() {

        const eventDate = moment(this.props.startDate).format("D-MMMM-YYYY");
        var currentDate = moment();
        var remainingDays = currentDate.to(eventDate);

        return (
            <div style={{width:'90%', textAlign:'center', display:'inline-block'}}>
                <h2>{this.props.name}</h2>
                <p>{eventDate}<br></br>{remainingDays}</p>
                <p>{this.props.description}</p>
                <p>{moment(this.props.endDate).format("D-MMMM-YYYY")}</p>
                <p>{this.props.lat}</p>
                <p>{this.props.long}</p>
            </div>
        )
    }
}
