import React, { Component } from 'react';
import Abstract from '../Abstract'


export default class AbstractsContainer extends Component {
    
    render() {

        var visibility = this.props.wholeState.currentActiveSection === 'Abstracts';

        return (
            <div style={{ display: (visibility ? 'block' : 'none'), textAlign:'center', width:'100%'}}>
                <h1>Abstracts</h1>
                {this.props.wholeState.currentActiveSection === 'Abstracts' && this.props.wholeState['abstracts' + this.props.wholeState.currentActiveEventId] && this.props.wholeState['abstracts' + this.props.wholeState.currentActiveEventId].map((a, k) => {
                    return (
                        <Abstract key={k}
                            description={a.description}
                            fullUrl={a.fullUrl} />
                    )
                }
                )}
            </div>
        )
    }
}
