import React from 'react';
import '../index.css';
import Projects from './Projects.js';
import Home from './Home.js';
import CV from './CV.js'
import { BrowserRouter as Router } from 'react-router-dom';

class Content extends React.Component{

  render(){
    if(this.props.val==='home'){
      return(
        <Router basename={process.env.PUBLIC_URL}><Home/></Router>
      );
    }
    else if (this.props.val==='projects') {
      return(
        <Router basename={process.env.PUBLIC_URL}><Projects/></Router>
      );
    }
    else if (this.props.val==='cv') {
      return(
        <Router basename={process.env.PUBLIC_URL}><CV/></Router>
      );
    }
  }
}


export default Content;
