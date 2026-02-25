'use client'
import { Event } from '../../types/event';
import Button from '../ui/Button';
import { useEffect, useState } from 'react';
import Badge from '../ui/Badge';

interface EventCardProps {
    event: Event
}

export default function EventCard({event}: EventCardProps) {
    // make the EventCard handle changes in event.eventStatus
    return (
        <div className="px-6 py-3 flex flex-row justify-between bg-niteharts-grey">
            <h3>{event.eventName}</h3>
            <Badge intent="upcoming" label="TICKETS AVAILABLE"></Badge>
            <p>WITH {event.eventHeadliner}</p>
            <p>{event.eventDate.toLocaleDateString()} @ {event.eventLocation}</p>
            <Button intent="secondary" size="sm">Buy Tickets</Button>
        </div>
    )
}