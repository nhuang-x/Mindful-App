import React, { Component } from 'react'
import {Paper, Grid} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
 
const styles = {
  root: {
    backgroundColor:"red !important",
  },
};

function MeditationPage(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
        <Grid>
        </Grid>
    </Paper>
  );
}

MeditationPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeditationPage);