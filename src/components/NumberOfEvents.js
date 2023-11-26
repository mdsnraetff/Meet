import React from "react";

const NumberOfEvents = ({ }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;

        //   if (isNaN(value)) {
        //     setErrorAlert('Please enter a number.');
        // } else if (value > 32) {
        //    setErrorAlert('Maximum is 32.');
        // } else if (value <= 0) {
        //     setErrorAlert('Please enter a higher value.');
        //  } else {
        //     setErrorAlert('');
        //     setCurrentNOE(value);
        //  }
    }


    return (
        <div id="number-of-events">
            <input
                type="text"
                className="textbox"
                placeholder="Enter number"
                defaultValue="32"
                onChange={handleInputChanged}
                data-testid="numberOfEventsInput"
            />
        </div>
    )
};

export default NumberOfEvents;
