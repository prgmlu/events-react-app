import React, { Component } from 'react';

export default class Sponsor extends Component {
    render() {


        return (
            <div style={{width:'90%', textAlign:'center', display:'inline-block'}}>
                <p>{this.props.description}</p>
                <p>{this.props.name}</p>
                <p>{this.props.logo}</p>

                <p>{this.props.email}</p>
                <p>{this.props.fb}</p>
                <p>{this.props.linkedIn}</p>
                <p>{this.props.phoneNumber}</p>
                <p>{this.props.twitter}</p>
                <p>{this.props.website}</p>
            </div>
        )
    }
}
