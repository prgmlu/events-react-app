import React, { Component } from 'react'

export default class Session extends Component {
    render() {
        return (
            <div style={{width:'90%', textAlign:'center', display:'inline-block'}}>
                <p>{this.props.name}</p>
                <p>{this.props.startDateTime}</p>
                <p>{this.props.endDateTime}</p>
                <p>{this.props.lat}</p>
                <p>{this.props.long}</p>
            </div>
        )
    }
}
