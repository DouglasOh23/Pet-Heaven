import React from 'react';
import './Model.css'; // Include CSS for modal styling

const Model = ({ show, handleClose, children }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={handleClose}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Model;
