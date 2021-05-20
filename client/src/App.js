import React, {Component} from 'react'; 
import '@progress/kendo-theme-default/dist/all.css'; 
import './App.css';
import HomePage from './pages/homepage/homepage';
import Navigation from './pages/navigation/navigation';
import axios from 'axios'; 
import {Switch, Route} from 'react-router-dom'; 

function App() {
  const loadUser = async() => {
    const res = await axios.get('/users'); 
    res.data.map(el => console.log(el)); 
  }
  return (
    <div className="App">
      <Navigation/> 
      <Switch>
          <Route exact path ='/' component={HomePage}></Route>
      </Switch>
      <button onClick={loadUser}>Load user</button>
    </div>
  );
}
export default App;
