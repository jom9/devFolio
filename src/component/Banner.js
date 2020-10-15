import React from 'react';
import '../index.css';
class Banner extends React.Component{
  constructor(props){
    super(props);
    this.state={
      redirect:false
    };
    this.setPage = this.setPage.bind(this);
    this.redirectPage = this.redirectPage.bind(this);
  }
  setPage(){
    this.setState({redirect:true})
  }
  redirectPage(){
    if(this.state.redirect){
      window.location.href="./resume.pdf"

      //return <Link to='./cv.html' > some stuff </Link>
    }
  }
  render(){
    this.redirectPage();
    return(
      <nav id="site-navigation" className="main-navigation" role="navigation">
        <div className="menu-main-container">
          <ul id="primary-menu" className="main-list">
            <li className="menu-item">
              <button onClick={this.props.func.bind(this,"home")}style={{border: "none"}}>Home</button>
            </li>
            <li className="menu-item">
              <button onClick={this.props.func.bind(this,"projects")} style={{border: "none"}}>Projects</button>
            </li>
              {this.redirectPage()}
              <button onClick={this.setPage} style={{border: "none"}}>Resume</button>
            <li>




            </li>
          </ul>

        </div>
        </nav>
  );
  }

}



export default Banner;
