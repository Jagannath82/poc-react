import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { connect } from "react-redux";
import { AddUserProfile } from '../actions/Auth'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.signup = this.signup.bind(this);
    
  }

  signup(res) {
    const googleresponse = {
      Name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      Image: res.profileObj.imageUrl,
      ProviderId: 'Google'
    };
    debugger;
    const { addUserProfileProps } = this.props.actions;
    addUserProfileProps.AddUserProfile(googleresponse);
    sessionStorage.setItem("userData", JSON.stringify(googleresponse));
    this.props.history.push('/Dashboard')
  };

  responseGoogle = (response) => {
    console.log(response);
    var res = response.profileObj;
    console.log(res);
    debugger;
    this.signup(response);
  }

  render() {
    
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-12 btn btn-info">
            Login With Google Using ReactJS
            </div>
        </div>
        <div className="row">
          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <GoogleLogin
                clientId="521131243233-hgdfle02oc1446f867if7p724fbakqf4.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle} ></GoogleLogin>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addUserProfileProps : AddUserProfile
}

export default connect(null, mapDispatchToProps)(Login)
