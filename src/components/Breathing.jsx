import React, { Component } from 'react'
import gif from './breatheinout.gif'
import {Card, CardContent, CardHeader,Grid} from '@material-ui/core'

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
                    subheader="Every system in the body relies on oxygen."
                />
                
                <CardContent>
                    <Grid container >
                        <Grid direction="row" xs>
                            <img src={gif} alt="Loading..." />
                            </Grid>
                        <Grid direction="row" xs={2.5}>
                        <p>Follow the Blue Circle</p>
                           <p>Breath In While the Circle Expands</p>
                           <p>Breath Out While the Circle Shrinks</p>
                           <p>Repeat Until Calm</p>

                           
                            
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