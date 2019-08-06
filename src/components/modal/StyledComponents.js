import styled from 'styled-components';

export const StyledModal = styled.div`
	opacity: 0;

	&.fade-in {
		opacity: 1;
		transition: opacity linear ${props => props.transitionInTime || '0.15'}s;
	}
	&.fade-out {
		opacity: 0;
		transition: opacity linear ${props => props.transitionOutTime || '0.15'}s;
	}
	.background {
		position: fixed;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1040;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		outline: 0;
	}
	.box-dialog {
		position: fixed;
		z-index: 1050;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 70vw;
		max-width:500px;
		max-height: 82.5%;
		overflow-y:auto;
		display: grid;
		grid-template-rows:auto auto auto;
		grid-template-columns:100%;
		grid-template-areas:'header'
							'content'
							'footer';
		padding:24px;
		background-color: #fefefe;
		box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);

		.box-content {
			grid-area:content;
			font-size: 1rem;
			padding-top:16px;
		}
		.box-header {
			grid-area:header;
			display:flex;
			align-items:center;
			justify-content:center;
			padding-bottom:16px;
			border-bottom: 1px solid #c7c7c7;
			.box-title {
				text-align:center;
				margin: 0 0 0 0;
				font-size: 2rem;
				font-weight: 400;
			}
		}
		.box-footer {
			grid-area:footer;
			display:flex;
			align-items:center;
			justify-content:center;
			border-top: 1px solid #c7c7c7;
		}
		.mybtn{
			margin: .5rem .3rem;
			border-radius: 2px;
			box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.5)
		}
		.closebtn {
			background-color:${props=> props.closeBtnBackgroundColor || "#f9a825"};
    		color: ${props=> props.closeBtnColor || "#ffffff"};
		}
		.submitbtn {
			background-color:${props=> props.submitBtnBackgroundColor || "#f9a825"};
    		color: ${props=> props.submitBtnColor || "#ffffff"};
		}

	}
`;