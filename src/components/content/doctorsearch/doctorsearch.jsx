import React, {Component} from 'react';
import './doctorsearch.css'
import Axios from 'axios';
export default class doctorsearch extends Component {
  
  constructor(props){
    super(props);
    this.state = {}
    
  }

  componentDidMount(){
    Axios.get("/doctor/get").then((doctors)=>{
      this.setState(doctors);
    })
  }

  render() {
    return (<div>
    {this.state.doctors.map((doctor, index) => (
        <p>Hello, {doctor.firstName} from {doctor.lastName}!</p>
    ))}
    </div>);
  }
}
