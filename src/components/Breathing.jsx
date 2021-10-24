import React, { Component } from 'react'
import gif from './breatheinout.gif'
import {Card, CardContent, CardHeader,Grid} from '@material-ui/core'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BreathingInfo from './BreathingInfo';

class Breathing extends React.Component {
   render() {
    return<div>
        <div>
            <Card>
                <CardHeader
                    title="Breathing Exercises"
                    subheader="It's Important!!!"
                />
                <CardContent>
                    <Grid container >
                        <Grid direction="row" xs>
                            <img src={gif} alt="loading..." />
                            </Grid>
                        <Grid direction="row" xs={4} justify="center" alignItems="center" >
                            <p>follow the blue circle</p>
                            <p>breath in when the circle expands</p>
                            <p>hold</p>
                            <p>breath out when the circle shrinks</p>
                            <p>hold</p>
                        </Grid>
                        <Grid direction="row" xs>
                            <BreathingInfo></BreathingInfo>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </div>
    </div>  
   }
}


export default Breathing;