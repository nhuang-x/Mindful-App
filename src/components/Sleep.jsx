import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Card, CardHeader} from '@material-ui/core';
import { CardContent, Grid } from '@mui/material';
import SunIcon from '@mui/icons-material/WbSunny';
import MoonIcon from '@mui/icons-material/ModeNight';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card:{
    height:"500%",
  },
  grid:{
    height: 250,
  },
  header:{
      color: "white",
      backgroundColor: "#dbe4f1"
  },
  button: {
    color: "black",
    width: "100",
    height:"500",
    fontSize:"500"
  },
  button1:{
    color: "FEFEBE",
    backgroundColor: "#FEFEBE",
    borderRadius: 0,
    width: "100%",
    height:"100%",
  },
  button2:{
    color: "E9D3FF",
    backgroundColor: "#E9D3FF",
    borderRadius: 0,
    width: "100%",
    height:"100%",
  }
  
});

class Sleep extends React.Component {
    state = {
      open1: false,
      open2:false,
      inputValue1: "12:00",
      inputValue2: "12:00",
      inputValue3: "00:00",
      inputValue4: "00:00",
    };
    calculateTimeDifference(){
        var valuestart1 = this.state.inputValue1;
        var valueend1= this.state.inputValue2;

        var timeStart1 = new Date("01/01/2021 " + valuestart1);
        var timeEnd1 = new Date("01/01/2021 " + valueend1);

        var difference1 = timeEnd1 - timeStart1;             
        var diff_result1 = new Date(difference1);   

        var hourDiff1 = diff_result1.getHours();

        var valuestart2 = this.state.inputValue3;
        var valueend2= this.state.inputValue4;

        var timeStart2 = new Date("01/01/2021 " + valuestart2);
        var timeEnd2 = new Date("01/01/2021 " + valueend2);

        var difference2 = timeEnd2 - timeStart2;             
        var diff_result2 = new Date(difference2);   

        var hourDiff2 = diff_result2.getHours();
        return (hourDiff1 + 5)% 24 + (hourDiff2 + 5)% 24
    };

    sleepquestion(){
        if(this.calculateTimeDifference() >= 8)
        {
            return "yes";
        }
        else{
            return "no";
        }
    }
  
    handleClickOpen1 = () => {
      this.setState({ open1: true });
    };
  
    handleClose1 = () => {
      this.setState({ open1: false });
    };

    handleClickOpen2 = () => {
        this.setState({ open2: true });
      };
    
      handleClose2 = () => {
        this.setState({ open2: false });
      };

      updateInputValue1(evt) {
        this.setState({
          inputValue1: evt.target.value
        });
      }
      updateInputValue2(evt) {
        this.setState({
          inputValue2: evt.target.value
        });
      }
      updateInputValue3(evt) {
        this.setState({
          inputValue3: evt.target.value
        });
      }
      updateInputValue4(evt) {
        this.setState({
          inputValue4: evt.target.value
        });
      }
  
    render() {
    const { classes, theme } = this.props;
      return (
        <div className={classes.root}>
        <Card className={classes.card}>
            <CardHeader
            title="Sleep"
            className={classes.header}
            />
            <CardContent className={classes.card}>
                <Grid container className={classes.grid}>
                    <Grid direction="row" xs>
                        <IconButton className={classes.button1} size="large" aria-label="WbSunny" onClick={this.handleClickOpen1}>
                            <SunIcon className={classes.button} fontSize="large"/>
                        </IconButton>

                        <Dialog
            open={this.state.open1}
            onClose={this.handleClose1}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Sleep Tracker</DialogTitle>
            <DialogContent>
              <form className={classes.container} noValidate>
                <TextField
                    id="time"
                    label="Start Sleep:"
                    type="time"
                    defaultValue="12:00"
                    className={classes.textField}
                    value={this.state.inputValue1}
                    onChange={evt => this.updateInputValue1(evt)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
                </form>
            <form className={classes.container} noValidate>
            <TextField
                id="time"
                label="End Sleep:"
                type="time"
                defaultValue="20:00"
                className={classes.textField}
                value={this.state.inputValue2}
                onChange={evt => this.updateInputValue2(evt)}
                InputLabelProps={{
                shrink: true,
                }}
                inputProps={{
                step: 300, // 5 min
                }}
            />
            </form>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClose1} color="primary">
                Done
              </Button>
              <Button onClick={this.handleClose1} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>

                    </Grid>
                    <Grid direction="row" xs>
                        <IconButton className={classes.button2} size="large" aria-label="ModeNight" onClick={this.handleClickOpen2}>
                            <MoonIcon className={classes.button} fontSize="large"/>
                        </IconButton >
                        <Dialog
            open={this.state.open2}
            onClose={this.handleClose2}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Sleep Tracker</DialogTitle>
            <DialogContent>
              <form className={classes.container} noValidate>
                <TextField
                    id="time"
                    label="Start Sleep:"
                    type="time"
                    defaultValue="00:00"
                    className={classes.textField}
                    value={this.state.inputValue3}
                    onChange={evt => this.updateInputValue3(evt)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
                </form>
            <form className={classes.container} noValidate>
            <TextField
                id="time"
                label="End Sleep:"
                type="time"
                defaultValue="08:00"
                value={this.state.inputValue4}
                onChange={evt => this.updateInputValue4(evt)}
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                inputProps={{
                step: 300, // 5 min
                }}
            />
            </form>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClose2} color="primary">
                Done
              </Button>
              <Button onClick={this.handleClose2} color="primary">
                Cancel
              </Button>

            </DialogActions>
          </Dialog>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid direction="row" xs>
                        Total: {this.calculateTimeDifference()}
                    </Grid>
                    <Grid direction="row" xs>
                        Did I get enough sleep? {this.sleepquestion()}
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
        </div>
      );
    }
  }

  Sleep.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  export default withStyles(styles, { withTheme: true })(Sleep)