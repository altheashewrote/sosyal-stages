'use client'
import { Event } from "../../types/event"
import EventCard from "./EventCard"
import { useEffect, useState } from 'react';

const mockEvents: Event[] = [
    {
        eventId: 1,
        eventName: "SOSYAL @ PUBLIC WORKS",
        eventHeadliner: "CHRISPYNOY",
        eventDate: new Date('2026-06-06'),
        eventLocation: "Public Works, San Francisco",
        eventStatus: "Upcoming",
    }
]

export default function EventGrid() {
    return (
        <div className="grid-cols-2">
            {mockEvents.map(event => (
                <EventCard key={event.eventId} event={event} />)
            )}
        </div>
    )
}