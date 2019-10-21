import React, { Component } from 'react'
import axios from 'axios';
import Committee from '../Committee'


export default class CommitteesContainer extends Component {
    constructor(props) {
        super(props);
        var init = 'dataLoaded'+props.wholeState.currentActiveEventId;
        var obj = {}
        obj[init] = false;
        this.state =  (obj);
    }

    componentWillMount() {
        var eventId = this.props.wholeState.currentActiveEventId;
        if (this.state['dataLoaded'+eventId]) return;
        
        var instance = axios.create({
            baseURL: 'https://emstest.ptit.com.sa/api/v1/',
            headers: {
                Authorization: 'Bearer ' + this.props.wholeState.token,
                'accept': 'text/plain',
                'Accept-Language': 'en-US'
            }
        })
        if (!this.props.wholeState['committeegroups'+eventId]) {
            return;
        }


        var r =0;
        var committee_group_ids = this.props.wholeState['committeegroups'+eventId].map((x) => x.id);
        var current_event_committees = []

        this.getCommittees = () =>{
            if (r<committee_group_ids.length){
                instance.get('https://emstest.ptit.com.sa/api/v1/CommitteeGroups/'+committee_group_ids[r]+'/Committees')
                .then((response) => {
                    current_event_committees.push(...response.data.items);
                    r++;
                                if (r>= committee_group_ids.length){
                                    // debugger;
                                    var init = 'dataLoaded'+this.props.wholeState.currentActiveEventId;
                                    var obj = {}
                                    obj[init] = true;
                                    // this.state = obj;
                                    this.setState(obj);
                    
                                    var key = 'committees' +eventId;
                                    obj = {};
                                    obj[key] = current_event_committees;
                                    this.setState(obj);
                                }
                this.getCommittees()
            })
        }
    }

    this.getCommittees();


    }

    render() {

        var visibility = this.props.wholeState.currentActiveSection === 'Committees';

        return (
            <div style={{ display: (visibility ? 'block' : 'none'), textAlign:'center', width:'100%'}}>
                <h1>Committees</h1>
                {this.state['committees'+this.props.wholeState.currentActiveEventId] && this.state['committees'+this.props.wholeState.currentActiveEventId].map((a, k) => {
                    return (
                        <Committee key={k}
                            description={a.description}
                            fullUrl={a.profilePicture.fullUrl}
                            bio={a.bio}

                            firstName={a.firstName}
                            middleName={a.middleName}
                            lastName={a.lastName}

                            email={a.contact.email}
                            fb={a.contact.facebook}
                            linkedIn={a.contact.linkedIn}
                            website={a.contact.website}
                            phoneNumber={a.contact.phoneNumber}
                            twitter={a.contact.twitter}

                            title = {a.title}/>
                    )
                }
                )}
            </div>
        )
    }
}
