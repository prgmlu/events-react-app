Receiving Data:
the data is fetched from the API in the app component, and is kept in the App state.
Axios library is used to send the request to the corresponding endpoint.

a call to the Events endpoint is done first, and subsequest calls to the other endpoints are done, since all other endpoints depend on the event id.

the data is kept in the App state with the following structure:
    events  (a single array)
    committeegroups{eventid} (an array for each event)
    abstracts{eventid}       (an array for each event)
    speakers{eventid}        (an array for each event)
    sessions{eventid}        (an array for each event)
    sponsors{eventid}        (an array for each event)

for example, lets say we have events [{...,id:1}, {...,id:4}]
then the state would include: 
    committeegroups4
    committeegroups4

    abstracts4
    abstracts4

    speakers4
    speakers4

    sessions4
    sessions4

    sponsors4
    sponsors4

the data is kept like that in order to keep the state flat.

the only API call done outside the App.js component is done in the component: CommitteesContainer.


Components structure:
there's 3 types of components:
    layout components (Sidebar.js and MyToolbar.js)
    container components (MainContainer.js EventContainer.js, AbstractsContainer.js...)
    presentational components (Event.js, Abstract.js, )


App displays: Sidebar and MyToolbar and MainContainer

MainContainer displays: EventContainer, AbstractsContainer, SessionsContainer.... 

And each container displays the corresponding component.


The state is passed down completely to the containers, and each container displays it's corresponding components by mapping the 
corresponding state to it's component, and handles the display logic (show or hide the component depending on the state)

The component at the lowest level handle no logic, so that they can be replaced by any other component.

Material-UI is used for the toolbar and the sidebar.
moment library is used to handle the date.

TODOs: 
display all events in a single page.