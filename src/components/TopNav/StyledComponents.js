import styled from 'styled-components';

const minWidth = '1100'

export const StyledTopNav = styled.div`
	.nav-menu {
		z-index: 1050;
		top: 0;
		width: 100%;
		display: flex;
		border-bottom: 3vw solid  #c197af;
		justify-content:space-between;
		background-color: black;
		padding:1rem 2rem;
		@media(min-width:${minWidth}px){
			border-bottom: ${minWidth*.03}px solid  #c197af;
		}

		.nav-links-list{
			display:flex;
			justify-content:space-between;
			width:65%;
			max-width:25rem;
			align-self:center;

			.nav-links-item{
				margin: 0 0;
				color:#ffffff;

				.nav-link{
					color:inherit;
					text-decoration: none;
					font-family:'Avenir Next';
					height:100%;
					width:100%;
					font-size:4vw;
					text-transform: uppercase;

					@media(min-width:600px){
						font-size:1.5rem;
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
					border-radius:50%;

					@media(min-width:${minWidth}px){
						height:${minWidth*.08}px;
					}
				}
			}
		}
	}
`;