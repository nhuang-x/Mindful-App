import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, ButtonGroup, Card, CardMedia } from '@material-ui/core';
import MeditationPage from './MeditationPage'
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
  
};

const linkStyles = {
  margin: "3rem",
  textAlign: "center",
  textDecoration: "none",
  color: 'white'
};


function ButtonAppBar(props) {
  const { classes } = props;
  const [show, toggleShow] = React.useState(true);
  return (
    <div className={classes.root}>
      <Router>
          <AppBar position="static" style={{ backgroundColor: "#5F7A6B" }}>
            <Toolbar>
              {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h5" color="inherit">
                Bruce Donald Is Evil
              </Typography>
              <ButtonGroup variant="text" aria-label="outlined button group">
              <Button color="inherit" onClick={() => toggleShow(false)}>
                <Typography className={classes.link}>
                  <Link style = {linkStyles} to="/meditation">Meditate</Link>
                </Typography>
              </Button>
              <Button color="inherit" onClick={() => toggleShow(false)}>
                <Typography className={classes.link}>
                  <Link style = {linkStyles} to="/mood-journal">Mood Journal</Link>
                </Typography>
              </Button>
              <Button color="inherit" onClick={() => toggleShow(false)}>
                <Typography className={classes.link}>
                  <Link style = {linkStyles} to="/breathe">Breathe</Link>
                </Typography>
              </Button>
             
              </ButtonGroup>
            </Toolbar>
          </AppBar>

          <div>
            {show && <div>
              <Card className={classes.grid}>
                <CardMedia 
                  className = {classes.image} 
                  component="img"
                  height="100%"
                  image = "https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?k=20&m=1181366400&s=612x612&w=0&h=p-iaAHKhxsF6Wqrs7QjbwjOYAFBrJYhxlLLXEX1wsGs="/>
              </Card>
            </div>}
          </div>
          <Route path="/meditation" component={MeditationPage} />
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
