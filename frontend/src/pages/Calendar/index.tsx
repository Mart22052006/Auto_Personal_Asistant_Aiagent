import React, { useEffect, useState } from "react"
import axios from "axios"

const Calendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("/calendar-events").then((response) => {
            if (response.data.success) {
                setEvents(response.data.events);
            }
        });
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Google Calendar Events</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <strong>{event.summary}</strong>
                        <p>{event.start.dateTime || event.start.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Calendar;
