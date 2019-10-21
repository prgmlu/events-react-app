import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from './components/containers/MainContainer';
import MyToolbar from './components/layout/Toolbar';
import Sidebar from './components/layout/Sidebar';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'token': '',
            currentEvent: '1',
            currentActiveSection: 'Events',
            currentActiveEventId: '1'
        }
    }

    getToken = function (){
        // TO BE IMPLEMENTED
        console.log("Please provide the token manually in App.js");
    }

    componentWillMount() {
        var instance = axios.create({
            baseURL: 'https://emstest.ptit.com.sa/api/v1/',
            headers: {
                Authorization: 'Bearer ' + this.state.token,
                'accept': 'text/plain',
                'Accept-Language': 'en-US'
            }
        })

        instance.get('/Events')
            .then((response) => {
                this.setState({
                    events: response.data.items
                })
                var event_ids = response.data.items.map((x) => x.id);
                this.setState({
                    currentActiveEventId: event_ids[0]
                })

                var q = 0;
                this.getCommitteeGroups = () => {
                    if (q < event_ids.length) {
                        instance.get('https://emstest.ptit.com.sa/api/v1/Events/' + event_ids[q] + '/CommitteeGroups')
                            .then((response) => {
                                var key = 'committeegroups' + event_ids[q];
                                var obj = {}
                                obj[key] = response.data.items
                                this.setState(obj);
                                q++;
                                this.getCommitteeGroups()
                            })
                    }
                }

                this.getCommitteeGroups();


                var r = 0;
                this.getAbstracts = () => {
                    if (r < event_ids.length) {
                        instance.get('https://emstest.ptit.com.sa/api/v1/Events/' + event_ids[r] + '/abstracts')
                            .then((response) => {
                                var key = 'abstracts' + event_ids[r];
                                var obj = {}
                                obj[key] = response.data.items
                                this.setState(obj);
                                r++;
                                this.getAbstracts()
                            })
                    }
                }

                this.getAbstracts();


                var s = 0;
                this.getSpeakers = () => {
                    if (s < event_ids.length) {
                        instance.get('https://emstest.ptit.com.sa/api/v1/Event/' + event_ids[s] + '/Speakers')
                            .then((response) => {
                                var key = 'Speakers' + event_ids[s];
                                var obj = {}
                                obj[key] = response.data.items
                                this.setState(obj);
                                s++;
                                this.getSpeakers()
                            })
                    }
                }

                this.getSpeakers();


                var t = 0;
                this.getSessions = () => {
                    if (t < event_ids.length) {
                        instance.get('https://emstest.ptit.com.sa/api/v1/Events/' + event_ids[t] + '/Sessions')
                            .then((response) => {
                                var key = 'Sessions' + event_ids[t];
                                var obj = {}
                                obj[key] = response.data.items
                                this.setState(obj);
                                t++;
                                this.getSessions()
                            })
                    }
                }

                this.getSessions();


                var u = 0;
                this.getSponsors = () => {
                    if (u < event_ids.length) {
                        instance.get('https://emstest.ptit.com.sa/api/v1/Events/' + event_ids[u] + '/sponsors')
                            .then((response) => {
                                var key = 'Sponsors' + event_ids[u];
                                var obj = {}
                                obj[key] = response.data.items
                                this.setState(obj);
                                u++;
                                this.getSponsors()
                            })
                    }
                }
                this.getSponsors();


            }).catch((error)=>{
                if(error.response.status === 401){
                    this.getToken();
                }
            })

    }

    toolbarClickHandle = (e) => {
        this.setState({
            currentActiveSection: e.currentTarget.getAttribute('id')
        })
    }

    sidebarClickHandle = (e) => {
        this.setState({
            currentActiveEventId: e.currentTarget.getAttribute('id')
        })
    }


    render() {
        var drawerWidth = window.innerWidth * 15 / 100;
        var containerWidth = window.innerWidth - drawerWidth;
        return (
            <div className="App">
                <MyToolbar handleClick={this.toolbarClickHandle} key={1} width={containerWidth} />
                <Sidebar events={this.state.events} handleClick={this.sidebarClickHandle} width={drawerWidth} key={2} />
                <MainContainer wholeState={this.state} key={3} />
            </div>
        )
    }
}

