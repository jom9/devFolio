import React from 'react';
import '../index.css';
import axios from 'axios';
function createMarkup(element) {
  return { __html: element };
}
class AboutMe extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      content:"",// holds content
      num:2,
      projects:[]
    };
    this.getAboutMe = this.getAboutMe.bind(this);
  }


  getAboutMe(){return {__html:this.state.content};}//function that gets AboutMe info

  componentDidMount(){
    axios.get('./aboutme.html').then((response) => {

    this.setState({content:response.data})
    var i= 0;
    while(i<this.state.num){
      axios.get('./examples/example' + i + '.html')

      .then((response) => {
        this.setState({projects:[...this.state.projects, response.data]})
      });

        i=i+1;
    }
  });
  }
  render(){
    return(
        <div>
        <div dangerouslySetInnerHTML={this.getAboutMe()}/>
        <h2>I'm always contributing to personal projects or open source software, below are a choice few:</h2>
        <div className="primary">
        {this.state.projects.map((i) =><div className="site-content" key={i}>
        <div className="primary">
          <div dangerouslySetInnerHTML={createMarkup(i)}/>
        </div>
      </div>)}
        </div>
        <h2>Education:</h2>
        <div className="primary">
            <p>2020 NJIT Graduate. Completed a B.S in Computer Science and Applied Physics</p>
        </div>
        <div className="primary">
          <p>Contact Info:<br/>
            Email:<a href= "martinezjonathan4287@gmail.com">martinezjonathan4287@gmail.com</a><br/>
            Phone: 732-372-6672<br/>
            Address: 667 Elizabeth St, Perth Amboy NJ<br/>
          </p>
        </div>
        </div>

    );
  }


}

export default AboutMe;
