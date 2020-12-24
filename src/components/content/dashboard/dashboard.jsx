import React, { Component } from 'react'
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import './dashboard.css'

export class Dashboard extends Component {
  constructor(props){
      super(props);
      this.state = {
        name:'',
    };
  }

  componentDidMount() {
    const profileData = this.props.profile;
    console.log(profileData);
    
    const data = JSON.parse(sessionStorage.getItem('userData'));
    if(data){
      console.log(data.Name);
      this.setState({name: data.Name})
    }
  }

  render() {
    
    return (
        <div class="container">
          <section class="cms-boxes">
            <div class="container-fluid">
              <div class="row">
                  <div class="col-md-4 cms-boxes-outer">
                  <Link to="/doctoradd">  
                
                    <div class="cms-boxes-items cms-features">
                      <div class="boxes-align">
                        <div class="small-box">
                          <i class="fa fa-4x fa-laptop">&nbsp;</i>
                          <h2>Add Doctors</h2>
                          <p>Gain valuable insights with WebCorpCo Data.</p>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                <div class="col-md-4 cms-boxes-outer">
                <Link to="/doctorsearch">
                  <div class="cms-boxes-items cms-security">
                    <div class="boxes-align">
                      <div class="small-box">
                        <i class="fa fa-4x fa-cog">&nbsp;</i>
                        <h2>Doctor Search</h2>
                        <p>Pull in realtime data from every source on the web.</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>)
  }
}

const mapStateToProps = function(state) {
  return {
    profile: state.userProfile
  }
}

export default connect(mapStateToProps)(Dashboard)