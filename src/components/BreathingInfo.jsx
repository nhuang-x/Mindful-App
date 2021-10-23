import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import info from './The-science-of-healing-breath-infographic-683x1024.jpeg'

const styles = theme => ({
    image: {
        width: '60%',
        height: '60%',
        resizeMode: 'cover'
    }
  });
  
  function BreathingInfo (props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <img src={info} className={classes.image}/>
      </div>
    );
  }
  
  BreathingInfo.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(BreathingInfo);