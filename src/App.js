import React, { Component } from 'react'
import './App.css';
import MeditationPage from './components/MeditationPage'
import MoodJournal from './components/MoodJournal'
import ButtonAppBar from './components/ButtonAppBar'
import Breathing from './components/Breathing'
import Footer from './components/footer'
import { Card, CardMedia } from '@material-ui/core'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
 
const styles = {
  root: {
    backgroundColor:"red !important",
  },
  grid: {
    resizeMode:'contain',
    height:'100%',
    width:'100%',
    overflow:'hidden'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: undefined,
    width: undefined
  }
};

function App(props) {
  const { classes } = props;
  return (
    <div className="App">
      <ButtonAppBar/>
    </div>
 );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);