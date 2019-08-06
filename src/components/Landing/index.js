import React from 'react';
import {StyledLanding} from './StyledComponents'

const Landing = (props) => {
	const mailTo= 'monicalouise.design@gmail.com';
  	return (
     		<StyledLanding>
				 <div className="container">
					<div className="inquire-section">
						<a className="inquire-button" href={`mailto:${mailTo}`}>INQUIRE</a>
					</div>
					<div className="section-one">
						<img src="/img/IMG_0625.JPG" alt="lady"/>
						<div className="tagline">
							Dynamic illustration <br/> that can take your <br/> brand to a new level
						</div>
					</div>
					<div className="section-two">
						<img src="/img/IMG_0626.JPG" alt="coin"/>
						<div className="tagline">
							Personalized graphic content, <br/> perfecting your media image. <br/> Portraits, product, landscape or <br/> abstract, define your image with <br/> Monica Louise Design.
						</div>
					</div>
					<div className="section-three">
						<div className="title">
							Monica Louise Design
						</div>
						<div className="content-container" >
							<img src="/img/IMG_0628.JPG" alt="coin"/>
							<div className="tagline left">
								"MLD helped my <br/> brand define the <br/> creative elements <br/> that were previously <br/> lacking."
							</div>
							<div className="tagline right">
								"The creative content that <br/> helped our social media <br/> grow was all done by MLD. <br/> Before it, our company felt <br/> stagnant and had lost <br/> direction."
							</div>
						</div>
					</div>
					<div className="inquire-section">
					<a className="inquire-button" href={`mailto:${mailTo}`}>INQUIRE</a>
					</div>
				</div>
			 </StyledLanding>
    	)
}

export default Landing;