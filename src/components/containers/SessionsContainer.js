import React, { Component } from 'react';
import Session from '../Session';


export default class SessionsContainer extends Component {

    render() {

        var visibility = this.props.wholeState.currentActiveSection === 'Sessions';

        return (
            <div style={{ display: (visibility ? 'block' : 'none'), textAlign:'center', width:'100%'}}>
                <h1>Sessions</h1>
                {this.props.wholeState.currentActiveSection === 'Sessions' && this.props.wholeState['Sessions' + this.props.wholeState.currentActiveEventId] && this.props.wholeState['Sessions' + this.props.wholeState.currentActiveEventId].map((a, k) => {
                    return (
                        <Session key={k}
                            description={a.description}
                            startDateTime={a.startDateTime}
                            endDateTime={a.endDateTime}
                            name={a.name}
                            roomNumber={a.roomNumber} />
                    )
                }
                )}
            </div>
        )
    }
}
