import React, { Component } from 'react'
import {AppBar, TextField, Typography, Grid} from '@material-ui/core';
import ButtonAppBar from './ButtonAppBar'

class MeditationPage extends React.Component {
    render() { 
        return <Grid>
            <ButtonAppBar>
                AppBar
            </ButtonAppBar>
        </Grid>;
    }
}
 
export default MeditationPage;