import React, { Component } from 'react'
import gif from './breatheinout.gif'
import {Card, CardContent, CardHeader,Typography,Avatar } from '@material-ui/core'

 
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
                
                    <img src={gif} alt="loading..." />
                    <p>
                    Follow the blue circle, breath in when the circle expands, hold, breath out when the circle shrinks, hold.
                    </p>
                </CardContent>
            </Card>
            

        </div>
    </div>  
       

   }
}
export default Breathing;