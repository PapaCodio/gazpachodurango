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
						<Link className="menu btn" to={`/`}>Menu</Link>
						<a className="directions btn" href={`https://www.google.com/maps/place/Gazpacho+Restaurant/@37.2683431,-107.8833192,17z/data=!3m1!4b1!4m5!3m4!1s0x873c02a297910e25:0x2749d75971f9d75f!8m2!3d37.2683431!4d-107.8811359`} target="_blank" rel="noopener noreferrer">Directions</a>
					</div>
					<div className="video-section" >
						<img src="/imgs/play_btn.png" alt="Play Button" />
					</div>
					<div className="section-one">
						<div className="tagline">
							Gazpacho's <br/> Restaurant <br/> Has The Best <br/> Green Chile In <br/> Durango
						</div>
						<img src="/imgs/gazpacho_sopapilla.jpg" alt="Gazpacho Sopapilla"/>
					</div>
					<div className="section-two">
						<img src="/imgs/gazpacho_margaritas_square.png" alt="coin"/>
						<div className="tagline">
							Personalized content matching <br/> descriptions of green Chili <br/> and stuff that has to do with <br/> yummy food and margaritas <br/> and all that jazz. Tacos and <br/> stuff about tacos.
						</div>
					</div>
					<div className="section-three">
						<div className="left section">
							<img className="banner-img" src="/imgs/gazpacho_banner.png" alt="Gazpacho Logo Banner"/>
						</div>
						<div className="right section">
							<div className="section-header">Specials</div>
							<img className="img" src="/imgs/blank.png" alt="Gazpacho Logo Banner"/>
						</div>
					</div>
					<div className="section-four">
						<img className="gazpacho_tacos" src="/imgs/gazpacho_tacos.jpg" alt="Gazpacho Tacos"/>
					</div>
					<div className="section-five">
						Gazpacho's Restaurant has the best green chile in durango. include the story here with details refined and the story about where they get the green chile and how they hand bick it and select it and roast it and make rice and beans taste so good mmmm, yummy.
					</div>
				</div>
			 </StyledLanding>
    	)
}

export default Landing;