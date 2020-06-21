import React from 'react';
import '../index.css';
import axios from 'axios';
import Projects from './Projects.js'
import { BrowserRouter as Router } from 'react-router-dom';

class Content extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      content:""
    };
    this.getAboutMe = this.getAboutMe.bind(this);
    this.setAboutMe = this.setAboutMe.bind(this);
  }


  setAboutMe(prevProps){
    if(this.props.val!=prevProps.val &&this.props.val=="home"){
      axios.get('./aboutme.html')
  .then((response) => {
    console.log(response.data);
    this.setState({content:response.data})
  });
    }
  }
  getAboutMe(){
    return {__html:this.state.content};
  }
  componentDidMount(){
    axios.get('./aboutme.html').then((response) => {console.log(response.data);
      this.setState({content:response.data})
    });
  }
  componentDidUpdate(prevProps){
    this.setAboutMe(prevProps);

  }
  render(){
    console.log(process.env.PUBLIC_URL);
      if(this.props.val=='home'){
      return(

          <div className="site-content">
            <div className="primary">
              <div dangerouslySetInnerHTML={this.getAboutMe()}/>
            </div>
          </div>

        );
      }
      else if(this.props.val=='projects'){
        return(<Router basename={process.env.PUBLIC_URL}>
          <Projects/>
          </Router>

        );
      }
      else{
        return(
            <div className="site-content">
              <div className="primary">
                <div dangerouslySetInnerHTML={this.getAboutMe()}/>
              </div>
            </div>
          );
      }


  }
}


export default Content;
