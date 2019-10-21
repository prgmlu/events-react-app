import React, { Component } from 'react';
import Event from '../Event'


export default class EventContainer extends Component {
    
    render() {
        
        var visibility = this.props.wholeState.currentActiveSection === 'Events';
        
        if(this.props.wholeState.events){
            var currentEventObj = this.props.wholeState.events.filter(item => {
                return (Number(item.id) === Number(this.props.wholeState.currentActiveEventId))
            }); 
        }

        return (
            <div style={{ display: (visibility ? 'block' : 'none'), textAlign:'center', width:'100%'}}>
                <h1>Events</h1>
                {this.props.wholeState.currentActiveSection === 'Events' &&  currentEventObj &&
                <Event
                    description={currentEventObj[0].description}
                    startDate={currentEventObj[0].startDate}
                    endDate={currentEventObj[0].endDate}
                    name={currentEventObj[0].name}
                    lat={currentEventObj[0].location.lat}
                    long={currentEventObj[0].location.long} />
                }  
            </div>
        )
    }
}
