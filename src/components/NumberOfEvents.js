import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setCurrentNOE(value);

        let infoText;
        if (isNaN(value)) {
            infoText = 'Please enter a number!';
            setErrorAlert(infoText);
        } else if (value > 32) {
            infoText = 'Maximum is 32.';
            setErrorAlert(infoText);
        } else if (value <= 0) {
            infoText = 'Please enter a higher value.';
            setErrorAlert(infoText)
        } else {
            setErrorAlert(infoText);
            setCurrentNOE(value);
        }
    }


    return (
        <div id="number-of-events">
            <input
                type="text"
                className="number-of-events-input"
                placeholder="Enter a number"
                defaultValue="32"
                onChange={handleInputChanged}
                data-testid="numberOfEventsInput"
            />
        </div>
    )
};

export default NumberOfEvents;
