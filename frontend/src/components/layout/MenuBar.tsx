import Link from 'next/link'
import Image from 'next/image'

export default function MenuBar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-8 py-4">
            <div className="grid grid-cols-3 items-center font-helvetica text-sm text-white">
                <div className="flex gap-6">
                    <Link href='/about'>MANIFESTO</Link>
                    <Link href='/artists'>ARTISTS</Link>
                </div>
                <div className="flex justify-center">
                    <Image
                        src='/sosyal-logo-globe.png'
                        width={80}
                        height={80}
                        alt='SOSYAL Globe Logo'
                    />
                </div>
                <div className="flex gap-6 justify-end">
                    <Link href='/contact'>CONTACT</Link>
                    <Link href='/merch'>MERCH</Link>
                </div>
            </div>
        </nav>
    )
}