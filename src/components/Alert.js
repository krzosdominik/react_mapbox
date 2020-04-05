import React from 'react';
import { Alert as ReactstrapAlert } from 'reactstrap';

const Alert = ({ color = 'primary', message, onClose, visible }) => {
    return (
        <ReactstrapAlert color={color} isOpen={visible}>
            <div className="container">
                <div className="alert-icon">
                    <i className="now-ui-icons travel_info"></i>
                </div>
                {message}
                <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={onClose}
                >
                    <span aria-hidden="true">
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                    </span>
                </button>
            </div>
        </ReactstrapAlert>
    )
}

export default Alert;