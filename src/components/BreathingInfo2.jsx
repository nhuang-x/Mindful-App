import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import info from './square-breathing.png'

const styles = theme => ({
    image: {
        width: '60%',
        height: '60%',
        resizeMode: 'cover'
    }
  });
  
  function BreathingInfo2 (props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <img src={info} className={classes.image}/>
      </div>
    );
  }
  
  BreathingInfo2.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(BreathingInfo2);