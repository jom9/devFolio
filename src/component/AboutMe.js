import React from 'react';
import '../index.css';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

class AboutMe extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      content:""// holds content
    };
    this.getAboutMe = this.getAboutMe.bind(this);
  }


  getAboutMe(){return {__html:this.state.content};}//function that gets AboutMe info

  componentDidMount(){
    axios.get('./aboutme.html').then((response) => {
    console.log(response.data);
    this.setState({content:response.data})
  });
  }
  render(){
    return(
    <div>
    <div className="site-content">
      <div className="primary">
        <div dangerouslySetInnerHTML={this.getAboutMe()}/>
      </div>
    </div>
    </div>

    );
  }


}

export default AboutMe;
