import styled from 'styled-components';
const maxWidth = '1000'
export const StyledFooter = styled.div`
	width:100%;
	max-width:${maxWidth}px;
	.footer-menu {
		text-align:center;
		z-index: 1050;
		top: 0;
		width: 100%;
		border-top: 1.5rem solid  #e21e26;
		display:grid;
		grid-template-columns:auto;
		grid-template-rows: auto auto auto;
		grid-template-areas:'links'
							'copyright'
							'webcreator';
		justify-content:center;
		align-content:center;
		padding:1rem;
		background-color: black;
		color: white;
		font-size:2vw;
		font-family:'Avenir Next';
		text-transform:uppercase;


		@media(min-width:800px){
			grid-template-rows:auto;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-areas:'copyright links webcreator';
			font-size: 1.2vw;
		}

		@media(min-width:${maxWidth}px){
			font-size:.75rem
		}

		.footer-links-list{
			grid-area:links;
			display:flex;
			justify-content:center;
			margin:16px;

			.footer-links-item{
				margin: 0 0;
				display:inline-block;

				.footer-link{
					padding:0 16px;
					/* box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); */
				}
				img{
					height: 10vw;
					max-height:44px;
				}
			}
		}
		.footer-creators {
			grid-area:copyright;
			align-self:center;
			justify-self:center;
			margin:16px 0px;
			a{
				color:inherit;
				text-decoration:none;
			}
		}
		.footer-company {
			grid-area:webcreator;
			align-self:center;
			justify-self:center;
			margin:16px 0px;
			a{
				color:inherit;
				text-decoration:none;
			}
		}
	}
`;