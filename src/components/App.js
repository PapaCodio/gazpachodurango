import './shared.css';
import React from 'react';
import { Router, Route , Switch  } from 'react-router-dom';
import history from '../history';

import TopNav from './TopNav';
import Footer from './Footer';
import Landing from './Landing';

import { StyledApp } from './StyledApp';

class App extends React.Component {
	render() {
		return (
			<Router history={history}>
				<StyledApp >
					<div className="img"><img src='/imgs/logo_trimmed.png' alt='Logo'/></div>
					<div className="app">
						<TopNav imgSrc="/imgs/gazpacho.png" />
						<Switch>
							<Route path="/" exact component={Landing} />
							<Route path="/" component={Landing} />
						</Switch>
						<Footer />
					</div>
					<div className="img flipped"><img src='/imgs/logo_trimmed_flipped.png' alt='Logo'/></div>
				</StyledApp>
			</Router>
		);
	}
}

export default App;