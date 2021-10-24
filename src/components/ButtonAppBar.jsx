import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, ButtonGroup, Card, CardMedia } from '@material-ui/core';
import GuidedMeditation from './GuidedMeditation'
import MoodJournal from './MoodJournal'
import Breathing from './Breathing'
import Home from './Home'
import MenuIcon from '@material-ui/icons/Menu';
import Sleep from './Sleep'

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  
};

const linkStyles = {
  margin: "3rem",
  textAlign: "center",
  textDecoration: "none",
  color: 'white'
};


function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Router>
          <AppBar position="static" style={{ backgroundColor: "#5F7A6B" }}>
            <Toolbar>
              <Typography variant="h5" color="inherit">
                <Link style = {linkStyles} to="/">Bruce Donald Is ~Sometimes~ Evil</Link>
              </Typography>
              <ButtonGroup variant="text" aria-label="outlined button group">
              <Button color="inherit">
                <Typography className={classes.link}>
                  <Link style = {linkStyles} to="/meditation">Meditate</Link>
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography className={classes.link}>
                  <Link style = {linkStyles} to="/mood-journal">Mood Journal</Link>
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography className={classes.link}>
                  <Link style = {linkStyles} to="/breathe">Breathe</Link>
                </Typography>
              </Button>
             
              <Button color="inherit">
                <Typography className={classes.link}>
                  <Link style = {linkStyles} to="/sleeptracker">SleepCourt</Link>
                </Typography>
              </Button>

              </ButtonGroup>
            </Toolbar>
          </AppBar>

          <Route exact={true} path="/" component={Home} />
          <Route path="/meditation" component={GuidedMeditation} />
          <Route path="/breathe" component={Breathing} />
          <Route path="/mood-journal" component={MoodJournal} />
          <Route path="/sleeptracker" component={Sleep} />
      </Router>
    </div>
  );  
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
