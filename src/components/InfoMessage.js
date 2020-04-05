import React from 'react';
import { Alert } from 'reactstrap';

const InfoMessage = ({ onClose, visible }) => {
    const onAlertClose = () => onClose();

    return (
        <Alert color="warning" isOpen={visible}>
            <div className="container">
                <div className="alert-icon">
                    <i className="now-ui-icons travel_info"></i>
                </div>
                Click on the map to add marker!
                <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={onAlertClose}
                >
                    <span aria-hidden="true">
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                    </span>
                </button>
            </div>
        </Alert>
    )
}

export default InfoMessage;