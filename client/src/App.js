import React, {Component} from 'react'; 
import ReactPlayer from 'react-player'
import '@progress/kendo-theme-default/dist/all.css'; 
import './App.css';
import {Calendar} from '@progress/kendo-react-dateinputs'; 
import HomePage from './pages/homepage/homepage';
import Navigation from './pages/navigation/navigation'; 


function App() {
  return (
    <div className="App">
      <Navigation/> 
      <HomePage/>
    </div>
  );
}
export default App;
