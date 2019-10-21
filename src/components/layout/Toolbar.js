import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    toolbar: {
      justifyContent: 'space-between',
      left: '100px',
    },
    toolbarLink: {
      padding: theme.spacing(4),
      flexShrink: 0,
    },
  }));

  const sections = [
    'Abstracts',
    'Events',
    'Committees',
    'Sessions',
    'Speakers',
    'Sponsors',
  ];

  export default function MyToolbar(props) {
    const classes = useStyles();
  
    return (
      <div style={ {position:'fixed', top:'0px', width:props.width}}>
        <Toolbar component="nav" variant="dense" className={classes.toolbar}>
          {sections.map((section,i) => (
            <div key ={i} id={section} onClick = {props.handleClick}>
            
            <Button
              color="inherit"
              key={section}
              className={classes.toolbarLink}
            >
              {section}
            </Button>
            </div>
          ))}
        </Toolbar>
        </div>
    );
  }