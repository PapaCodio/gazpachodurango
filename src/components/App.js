import './shared.css';
import React from 'react';
import { Router, Route , Switch  } from 'react-router-dom';
import history from '../history';

import TopNav from './TopNav';
import Footer from './Footer';
import Landing from './Landing';

class App extends React.Component {
	render() {
		return (
			<Router history={history}>
				<TopNav imgSrc="/imgs/gazpacho.png" />
				<div style={{display:'flex', justifyContent:'center', width:'100%'}}>
					<Switch>
						<Route path="/" exact component={Landing} />
						<Route path="/" component={Landing} />
					</Switch>
				</div>
				<Footer imgSrc="/img/logo_square.png" />
			</Router>
		);
	}
}

export default App;