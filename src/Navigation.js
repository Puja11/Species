import React, { Component } from 'react';
import App from './App'
import style from 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import menu from './menu.svg';
import './App.css';
{/*creation of responsive navigation bar*/}
class Navigation extends Component {
constructor(props){
	super(props);
	this.state={
		classNameNow:"nav navbar-nav navAnchor"
	}
}

  render() {
  
    return (
		<div>
		{/*Bootstrap navbar*/}
	  <nav className="navbar navbar-inverse navbar-fixed-top">
		 
			<div className="navbar-header">
			  <a className="navbar-brand" href="#">KnowledgeClass</a>
			</div>
			<ul className={this.state.classNameNow} >
			  <li ><NavLink to="/Animals" >{this.props.Link1}</NavLink></li>
			  <li><NavLink to="/FruitVeg" >{this.props.Link2}</NavLink></li>
			  {/*Creation of Bar for rensponsive navigation bar starts here*/}
			  <li id="barIconli" onClick={()=>{
				 var x = document.getElementsByClassName("navAnchor");
				 {/*use of state to toggle the menus in navigation bar*/}
				 {/*the addition of class hides and shows in menus accordingly*/}
				  if (this.state.classNameNow === "nav navbar-nav navAnchor") {
				
					this.setState({classNameNow:"nav navbar-nav navAnchor responsive"});
					
				  } else {
					
					this.setState({classNameNow:"nav navbar-nav navAnchor"});
					
					}
				  
			  }}> <img id="barIcon" src={menu} /> </li>
			  {/*Creation of Bar for rensponsive navigation bar ends here*/}
			</ul>
			</nav>
			
	  </div>
    );
  }
}

export default Navigation;

