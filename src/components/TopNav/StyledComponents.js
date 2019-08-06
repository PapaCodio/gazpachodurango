import styled from 'styled-components';

const maxWidth = '1000'

export const StyledTopNav = styled.div`
	width:100%;
	max-width:${maxWidth}px;
	.nav-menu {
		z-index: 1050;
		top: 0;
		width: 100%;
		display: flex;
		border-bottom: 3vw solid  #e21e26;
		justify-content:space-between;
		background-color: black;
		padding:1rem 2rem;
		@media(min-width:${maxWidth}px){
			border-bottom: ${maxWidth*.03}px solid  #e21e26;
		}

		.nav-links-list{
			display:flex;
			justify-content:flex-end;
			width:65%;
			max-width:25rem;
			align-self:center;

			.nav-links-item{
				margin: 0 0;
				color:#ffffff;
				margin:0 8px;

				.nav-link{
					color:inherit;
					text-decoration: none;
					font-family:'Avenir Next';
					height:100%;
					width:100%;
					font-size:3.5vw;
					text-transform: uppercase;

					@media(min-width:600px){
						font-size:1.5rem;
						margin: 0 1rem;
					}
				}
			}
		}
		.nav-brand {
			align-self:center;
			.nav-logo {
				img{
					height:8vw;
					vertical-align:middle;

					@media(min-width:${maxWidth}px){
						height:${maxWidth*.08}px;
					}
				}
			}
		}
	}
`;