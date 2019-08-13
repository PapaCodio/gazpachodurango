import React from 'react';
import { Link } from 'react-router-dom';
import {StyledChili} from './StyledComponents'

const Chile = (props) => {
	// const mailTo= 'info@gazpachodurango.com';
	const callTo = '+19702599494'
	const mailTo = 'info@gazpachodurango.com'
  	return (
     		<StyledChili>
				 <div className="container">
					<div className="cta-section">
						<a className="call btn" href={`tel:${callTo}`}>Call</a>
						<a className="directions btn" href={`https://www.google.com/maps/place/Gazpacho+Restaurant/@37.2683431,-107.8833192,17z/data=!3m1!4b1!4m5!3m4!1s0x873c02a297910e25:0x2749d75971f9d75f!8m2!3d37.2683431!4d-107.8811359`} target="_blank" rel="noopener noreferrer">Directions</a>
						<Link className="menu btn" to={`/`}>Menu</Link>
					</div>
					<div className="section-one">
						<img src="/imgs/fajitas.jpg" alt="Gazpacho Tamales"/>
						<div className="section-content" >
							Gazpacho New Mexican Cooking y Cantina opened in September of 1991.  This restaurant was the vision of restaurateur James Arias, a son of New Mexico and a true chilehead.  After decades in the restaurant business, Jim wanted to get back to his roots; to the food of his childhood.  Jim and his long time business partner, Bill “Beatle” Abshagen, put together a plan to bring authentic New Mexican cooking to Durango (and chile roasting to Durango, but that is another story)!  Durangoans loved the food, the ambiance, and the character of the new restaurant. Today we hold true to Big Jim’s vision and love of New Mexican chile!
						</div>
					</div>
					<div className="cta-section">
						<a className="email btn" href={`mailto:${mailTo}`}>Email</a>
					</div>
					<div className="section-two">
						<img src="/imgs/wings.jpg" alt="Gazpacho Burger"/>
					</div>
					<div className="section-three">
						<h1>Meet The Owner</h1>
						<p>
							Matt Arias, owner of Gazpacho New Mexican Cooking y Cantina, grew up in the restaurant business where his first real job as a high school student was becoming an integral part of remodeling the building and creating the ambiance for Gazpacho. After graduating college with a B.A. in History at Montana State University in 1998, Matt followed his continued vision for the family business and took over in 1998 under his Dad’s watchful eye and has grown it into the award winning business it is today. Integral to the intangible, welcoming vibe you get when you walk into Gazpacho, is Matt’s understated, humble character that never fails to appreciate the contributions and needs of his clientele, community, employees, partners and family. This pride and quality Matt has woven into the Arias family business also shines through with an incredible local following that gathers for the much anticipated daily specials and casual fine dining atmosphere, while avid out-of-town fans make any excuse to meet at Gazpacho for wedding rehearsal dinners and receptions, family reunions and graduation celebrations.
						</p>
						<p>
							When Durango is in need, Matt is a reliable go-to for supporting local causes that are personal in nature such as helping out local families when they have hard times, fundraisers for people with illnesses and, of course, the local school causes like the Durango Foundation for Educational Excellence. Matt budgets monthly for community donations and is always eager to find out the new theme for Snowdown, a greatly anticipated Durango weekend that people from all around come to participate in, by holding their own annual Outhouse Stuffing event.
						</p>
						<p>
							Matt, his wife Haley and sons Emmett and Owen embrace the Durango lifestyle. Working hard and playing hard is easy to do in such a beautiful setting!
						</p>
						<p>
							Matt truly loves Durango, the community that supports his business and the all fun there is to have outdoors around us. Matt summed up his solid commitment to life here in the Animas Valley when he said, “Durango – a fun place to live, a great place to raise kids.”
						</p>
						<p>
							Stop by and meet the owner of Gazpacho’s today!
						</p>
					</div>
				</div>
			 </StyledChili>
    	)
}

export default Chile;