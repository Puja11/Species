import React, { Component } from 'react';
import './Animal.css';
import './App.css';
import style from 'bootstrap/dist/css/bootstrap.css';
import more from './more.svg';
{/* Stateless component creates each tile and modal dialog for each data that is recieved via props*/}
const ModellingData = (props) => {
				return(
				/* creation of list data starts here*/
					<div key={props.Id+"div"}>
						<div key={props.Id} className="row listData">
							<div className="col-xs-4 col-md-3 col-lg-1 image" >
								<img className="img img-fluid img-responsive" src={props.Thumb}/>
							</div>
							<div className="col-xs-6 col-md-6 col-lg-10 " >
								<div  style={{'fontWeight':'bold'}}>{props.Title}</div>
								<p>{props.Description}</p>
							</div>
							<div className="col-xs-2 col-md-3 col-lg-1 moreButton">
								<img className="imageMore" src={more} onClick={()=>props.showModel(props.Id)} />
							</div>
						</div>
						{/* creation of list data ends here*/}
						{/* creation of modal dialog starts here*/}
						<div className="modal fade" key={"modal"+props.Id} id={props.Id} role="dialog">
							<div className="modal-dialog">
							  <div className="modal-content">
								<div className="modal-header">
								  <button type="button" className="close" onClick={props.closeModel.bind(this,props.Id)}>&times;</button>
								  <h4 className="modal-title">{props.Title}</h4>
								</div>
								<div className="modal-body">
								<img className="img img-fluid img-responsive fullImg" src={props.FullSize}/>
								  <p><b>Family : </b>{props.Family}</p>
								  <p><b>{props.Type} : </b>{props.CollectiveNoun}</p>
								
								</div>
								<div className="modal-footer">
								  <button type="button" className="btn btn-default" onClick={props.closeModel.bind(this,props.Id)}>Close</button>
								</div>
								</div>
							</div>
						</div>
						{/* creation of modal dialog ends here*/}
					</div>
				
				);
			
		
			}

export default ModellingData;
