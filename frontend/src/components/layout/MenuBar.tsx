import Link from 'next/link';
import Image from 'next/image';

export default function MenuBar() {
    return (
        <nav>
            <div className="bg-transparent flex flex-row justify-between font-helvetica text-sm text-center">
                <Link href='/about'>MANIFESTO</Link>
                <Link href='/artists'>ARTISTS</Link>
                <Image
                src='/sosyal-logo-globe.png'
                width={500}
                height={500}
                alt='SOSYAL Globe Logo'
                />
                <Link href='/contact'>CONTACT</Link>
                <Link href='/merch'>MERCH</Link>
            </div>
        </nav>
    )
}