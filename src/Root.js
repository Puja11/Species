import React, { Component } from 'react';
import App from './App'
import style from 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Navigation';
import Animals from './Animals';
import Fruit_Veg from './FruitVeg'
{/* Main Root Component*/}
class Root extends Component {
constructor(props){
	super(props);
	
	}
	
  render() {
  
    return (
		<div className="container">
			<div className="row">	
				< Navigation Link1="Animals" Link2="Fruits And Vegetables">	
				</Navigation>
			</div>
					
		</div>
    );
  }
}

export default Root;

