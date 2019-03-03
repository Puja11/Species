import React, { Component } from 'react';
import './Animal.css';
import './App.css';
import style from 'bootstrap/dist/css/bootstrap.css';
import more from './more.svg';
import ModellingData from './ModellingData';
{/*component that animals data from the API*/}
class Animals extends Component {
constructor(props){
	super(props);
	this.close=this.close.bind(this);
	this.show=this.show.bind(this);
	this.state={
		data_animal:"",
		
	}

}
/*functions used to close the modal dialog*/
close(id){
document.getElementById(id).style.display="none";
document.getElementById(id).style.opacity="0";
}
/*functions used to open the modal dialog*/
show(id){
document.getElementById(id).style.display="block";
document.getElementById(id).style.opacity="1";
}
/*functions used to fetch data before the components mount andmap each data*/
componentDidMount(){
	fetch('http://styleguide.effectivedigital.com/interview/api/animals')
	.then(response=>{;return response.json();})
	.then(data=>{
			let smallDiv= data.map((dis)=>{
			let id="modalAnimal"+dis.Id;
				return(
				/*call to other component to give structure to the fetched data*/
				<ModellingData Id={id}
							   Thumb={dis.ImageURLs.Thumb}
							   Title={dis.Title}
							   Description={dis.Description}
							   FullSize={dis.ImageURLs.FullSize}
							   Family={dis.Family}
							   Type="Collective Noun"
							   CollectiveNoun={dis.CollectiveNoun}
							   closeModel={this.close}
							   showModel={this.show}
				/>
							
				);
			
		});
		{/*the created structure is set in state*/}
			this.setState({data_animal:smallDiv});
		})
	.catch(error=>console.log(error))
	
}



  render() {
  
    return (
		<div className="container" id="dataContent">
		  <div id="animals" className="row">{this.state.data_animal}</div>
		</div>
    );
  }
}

export default Animals;
