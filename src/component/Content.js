import React from 'react';
import '../index.css';
import axios from 'axios';
import Projects from './Projects.js'
class Content extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      content:""
    };
    this.getAboutMe = this.getAboutMe.bind(this);
    this.setExample = this.setExample.bind(this);
  }
  setExample(prevProps){
    if(this.props.val!=prevProps.val &&this.props.val=="projects"){
      axios.get('/examples/cppchess.html')
  .then((response) => {
    console.log(response.data);
    this.setState({content:response.data})
  });
    }
  }
  setAboutMe(prevProps){
    if(this.props.val!=prevProps.val &&this.props.val=="home"){
      axios.get('/aboutme.html')
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
    axios.get('/aboutme.html').then((response) => {console.log(response.data);
      this.setState({content:response.data})
    });
  }
  componentDidUpdate(prevProps){
    this.setAboutMe(prevProps);
    this.setExample(prevProps);
  }
  render(){
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
        return(<Projects/>);
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
