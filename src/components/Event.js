import { useState } from "react";


const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <li className="event">
            <h2>{event && event.summary}</h2>
            <p>{event && event.start.dateTime}</p>
            <p>{event && event.location}</p>
            <button className="details-btn" onClick={() => {
                setShowDetails(!showDetails);
            }} >
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>

            {showDetails ? (
                <div className="details">
                    <h5>Event Details:</h5>
                    <p>Description: {event.description}</p>
                    <p>Event Status: {event.status}</p>
                </div>
            ) : null}
        </li>
    );
};

export default Event;