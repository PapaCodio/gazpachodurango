import React from 'react';
import { StyledFooter } from "./StyledComponents"

const Footer = (props) => {

	const renderlinks = () => {
		const links = {
			facebook: {
				alt:'facebook logo',
				src:'/imgs/facebook.png',
				url:'https://www.facebook.com/GazpachoDurango/'
			},
			instagram: {
				alt:'instagram logo',
				src:'/imgs/instagram.png',
				url:'https://www.instagram.com/gazpachodurango/'
			},
			linkedIn: {
				alt:'twitter logo',
				src:'/imgs/twitter.png',
				url:'https://twitter.com/gazpachodurango'
			}
		}
		return Object.keys(links).map(link=>{
			return(
				<div key={link + links[link]} className="footer-links-item" >
					<a className="footer-link" href={links[link].url} rel="noopener noreferrer" target="_blank">
						<img src={links[link].src} alt={links[link].alt} />
					</a>
				</div>
			)
		});
	}
	return (
		<StyledFooter
			id='footer'
		>
			<div className={`footer-menu`} >
				<div className="footer-links-list">
					{renderlinks()}
				</div>
				<div className="footer-company hide">
					Proudly Created by:<br/> <a className="footer-link" href='https://mountainmotionmedia.com/' rel="noopener noreferrer" target="_blank">Mountain Motion Media LLC.</a>
				</div>
				<div className="footer-company">
					Powered by <a className="footer-link" href='https://mountainmotionmedia.com/' rel="noopener noreferrer" target="_blank">Mountain Motion Media LLC.</a>
				</div>
			</div>
		</StyledFooter>
	);
}
export default Footer;