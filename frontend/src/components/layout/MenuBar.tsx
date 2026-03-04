import Link from 'next/link'
import Image from 'next/image'

export default function MenuBar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-8 py-4">
            <div className="flex flex-row justify-between items-center font-helvetica text-sm text-white">
                <Link href='/about'>MANIFESTO</Link>
                <Link href='/artists'>ARTISTS</Link>
                <Image
                    src='/sosyal-logo-globe.png'
                    width={80}
                    height={80}
                    alt='SOSYAL Globe Logo'
                />
                <Link href='/contact'>CONTACT</Link>
                <Link href='/merch'>MERCH</Link>
            </div>
        </nav>
    )
}