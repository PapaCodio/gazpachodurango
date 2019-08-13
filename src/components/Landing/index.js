import React from 'react';
import { Link } from 'react-router-dom';
import {StyledLanding} from './StyledComponents'

const Landing = (props) => {
	// const mailTo= 'info@gazpachodurango.com';
	const callTo = '+19702599494'
  	return (
     		<StyledLanding>
				 <div className="container">
					<div className="cta-section">
						<a className="call btn" href={`tel:${callTo}`}>Call</a>
						<a className="directions btn" href={`https://www.google.com/maps/place/Gazpacho+Restaurant/@37.2683431,-107.8833192,17z/data=!3m1!4b1!4m5!3m4!1s0x873c02a297910e25:0x2749d75971f9d75f!8m2!3d37.2683431!4d-107.8811359`} target="_blank" rel="noopener noreferrer">Directions</a>
						<Link className="menu btn" to={`/`}>Menu</Link>
					</div>
					<div className="video-section" >
						<img src="/imgs/tres_gazpachos.jpg" alt="Tres Gazpachos" />
						{/* <img src="/imgs/play_btn.png" alt="Play Button" /> */}
					</div>
					<div className="section-one">
						<div className="tagline">
							Traditional <br/> northern New Mexican <br/> cooking featuring <br/> hot red and green chile <br/> specially grown for <br/> Gazpacho New Mexican <br/> Cooking y Cantina <br/> located in <br/> Durango, Colorado!
						</div>
						<img src="/imgs/gazpacho_sopapilla.jpg" alt="Gazpacho Sopapilla"/>
					</div>
					<div className="section-two">
						<img src="/imgs/gazpacho_margaritas_square.png" alt="coin"/>
						<div className="tagline">
							Our business philosophy here <br/> at Gazpacho is simple: <br/> Use the freshest & best <br/> ingredients we can, <br/> and stay true to the <br/> traditional New Mexican <br/> red & green chile.
						</div>
					</div>
					<div className="section-three">
						<div className="left section">
							<img className="banner-img" src="/imgs/gazpacho_banner.png" alt="Gazpacho Logo Banner"/>
						</div>
						<div className="right section">
							<div className="section-header">Specials</div>
							<div className="section-content">
								<ul>
									<li className="no-top-margin">TACO TUESDAY!!! We carefully prepare our Carne Asada to perfection and serve it up with $2 Tecates!</li>
									<li>Our own, hand-picked barrels of tequila from Casa Herradura for you to enjoy in a signature margarita, by itself, or in a cocktail of your choice!</li>
								</ul>
							</div>

						</div>
					</div>
					<div className="section-four">
						<img className="gazpacho_tacos" src="/imgs/gazpacho_tacos.jpg" alt="Gazpacho Tacos"/>
					</div>
					<div className="section-five">
						Established in 1991, Gazpacho is a family run business with the same values from it’s beginning - bringing fabulous authentic New Mexican cooking to Durango, Colorado. A locals favorite and a treat for visitors, Gazpacho brings great food, atmosphere, and community to every patron. We welcome everyone from all walks of life and try to reflect this in the cuisine we serve - read our story.
					</div>
				</div>
			 </StyledLanding>
    	)
}

export default Landing;