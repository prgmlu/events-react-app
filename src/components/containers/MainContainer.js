import React, { Component } from 'react'
import CommitteesContainer from "./CommitteesContainer";
import EventContainer from "./EventContainer";
import SponsorsContainer from "./SponsorsContainer";
import SpeakersContainer from "./SpeakersContainer";
import AbstractsContainer from "./AbstractsContainer";
import SessionsContainer from "./SessionsContainer";


export default class MainContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentEventObj: null
        }
    }

    render() {
        var sidebarWidth = window.innerWidth*15/100;
        var x_width = window.innerWidth - sidebarWidth;
        var toolbarHeight = 100;

        return (
            <div id='mycontainer' style={{width:x_width, left:sidebarWidth, top:toolbarHeight, position:'absolute',overflowY: 'auto', maxHeight:window.innerHeight-toolbarHeight, minHeight:window.innerHeight-toolbarHeight}}>
                <EventContainer wholeState={this.props.wholeState}/>
                <AbstractsContainer wholeState={this.props.wholeState} />
                <SessionsContainer wholeState = {this.props.wholeState} />
                <SponsorsContainer wholeState ={this.props.wholeState} />
                
                {this.props.wholeState.currentActiveSection === 'Committees' &&
                    <CommitteesContainer wholeState={this.props.wholeState} />
                }
        
                <SpeakersContainer wholeState={this.props.wholeState} />
            </div>
        )
    }
}