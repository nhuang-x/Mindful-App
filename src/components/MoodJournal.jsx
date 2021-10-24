import React, { Component } from 'react'
import {Button, TextField} from '@material-ui/core'
import {Card, CardContent, CardHeader,Grid} from '@material-ui/core'

class MoodJournal extends React.Component {
    submitJournal(){
        document.getElementById("journal-prompt").value ="";
    }

    generatePromptHappy(){
        const happyPrompts = ["What are five things you are grateful for?",
                              "What is something you are looking forward to?",
                              "What is something you are proud of?",
                              "What is a way that you can bring your happiness to others?"];
        var givenPrompt=happyPrompts[Math.floor(Math.random()*4)];
        document.getElementById("givenPrompt").innerHTML = givenPrompt;
    }

    generatePromptSad(){
        const sadPrompts = ["What is a goal you are working towards?",
                              "Write about the happiest time in your life.",
                              "When is the last time you did something nice for yourself?",
                              "What is one way you can reward yourself when you accomplish something?"];
        var givenPrompt=sadPrompts[Math.floor(Math.random()*4)];
        document.getElementById("givenPrompt").innerHTML = givenPrompt;
    }

    generatePromptAngry(){
        const angryPrompts = ["Use this as a space to vent!",
                              "What were you feeling or doing just before you felt angry?",
                              "If I could have a do-over, I would...",
                              "What is your anger trying to tell you about yourself?"];
        var givenPrompt=angryPrompts[Math.floor(Math.random()*4)];
        document.getElementById("givenPrompt").innerHTML = givenPrompt;
    }

    generatePromptAnxious(){
        const anxiousPrompts = ["What is something you need to let go of?",
                              "What are three things that scare you and why?",
                              "Write a list of the worries that you want to get rid of.",
                              "What are some self-care ideas for when you are feeling overwhelmed?"];
        var givenPrompt=anxiousPrompts[Math.floor(Math.random()*4)];
        document.getElementById("givenPrompt").innerHTML = givenPrompt;
    }

    generatePromptStressed(){
        const stressedPrompts = ["What are things that define you outside of school/work/accomplishments?",
                              "What is something you are proud of that is not on your resume?",
                              "What past challenge turned out to serve you? What was the silver lining?",
                              "What can you do in this moment to bring more peace into your being?"];
        var givenPrompt=stressedPrompts[Math.floor(Math.random()*4)];
        document.getElementById("givenPrompt").innerHTML = givenPrompt;
    }

    generatePromptLost(){
        const lostPrompts = ["What emotions are you feeling right now? Why?",
                              "How can you re-prioritize your to-do list?",
                              "Where do you feel out of alignment with the things that bring you joy?",
                              "What is a short-term goal you are confident that you can achieve?"];
        var givenPrompt=lostPrompts[Math.floor(Math.random()*4)];
        document.getElementById("givenPrompt").innerHTML = givenPrompt;
    }

    render() { 
        const mystyle = {
            paddingLeft: "13%",
            textAlign: "left"        };
        return <div>
                    <Card>
                <CardHeader
                    title="How are you feeling today?"
                    subheader="Make sure to fill out your mood journal everyday to keep in touch with your feelings and to keep your plant healthy and strong!"
                    />
                
                    <div>
                        <Button 
                        disableRipple = "true"
                        type = "mood" 
                        class = "happyMood" 
                        onClick={this.generatePromptHappy}
                        variant="contained"
                        style = {{backgroundColor: "#FAEACB",
                                width: 200,
                                height: 80,
                                fontSize: 15}}>
                            HAPPY
                        </Button> 

                        <Button 
                        disableRipple = "true"
                        type = "mood" 
                        class = "sadMood" 
                        onClick={this.generatePromptSad}
                        variant="contained"
                        style = {{backgroundColor: "#9CC0E7",
                                width: 200,
                                height: 80,
                                fontSize: 15}}>
                            SAD
                        </Button> 

                        <Button 
                        disableRipple = "true"
                        type = "mood" 
                        class = "angryMood" 
                        onClick={this.generatePromptAngry}
                        variant="contained"
                        style = {{backgroundColor:"#F0B0BC",
                                    width: 200,
                                    height: 80,
                                    fontSize: 15}}>
                            ANGRY
                        </Button> 
                        </div>

                        <div>
                        <Button 
                        disableRipple = "true"
                        type = "mood" 
                        class = "anxiousMood" 
                        onClick={this.generatePromptAnxious}
                        variant="contained"
                        style = {{backgroundColor:"#8686AF",
                                    width: 200,
                                    height: 80,
                                    fontSize: 15}}>
                            ANXIOUS
                        </Button> 

                        <Button 
                        disableRipple = "true"
                        type = "mood" 
                        class = "stressedMood" 
                        onClick={this.generatePromptAnxious}
                        variant="contained"
                        style = {{backgroundColor:"#8B5773",
                                    width: 200,
                                    height: 80,
                                    fontSize:15}}>
                            STRESSED
                        </Button> 

                        <Button 
                        disableRipple = "true"
                        type = "mood" 
                        class = "lostMood" 
                        onClick={this.generatePromptAnxious}
                        variant="contained"
                        style = {{backgroundColor:"#B6A9B6",
                                    width: 200,
                                    height: 80,
                                    fontSize: 15}}>
                            LOST
                        </Button> 
                    </div>
                    <h4 style={mystyle}>
                        <span id="givenPrompt"></span>
                    </h4>  
                    
                    <TextField
                    id="journal-prompt" 
                    label="Write here!" 
                    variant="outlined"
                    multiline
                    maxRows={10}
                    rows={10}
                    style={{width: '75%'}}>
                    </TextField>

                    <div style = {{paddingTop:15, paddingBottom:20}}>
                    <Button  
                    onClick={this.submitJournal}
                    variant="contained"
                    style = {{backgroundColor:"#B6A9B6",
                                width: 175,
                                height: 40,
                                fontSize: 12,
                                borderRadius:10,}}>
                        WATER YOUR PLANT
                    </Button>
                    </div>
                    </Card>
                </div>;
            
    }
}
 
export default MoodJournal;