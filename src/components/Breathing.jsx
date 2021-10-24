import React, { Component } from 'react'
import gif from './breatheinout.gif'
import {Card, CardContent, CardHeader,Grid } from '@material-ui/core'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BreathingInfo from './BreathingInfo';

const styles = {
  card: {
  },
};

function Breathing(props) {
    const {classes} = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    title="Breathing Exercises"
                    subheader="It's Important!!!"
                />
                <CardContent>
                    <Grid container >
                        <Grid direction="row" xs>
                            <img src={gif} alt="loading..." />
                            </Grid>
                        <Grid direction="row" xs={4}>
                            <p>
                            Follow the blue circle, breath in when the circle expands, hold, breath out when the circle shrinks, hold.
                            </p>
                        </Grid>
                        <Grid direction="row" xs>
                            <BreathingInfo></BreathingInfo>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

Breathing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Breathing);