import React from 'react';
import axios from 'axios';
import Example from './Example.js'
import '../index.css';
function createMarkup(element) {
  return { __html: element };
}
class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num:1,
      projects:[]
    };
  }
  componentDidMount(){
    var i= 0;
    while(i<this.state.num){
      axios.get('/examples/example' + i + '.html')
      .then((response) => {
        this.setState({projects:[...this.state.projects, response.data]})
      });
      /*
      axios.get('/examples/example' + i + '.gif')
      .then((response) => {
        this.setState({projects:[...this.state.projects, response.data]})
      });*/

        i=i+1;
    }
  }

  render(){
     return(
       this.state.projects.map((i) =><div className="site-content" key={i}>
       <div className="primary">
         <div dangerouslySetInnerHTML={createMarkup(i)}/>
       </div>
     </div>
   )
 );
  }

}

export default Projects;
