import React, {Component} from 'react'; 
import ReactPlayer from 'react-player'
import '@progress/kendo-theme-default/dist/all.css'; 
import './App.css';
import {Calendar} from '@progress/kendo-react-dateinputs'; 
import HomePage from './pages/homepage/homepage';
import Navigation from './pages/navigation/navigation';
import axios from 'axios'; 



function App() {
  const loadUser = async() => {
    const res = await axios.get('/users'); 
    res.data.map(el => console.log(el)); 
  }
  return (
    <div className="App">
      <Navigation/> 
      <HomePage/>
      <button onClick={loadUser}>Load user</button>
    </div>
  );
}
export default App;
