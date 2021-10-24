import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import GuidedMeditation from './GuidedMeditation'
import MoodJournal from './MoodJournal'
import Breathing from './Breathing'
import MenuIcon from '@material-ui/icons/Menu';
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
  link: {

  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Router>
          <AppBar position="static" style={{ backgroundColor: "#5F7A6B" }}>
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Button color="inherit">
                <Typography className={classes.link}>
                  <Link to="/meditation">Meditate</Link>
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography className={classes.link}>
                  <Link to="/mood-journal">Mood Journal</Link>
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography className={classes.link}>
                  <Link to="/breathe">Breathe</Link>
                </Typography>
              </Button>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Prezent
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Route path="/meditation" component={GuidedMeditation} />
          <Route path="/breathe" component={Breathing} />
          <Route path="/mood-journal" component={MoodJournal} />
      </Router>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);