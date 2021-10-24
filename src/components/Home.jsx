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
                image = "https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?k=20&m=1181366400&s=612x612&w=0&h=p-iaAHKhxsF6Wqrs7QjbwjOYAFBrJYhxlLLXEX1wsGs="/>
        </Card>
    )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);