import React, {Component, Fragment} from 'react';
import './header.css'
import { Link } from 'react-router-dom';
export default class header extends Component {
  render() {
    return (<div class="header">
              <a class="logo" href="/dashboard">MiClinic</a>
              <div class="header-right">
                <a class="active" href="#home">Home</a>
                <Fragment>
                  <Link to="/login">Sign-in</Link>
                </Fragment>

                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
    </div>);
  }
}
