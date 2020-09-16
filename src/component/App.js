import React from 'react';
import '../index.css';
import Banner from './Banner.js'
import Content from './Content.js'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      page:"home"
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage(val){
    if(val==="home" && this.state.page!=="home"){
      this.setState({page:"home"});
    }
    else if (val==="projects" && this.state.page!=="projects") {
        this.setState({page:"projects"});
    }
    else if (val === "cv"&& this.state.page!=="cv") {
        this.setState({page:"cv"});
    }

  }
  render(){
  return(
    <div>
    <header className="site-header" role="banner">
    <div className="site-branding">
      <h1 className="site-title">
        <a href="./" className="title-text" rel="home">Jonathan Martinez</a>
      </h1>

    </div>
    <Banner func={this.changePage}/>
    </header>
    <Content val={this.state.page}/>
    </div>
  );
}

}
export default App;
