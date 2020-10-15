import React from 'react';
import '../index.css';
import axios from 'axios';

class CV extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      content:""
    };
    this.getCV = this.getCV.bind(this);
  }
  componentDidMount(){
    axios.get('./resume.pdf').then((response) => {console.log(response.data);
      this.setState({content:response.data})
    });
  }
  getCV(){
    return {__html:this.state.content};
  }
  render(){
    return(
      <div className="site-content">
        <div className="primary">
          <div dangerouslySetInnerHTML={this.getCV()}/>
        </div>
      </div>

    );
  }

}


export default CV;
