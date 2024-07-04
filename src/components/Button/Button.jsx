import React from 'react';
import './Button.scss';

function Button({ label, loading, disabled, onClick }) {
    return (
        <button
            type="button"
            className={loading ? 'loading' : ''}
            onClick={onClick}
            disabled={disabled}
        >
            {loading ? <div className="spinner"></div> : label}
        </button>
    );
}

export default Button;
