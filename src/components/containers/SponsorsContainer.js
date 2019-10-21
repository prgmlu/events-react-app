import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Sponsor from '../Sponsor';


export default class SponsorsContainer extends Component {

    render() {

        var visibility = this.props.wholeState.currentActiveSection === 'Sponsors';

        return (
            <div style={{ display: (visibility ? 'block' : 'none'), textAlign:'center', width:'98%'}}>
                <h1>Sponsors</h1>
                <Grid container spacing={4} justify="center" alignItems="center">
                    {this.props.wholeState.currentActiveSection === 'Sponsors' && this.props.wholeState['Sponsors'+this.props.wholeState.currentActiveEventId] && this.props.wholeState['Sponsors'+this.props.wholeState.currentActiveEventId].map((a, k) => {
                        return (
                            <Sponsor key={k}
                                description={a.description}
                                logo={a.logo.fullUrl}
                                email={a.contact.email}
                                name={a.name}
                                fb={a.contact.facebook}
                                linkedIn={a.contact.linkedIn}
                                website={a.contact.website}
                                phoneNumber={a.contact.phoneNumber}
                                twitter={a.contact.twitter}/>
                        )
                    }
                    )}
                </Grid >
            </div>
        )
    }
}
