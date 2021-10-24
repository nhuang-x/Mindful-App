import React, { Component } from 'react'
import { Card, CardMedia } from '@material-ui/core'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
  },
};

function Home(props) {
    const {classes} = props;
    return (
        <Card className={classes.grid}>
            <CardMedia 
                className = {classes.image} 
                component="img"
                height="100%"
                image = "https://www.teachermagazine.com/assets/images/teacher/_1200x630_crop_center-center_82_none/The-basics-of-mindfulness_1398166040.jpg?mtime=1611095601"/>
        </Card>
    )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);