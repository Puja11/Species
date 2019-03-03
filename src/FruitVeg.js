import React, { Component } from 'react';
import './Fruit_Veg.css';
import './App.css';
import style from 'bootstrap/dist/css/bootstrap.css';
import more from './more.svg';
import ModellingData from './ModellingData';
{/*component that fruit and vegetables data from the API*/}
class FruitVeg extends Component {
constructor(props){
	super(props);
	this.close=this.close.bind(this);
	this.show=this.show.bind(this);
	this.state={
		data_veg:""
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
componentWillMount(){
		fetch('http://styleguide.effectivedigital.com/interview/api/fruitveg')
	.then(response=>{;return response.json();})
	.then(data=>{
			let smallDiv= data.map((dis)=>{
			let id="modalVeg"+dis.Id;
				return(
				/*call to othercomponent to give structure to the fetched data*/
					<ModellingData Id={id}
							   Thumb={dis.ImageURLs.Thumb}
							   Title={dis.Title}
							   Description={dis.Description}
							   FullSize={dis.ImageURLs.FullSize}
							   Family={dis.Family}
							   Type="Genus"
							   CollectiveNoun={dis.Genus}
							   closeModel={this.close}
							   showModel={this.show}
				/>
				);
			});
		{/*the created structure is set in state*/}
			this.setState({data_veg:smallDiv});
			})
	.catch(error=>console.log(error))
}


  render() {
  
    return (
		<div className="container" id="dataContent">
			<div id="fruit_veg" className="row">{this.state.data_veg}</div>
		</div>
    );
  }
}

export default FruitVeg;