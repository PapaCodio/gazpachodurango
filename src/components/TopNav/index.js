import React from 'react';
import {Link} from 'react-router-dom';
import { StyledTopNav } from "./StyledComponents"

const TopNav = (props) => {

	const renderlinks = () => {
		const links = {
			'The Chili':'/',
			'Contact':'/'
		}
		return Object.keys(links).map(link=>{
			return (
				<div className="nav-links-item" key={link + links[link]}>
					<Link className="nav-link" to={links[link]}>
						{link}
					</Link>
				</div>
			)
		})
	}

	return (
		<StyledTopNav
			id='TopNav'
		>
			<div className={`nav-menu`} >
				<div className="nav-brand">
					<div className="nav-logo">
						<Link to='/'>
							<img src={props.imgSrc} alt="logo" />
						</Link>
					</div>
				</div>
				<div className="nav-links-list">
					{renderlinks()}
				</div>
			</div>
		</StyledTopNav>
	);
}
export default TopNav;