'use client'
import { Artist } from "../../types/artist"
import Button from "../ui/Button";

interface ArtistCardProps {
    artist: Artist
}

export default function ArtistCard({artist}: ArtistCardProps) {
    // TODO: PLACE ARTIST IMAGES
    return (
        <div className="px-6 py-3 flex flex-col justify-between bg-transparent">
            {/* TODO: PLACE ARTIST IMAGES */}
            <h3>{artist.artistName}</h3>
            <p>{artist.artistGenre}</p>
            <Button intent="secondary" size="sm">SEE MORE</Button>
        </div>
    )
}