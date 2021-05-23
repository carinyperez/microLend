import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import Navigation from "./pages/navigation/navigation";
import Borrow from "../src/pages/borrow/borrow.component";
import Lend from "../src/pages/lend/lend.component";
import Loan from "../src/pages/lend/loan.component";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./components/footer/footer.component";
import Login from "./components/login/login.component";
import Mentors from "./pages/mentors/mentors.component";
import Lender from "./pages/lender/lender.component";
import LoanDetails from './components/loan-details/loan-details.component';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/borrow" component={Borrow}></Route>
            <Route exact path="/lend" component={Lender}></Route>
            <Route exact path="/lend-causes" component={Lend}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/mentors" component={Mentors}></Route>
            <Route exact path="/loan-application" component={Loan}></Route>
            <Route exact path="/loan-details" component={LoanDetails}></Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
