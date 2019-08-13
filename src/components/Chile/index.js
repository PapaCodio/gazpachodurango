import React from 'react';
import { Link } from 'react-router-dom';
import {StyledChili} from './StyledComponents'

const Chile = (props) => {
	// const mailTo= 'info@gazpachodurango.com';
	const callTo = '+19702599494'
  	return (
     		<StyledChili>
				 <div className="container">
					<div className="cta-section">
						<a className="call btn" href={`tel:${callTo}`}>Call</a>
						<a className="directions btn" href={`https://www.google.com/maps/place/Gazpacho+Restaurant/@37.2683431,-107.8833192,17z/data=!3m1!4b1!4m5!3m4!1s0x873c02a297910e25:0x2749d75971f9d75f!8m2!3d37.2683431!4d-107.8811359`} target="_blank" rel="noopener noreferrer">Directions</a>
						<Link className="menu btn" to={`/`}>Menu</Link>
					</div>
					<div className="section-one">
						<img src="/imgs/tamales.jpg" alt="Gazpacho Tamales"/>
						<div className="heading" >The Chile</div>
					</div>
					<div className="section-two">
						<p>
							Our business philosophy here at Gazpacho is simple: Use the freshest & best ingredients we can, and stay true to the traditional New Mexican red & green chile. We try to incorporate New Mexican flavor into as many recipes as we can. Not just the sauce, but to the background of the dishes as well.
						</p>
						<p>
							Before farm-to-table, eating local, and buying fresh were trends, we were doing it everyday. It is at the core of what we believe, how we cook, and what we want our customers to eat. We have always tried to buy as much product as we can locally; straight from the farmer and straight from the producer.
						</p>
						<p>
							We taste test and hand pick our very own barrels of tequila from Casa Herradura and Patron plus every year, we go down and get our own red chile from our farmer friends around Hatch, New Mexico. We’ll drive down there, spend the day, talk to the farmers, go out to the farm, and see the chile plants that are growing for the next year.
						</p>
						<p>
							We bring these chiles to Durango, Colorado to include in our dishes and for our annual chile roast. See our Facebook page for events!
						</p>
					</div>
					<div className="section-three">
						<img src="/imgs/burger.jpg" alt="Gazpacho Burger"/>
					</div>
				</div>
			 </StyledChili>
    	)
}

export default Chile;