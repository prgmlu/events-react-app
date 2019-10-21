import React, { Component } from 'react'

export default class Speaker extends Component {

    render() {
        
        return (
            <div>
                <p>{this.props.bio}</p>
                <p>{this.props.email}</p>
                <p>{this.props.fb}</p>
                <p>{this.props.linkedIn}</p>
                <p>{this.props.phoneNumber}</p>
                <p>{this.props.twitter}</p>
                <p>{this.props.website}</p>
                <p>{this.props.description}</p>
                <p>{this.props.firstName}</p>
                <p>{this.props.middleName}</p>
                <p>{this.props.lastName}</p>
                <p>{this.props.title}</p>
                <p>{this.props.fullUrl}</p>
            </div>
        )
    }
}
