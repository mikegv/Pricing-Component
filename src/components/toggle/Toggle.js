import React from 'react';
import './Toggle.css'

const Toggle = (props) => {
    return (
        <div className='toggleArea'>

            <p>Annually</p>
            <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
                checked={props.isChecked}
                onChange={props.toggleSwitched}
            />
            <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
            <p>Monthly</p>

        </div>
    );
};

export default Toggle;