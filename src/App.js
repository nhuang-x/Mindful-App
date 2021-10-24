import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Meditation from './components/Meditation'
import Breathing from './components/Breathing'
import Sleep from './components/Sleep'
 
function App() {
 return (
   <div className="App">
     <Meditation/>
     <Breathing/>
     <Sleep/>
   </div>
 );
}
 
export default App;