import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import MeditationPage from './components/MeditationPage'
import Breathing from './components/Breathing'
 
function App() {
 return (
   <div className="App">
     <MeditationPage/>
     <Breathing/>
   </div>
 );
}
 
export default App;