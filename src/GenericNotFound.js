import React, { Component } from 'react';
import style from 'bootstrap/dist/css/bootstrap.css';

{/* Stateless component creates each tile and modal dialog for each data that is recieved via props*/}
class GenericNotFound extends Component {
constructor(){
super();
}
			render(){	return(
				/* creation of list data starts here*/
				<div  class="container" id="dataContent">404: Not found</div>		
				
		
			);
			}
		}

export default GenericNotFound;
