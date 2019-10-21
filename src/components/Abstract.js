import React, { Component } from 'react'

export default class Abstract extends Component {

    render() {
        
        return (
            <div style={{width:'90%', textAlign:'center', display:'inline-block'}}>
                <p>{this.props.description}</p>
                <p>{this.props.fullUrl}</p>
            </div>
        )
    }
}
