'use client'
import { Event } from '../../types/event';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface EventCardProps {
    event: Event
}

const statusBadgeMap: Record<string, { intent: 'upcoming' | 'soldout' | 'lowTix', label: string }> = {
    'Upcoming':     { intent: 'upcoming', label: 'TICKETS AVAILABLE' },
    'Sold Out':     { intent: 'soldout',  label: 'SOLD OUT' },
    'Low Tickets':  { intent: 'lowTix',   label: 'LOW TICKETS' },
}

export default function EventCard({event}: EventCardProps) {
    const badge = statusBadgeMap[event.eventStatus] ?? { intent: 'upcoming' as const, label: event.eventStatus.toUpperCase() }
    return (
        <div className="px-6 py-3 flex flex-row justify-between bg-niteharts-grey">
            <h3>{event.eventName}</h3>
            <Badge intent={badge.intent} label={badge.label} />
            <p>WITH {event.eventHeadliner}</p>
            <p>{event.eventDate.toLocaleDateString()} @ {event.eventLocation}</p>
            <Button intent="secondary" size="sm">Buy Tickets</Button>
        </div>
    )
}