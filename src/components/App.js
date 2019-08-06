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
				<div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}}>
					<TopNav imgSrc="/imgs/gazpacho.png" />
					<Switch>
						<Route path="/" exact component={Landing} />
						<Route path="/" component={Landing} />
					</Switch>
					<Footer imgSrc="/img/logo_square.png" />
				</div>
			</Router>
		);
	}
}

export default App;