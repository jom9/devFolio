import React from 'react';
import '../index.css';
class Banner extends React.Component{

  render(){
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
            <li className="menu-item">
              <button onClick={this.props.func.bind(this,"cv")} style={{border: "none"}}>CV</button>
            </li>
          </ul>

        </div>
        </nav>
  );
  }

}



export default Banner;
