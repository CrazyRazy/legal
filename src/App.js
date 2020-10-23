import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Views/Auth/Login";
import Dashboard from "./Views/Dashboard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Roles from "./Views/Administration/Roles";
import Users from "./Views/Administration/Users";
import Clients from "./Views/Clients/Clients";
import Cases from "./Views/Cases/Cases";
import Privileges from "./Views/Administration/Privileges";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div id="layout-wrapper">
        <Router>
            <Header/>
            <div className="main-content">

            <Switch>
                <Route exact path="/login"><Login/></Route>
                <Route exact path="/dashboard"><Dashboard/> </Route>
                <Route exact path="/users"><Users/> </Route>
                <Route exact path="/roles"><Roles/> </Route>
                <Route exact path="/privileges"><Privileges/> </Route>
                <Route exact path="/clients"><Clients/> </Route>
                <Route exact path="/cases"><Cases/> </Route>
                <Route component={PageNotFound}/>
            </Switch>
            </div>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
