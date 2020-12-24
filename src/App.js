import './App.css';
import Header from "./components/header/header"
import Dashboard from "./components/content/dashboard/dashboard"
import doctoradd from "./components/content/doctoradd/doctoradd"
import doctorsearch from "./components/content/doctorsearch/doctorsearch"
import Login from "./login/LoginComp"
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Fragment>
            <Header/>
            <div className="container">   
                <Switch>    
                    <Route exact path='/' component={Dashboard}></Route> 
                    <Route exact path='/login' component={Login}></Route>  
                    <Route exact path='/dashboard' component={Dashboard}></Route> 
                    <Route exact path='/doctoradd' component={doctoradd}></Route>
                    <Route exact path='/doctorseach' component={doctorsearch}></Route> 
                </Switch>    
              </div>    
            </Fragment>
          </BrowserRouter>
    </div>
  );
}

export default App;
