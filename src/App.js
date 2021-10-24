import React, { Component } from 'react'
import './App.css';
import MeditationPage from './components/MeditationPage'
import MoodJournal from './components/MoodJournal'
import ButtonAppBar from './components/ButtonAppBar'
import Breathing from './components/Breathing'
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
      <Card className={classes.grid}>
          <CardMedia 
          className = {classes.image} 
          component="img"
          height="100%"
          image = "https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?k=20&m=1181366400&s=612x612&w=0&h=p-iaAHKhxsF6Wqrs7QjbwjOYAFBrJYhxlLLXEX1wsGs="/>
      </Card>
    </div>
 );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);