import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { StyledModal } from "./StyledComponents"

class Modal extends React.Component {
	static defaultProps = {
		id: '',
		modalClass: '',
		modalSize: 'lg'
	};

	static propTypes = {
		id: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
        onSubmit: PropTypes.func,
		isOpen: PropTypes.bool.isRequired,
		modalClass: PropTypes.string,
        modalSize: PropTypes.string,
        title : PropTypes.string.isRequired,
        closeText : PropTypes.string,
		submitText : PropTypes.string,
		transitionInTime: PropTypes.number,
		transitionOutTime: PropTypes.number,
		submitBtnColor: PropTypes.string,
		submitBtnBackgroundColor: PropTypes.string,
		closeBtnColor: PropTypes.string,
		closeBtnBackgroundColor: PropTypes.string,
	};

    state = { fadeType: null };

    background = React.createRef();

	componentDidMount() {
		window.addEventListener('keydown', this.onEscKeyDown, false);
		setTimeout(() => this.setState({ fadeType: 'in' }), 0);
	}
	componentDidUpdate(prevProps) {
		if (!this.props.isOpen && prevProps.isOpen) {
			this.setState({ fadeType: 'out' });
		}
	}
	componentWillUnmount() {
		window.removeEventListener('keydown', this.onEscKeyDown, false);
	}

	onClose = e => {
		e.preventDefault();
		this.setState({ fadeType: 'out' });
	};

    onSubmit = e => {
        this.props.onSubmit(e);
		this.setState({ fadeType: 'out' });
	};

	onEscKeyDown = e => {
		if (e.key !== 'Escape') return;
		this.setState({ fadeType: 'out' });
    };

	transitionEnd = e => {
		if (e.propertyName !== 'opacity' || this.state.fadeType === 'in')
			return;
		if (this.state.fadeType === 'out') {
			this.props.onClose();
		}
    };

	render() {
		const childrenWithProps = React.Children.map(this.props.children, child =>
			React.cloneElement(child, { onSubmit: this.onSubmit })
		);
		return ReactDom.createPortal(
			<StyledModal
				id={this.props.id}
				className={`wrapper size-${this.props.modalSize} fade-${this.state.fadeType} ${this.props.modalClass}`}
				modalSize={this.props.modalSize}
                onTransitionEnd={this.transitionEnd}
                transitionInTime={this.props.transitionInTime}
                transitionOutTime={this.props.transitionOutTime}
				dialogBackgroundColor={this.props.dialogBackgroundColor}
				submitBtnColor={this.props.submitBtnColor}
				submitBtnBackgroundColor={this.props.submitBtnBackgroundColor}
				closeBtnColor={this.props.closeBtnColor}
				closeBtnBackgroundColor={this.props.closeBtnBackgroundColor}
			>
				<div className="box-dialog">
					<div className="box-header">
						<div className="box-title">
							{this.props.title}
						</div>
					</div>
					<div className="box-content">
						{childrenWithProps}
					</div>
					{(this.props.closeText || this.props.submitText) && (
						<div className="box-footer">
							{this.props.closeText && (
								<button
									onClick={this.onClose}
									className="mybtn closebtn"
								>
									{this.props.closeText}
								</button>
							)}
							{this.props.submitText && (
								<button
									onClick={this.onSubmit}
									className="mybtn submitbtn"
								>
									{this.props.submitText || "Submit"}
								</button>
							)}
						</div>
					)}
				</div>
				<div
					className={`background`}
					onMouseDown={this.onClose}
					ref={this.background}
				/>
			</StyledModal>,
			document.getElementById('modal-root')
		);
	}
}
export default Modal;