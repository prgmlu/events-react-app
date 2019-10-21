import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';



export default function Sidebar(props) {
  const drawerWidth = props.width;
  const useStyles = makeStyles(theme => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
  }));
  const classes = useStyles();
  
  return (
    <div className={classes.root} >
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {props.events && props.events.map((event, index) => (
            <div key={index} id={event.id} onClick={props.handleClick}>
            <ListItem button key={event.id}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={event.name} />
            </ListItem>
            </div>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}