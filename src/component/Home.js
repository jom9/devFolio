import React from 'react';
import '../index.css';
import axios from 'axios';
import Projects from './Projects.js'
import AboutMe from './AboutMe'
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      content:""
    };
  }

  componentDidMount(){
    axios.get('./aboutme.html').then((response) => {console.log(response.data);
      this.setState({content:response.data})
    });
  }

    render(){
      return(
      <div>

      <div className="site-content">
        <div className="primary">
          <AboutMe/>
        </div>
      </div>
      </div>

      );
    }
  }
export default Home;
