import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Root from './Root';
import Animals from './Animals';
import FruitVeg from './FruitVeg'
import GenericNotFound from './GenericNotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/*component that creates routes for application*/
class App extends Component {
  render() {
    return (
     <BrowserRouter>
	 <div>
	 <Root/>
	 <Switch>
		<Route path="/" component={Animals} exact/>
		<Route path="/species" component={Animals} exact/>
		<Route path="/FruitVeg" component={FruitVeg}/>
		<Route path="/Animals" component={Animals}/>
		{/*routes written for any junk route*/}
		<Route  component={GenericNotFound} />
	</Switch>
		
		</div>
	 </BrowserRouter>
    );
  }
}

export default App;
