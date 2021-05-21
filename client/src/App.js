import React from 'react'; 
import '@progress/kendo-theme-default/dist/all.css'; 
import './App.css';
import HomePage from './pages/homepage/homepage';
import Navigation from './pages/navigation/navigation';
import Borrow from '../src/pages/borrow/borrow.component'
import {Switch, Route, BrowserRouter} from 'react-router-dom'; 
import {Provider} from 'react-redux';
import store from './redux/store';

const  App = () => {
  return (
    <Provider store={store}> 
      <BrowserRouter>
      <div className="App">
        <Navigation/> 
        <Switch>
            <Route exact path ='/' component={HomePage}></Route>
            <Route exact path ='/borrow' component={Borrow}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
