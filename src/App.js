import React, { Component } from 'react'
import './App.css';
import MeditationPage from './components/MeditationPage'
import MoodJournal from './components/MoodJournal'
import ButtonAppBar from './components/ButtonAppBar'
import Breathing from './components/Breathing'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
        <ButtonAppBar/>
        <Footer/>

    </div>
 );
}
 
export default App;