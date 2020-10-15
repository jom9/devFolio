import React from 'react';
import '../index.css';
import axios from 'axios';

import AboutMe from './AboutMe'
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      content:""
    };
  }

  componentDidMount(){
    axios.get('./aboutme.html').then((response) => {
      this.setState({content:response.data})
    });
  }

    render(){
      return(
      <div>

      <div className="site-content">

          <AboutMe/>

      </div>
      </div>

      );
    }
  }
export default Home;
