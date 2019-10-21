import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Speaker from '../Speaker';


export default class SpeakersContainer extends Component {

    render() {

        var visibility = this.props.wholeState.currentActiveSection === 'Speakers';

        return (
            <div style={{ display: (visibility ? 'block' : 'none'), width:'98%'}}>
                <h1>Speakers</h1>
                <Grid container spacing={4} justify="center" alignItems="center">
                    {this.props.wholeState &&  this.props.wholeState['Speakers'+this.props.wholeState.currentActiveEventId] && this.props.wholeState.currentActiveSection === 'Speakers' && this.props.wholeState['Speakers'+this.props.wholeState.currentActiveEventId].map((a, k) => {
                        return (
                            <Speaker key={k}
                                bio={a.bio}
                                email={a.contact.email}
                                fb={a.contact.facebook}
                                linkedIn={a.contact.linkedIn}
                                phoneNumber={a.contact.phoneNumber}
                                twitter={a.contact.twitter}
                                website={a.contact.website}
                                description={a.description}
                                firstName={a.firstName}
                                middleName={a.middleName}
                                lastName={a.lastName}
                                title={a.title}
                                fullUrl={a.profilePicture.fullUrl}/>
                        )
                    }
                    )}
                </Grid >
            </div>
        )
    }
}
