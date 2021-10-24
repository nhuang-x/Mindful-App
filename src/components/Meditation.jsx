import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';


const styles = {
  root: {
    flexGrow: 1,
  },
  
};

function Meditation(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

    </div>
  );
}

Meditation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Meditation);