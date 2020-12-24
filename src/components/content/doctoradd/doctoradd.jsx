import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./doctoradd.css"
import axios from 'axios'

export default class Doctoradd extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstNm:'',
      lastNm: '',
      age: '',
      clinicName: '',
      registration: '',
      zip: ''
    };
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (event) =>{
    event.preventDefault();  
    axios.post('/doctor/post', {
      firstName: this.state.firstNm,
      lastName: this.state.lastNm,
      age: this.state.age,
      registrationNumber: this.state.registration,
      clinics:[{
        clinicName: this.state.clinicName,
        clinicCode: this.state.clinicName,
      }],
      address:{
        addressLineOne: '3302 Dunwoody gables Drive',
        zip: this.state.zip
      }
    }).then((result) => {
      console.log('Data added successfully');
    })
  }
  
  render(){
    const{firstNm, lastNm, age, clinicName, registration,zip} = this.state;
    return (<div>
        <form noValidate autoComplete="off" className="form-field" onSubmit={this.onSubmit}>
          <div class="row">
            <div class="input-group col-sm-4">
              <TextField className = "text-field" id="firstNm" name="firstNm" label="First Name" value={firstNm} variant="outlined" onChange={this.onChange}/>
            </div>
            <div class="input-group col-sm-4">
              <TextField className = "text-field" id="lastNm" name="lastNm"  value={lastNm} label="Last Name" variant="outlined" onChange={this.onChange}/>
            </div>
            <div class="input-group col-sm-4">
              <TextField className = "text-field" id="age" name="age"  label="Age" value={age} variant="outlined" onChange={this.onChange}/>
            </div>
          </div>
          <div class="row">
            <div class="input-group col-sm-4">
              <TextField className = "text-field" id="registration" name="registration"  label="Registration" value={registration} variant="outlined" onChange={this.onChange}/>
            </div>
          
            <div class="input-group col-sm-4">
              <TextField className = "text-field" id="clinicName" name="clinicName"  label="Clinic" value={clinicName} variant="outlined" onChange={this.onChange}/>
            </div>

            <div class="input-group col-sm-4">
              <TextField className = "text-field" id="zip" name="zip"  label="Zip Code" value={zip} variant="outlined" onChange={this.onChange}/>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <Button variant="contained" color="primary" className="button-field" onClick={this.onSubmit}>Submit</Button>
              <Button variant="contained" color="secondary" className="button-field">Reset</Button>
            </div>
          </div>
        </form>
      </div>);
  }
}