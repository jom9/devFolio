import React from 'react';
import axios from 'axios';
import '../index.css';

function createMarkup(element) {
  return { __html: element };
}
class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num:3,
      projects:[]
    };
  }
  componentDidMount(){
    var i= 0;
    while(i<this.state.num){
      axios.get('./examples/example' + i + '.html')

      .then((response) => {
        this.setState({projects:[...this.state.projects, response.data]})
      });

        i=i+1;
    }
  }

  render(){
     return(
       <div>


       {this.state.projects.map((i) =><div className="site-content" key={i}>
       <div className="primary">
         <div dangerouslySetInnerHTML={createMarkup(i)}/>
       </div>
     </div>)}
     <div className="site-content">
      <div className="primary">
      <h2><a href="https://github.com/jom9">My Github</a></h2>
      </div>
    </div>
     </div>


 );
  }

}

export default Projects;
