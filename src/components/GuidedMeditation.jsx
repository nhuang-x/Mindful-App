import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Tabs,Tab,AppBar,Toolbar, Typography, Button, IconButton, Card,CardHeader,Grid } from '@material-ui/core';
import { Rowing } from '@material-ui/icons';
import ReactPlayer from "react-player";
import Box from "@material-ui/core/Box";

 
 
const styles = {
 root: {
   flexGrow: 1,
   
 },

 };
 
    
 
 
function Meditation(props) {

        
    
    const [value, setValue] = React.useState(0);

    const [value2, setValue2] = React.useState(0);
    
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
      };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      

 const { classes } = props;
 return (
 <div className={classes.root}>
    <Card variant = "outlined">
                <CardHeader
                style = {{backgroundColor: "#e4e9e2"}}
                    title="Guided Meditation Yoga"
                    subheader="Take a Moment to Recenter Yourself"
                /> 
                
                <Grid container>

                <Grid direction='row' xs justify="center" alignItems="center">
                  
                    <h4>Guided Meditation Videos </h4>
                   
                    <Tabs TabIndicatorProps={{style:{background:'#7D9AAA'}}} value={value} onChange={handleChange} centered>
                        <Tab label="Meditation Video 1" />
                        <Tab label="Meditation Video 2" />
                        <Tab label="Meditation Video 3"/>
                    </Tabs>
                    <TabPanel value={value} index={0}>
                    <div>
                        <h3>10-Minute Meditation for Anxiety - <a href="https://www.youtube.com/channel/UCEMArgthHuEtX-04qL_8puQ">Goodful</a></h3>
                        <div>
                        <ReactPlayer
                        url=
                        "https://www.youtube.com/watch?v=O-6f5wQXSu8&ab_channel=Goodful"
                        width="100%"
                        textAlignVertical ="center"
                        
                        />
                        </div>
                    </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    <div>
                        <h3>Morning Positive Affirmations - <a href="https://www.youtube.com/channel/UCN4vyryy6O4GlIXcXTIuZQQ">Great Meditation</a></h3>
                        <div>
                        <ReactPlayer
                        url=
                        "https://www.youtube.com/watch?v=2l8WD4U4KMk&ab_channel=GreatMeditation"
                        width="100%"
                        textAlignVertical ="center"
                        
                        />
                        </div>
                    </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    <div>
                        <h3>Rainstorm Sounds for Relaxing, Focus, or Deep Sleep - <a href="https://www.youtube.com/channel/UChSpME3QaSFAWK8Hpmg-Dyw">Calm</a></h3>
                        <div>
                        <ReactPlayer
                        url=
                        "https://www.youtube.com/watch?v=yIQd2Ya0Ziw&ab_channel=Calm"
                        width="100%"
                        textAlignVertical ="center"
                        
                        />
                        </div>
                    </div>
                    </TabPanel>
                    </Grid>

                    <Grid direction='row' xs justifyContent="center"alignItems="center">
                      
                    <h4>Guided Yoga Videos</h4>
                    
                    <Tabs TabIndicatorProps={{style:{background:'#7D9AAA'}}} value={value2} onChange={handleChange2} centered>
                        <Tab label="Yoga Video 1" />
                        <Tab label="Yoga Video 2" />
                        <Tab label="Yoga Video 3"/>
                    </Tabs>
                    <TabPanel value={value2} index={0}>
                    <div>
                        <h3>Peaceful Warrior Yoga - <a href="https://www.youtube.com/channel/UC-0CzRZeML8zw4pFTVDq65Q">SarahBethYoga</a></h3>
                        <div>
                        <ReactPlayer
                        url=
                        "https://www.youtube.com/watch?v=Nw2oBIrQGLo&ab_channel=SarahBethYoga"                        
                        width="100%"
                        textAlignVertical ="center"
                        
                        />
                        </div>
                    </div>
                    </TabPanel>
                    <TabPanel value={value2} index={1}>
                    <div>
                        <h3>20 Minute Full Body Yoga for Stress and Anxiety Relief - <a href="https://www.youtube.com/channel/UCpQ34afVgk8cRQBjSJ1xuJQ">MadFit</a></h3>
                        <div>
                        <ReactPlayer
                        url=
                        "https://www.youtube.com/watch?v=sTANio_2E0Q&ab_channel=MadFit"
                        width="100%"
                        textAlignVertical ="center"
                        
                        />
                        </div>
                    </div>
                    </TabPanel>
                    <TabPanel value={value2} index={2}>
                    <div>
                        <h3>Bedtime Yoga Stretch to Release Tension and Stress - <a href="https://www.youtube.com/channel/UCxYVPua6HC46HzgT8IIn3vg">Yoga with Bird</a></h3>
                        <div>
                        <ReactPlayer
                        className='react-player'
                        url=
                        "https://www.youtube.com/watch?v=4TQsfBYCyKQ&ab_channel=YogaWithBird"
                        width="100%"
                        textAlignVertical ="center"
                      
                        
                        />
                        </div>
                    </div>
                    </TabPanel>
                    
                    </Grid>
                    

                </Grid>
    </Card>

 
    </div>

  );
 }
  
 Meditation.propTypes = {
  classes: PropTypes.object.isRequired,
 };
  
 export default withStyles(styles)(Meditation);