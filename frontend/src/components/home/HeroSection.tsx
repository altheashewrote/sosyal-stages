import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";

const artistLogos = [
    { name: "Ara", src: "/images/artists/ara_logo.png" },
    { name: "Chrispynoy", src: "/images/artists/chrispynoy_logo.png" },
    { name: "Dani Thorne", src: "/images/artists/dani_thorne_logo.png" },
    { name: "Harabaz", src: "/images/artists/harabaz_logo.png" },
    { name: "Lazrus", src: "/images/artists/lazrus_logo.png" },
    { name: "Sardonix", src: "/images/artists/sardonix_logo.png" },
    { name: "Shareatonin", src: "/images/artists/shareatonin_logo.png" },
    { name: "SJ", src: "/images/artists/sj_logo.png" },
    { name: "Slicer", src: "/images/artists/slicer_logo.png" },
    { name: "VLCN", src: "/images/artists/vlcn_logo.png" },
];

export default function HeroSection() {
    return (
        <section className="relative w-screen h-screen overflow-hidden">

            {/* background image */}
            <Image
                src='/images/events/lny_crowd_2026.JPG'
                alt='New Moon, 21st Feb 2026 with DIY Raves & Ground Zero'
                fill
                className="object-cover object-center"
                priority
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* content — absolutely positioned over the image */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center text-white px-6">

                {/* headline */}
                <h1 className="font-horizon text-6xl md:text-8xl font-black uppercase leading-none tracking-tight">
                    SETTING<br />THE<br />STAGE.
                </h1>

                {/* CTA button */}
                <Link href="/about">
                    <Button intent="primary" size="lg">LEARN MORE</Button>
                </Link>
            </div>

            {/* artist marquee — pinned to bottom of hero */}
            <div className="absolute bottom-0 left-0 w-full z-10 pb-8 flex flex-col items-center gap-4">
                <p className="font-helvetica text-white text-xs tracking-widest uppercase">
                    SKYROCKETING ARTISTS LIKE
                </p>
                <div className="overflow-hidden w-full">
                    <div
                        className="flex w-max"
                        style={{ animation: "marquee 20s linear infinite" }}
                    >
                        {[...artistLogos, ...artistLogos].map((artist, i) => (
                            <div key={i} className="mx-6 flex items-center shrink-0">
                                <Image
                                    src={artist.src}
                                    alt={artist.name}
                                    width={80}
                                    height={80}
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}