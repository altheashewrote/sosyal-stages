'use client'
import { Event } from "../../types/event";
import EventCard from "./EventCard";
import Button from "../ui/Button";
import { useEffect, useState } from 'react';

const mockUpcoming: Event[] = [
    {
        eventId: 2,
        eventName: "AFTER SNOW",
        eventHeadliner: "VLCN",
        eventDate: new Date('2026-03-14'),
        eventLocation: "Sentro Filipino, SF",
        eventStatus: "Sold Out",
    }
]

export default function EventHero() {
    return (
        <div className="flex flex-col bg-transparent px-6 py-6">
            <h3 className="text-ara-white font-horizon">UPCOMING EVENTS</h3>
            <div>
                {mockUpcoming.map(event => (
                    <EventCard key={event.eventId} event={event} />
                ))}
            </div>
        </div>
    )
}