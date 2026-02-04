import React from 'react'
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <nav>
                <Link href='/' className={'logo'}>
                    <Image src='/icons/logo.png' alt='logo' width={24} height={24}/>
                    <p>Dev Event</p>
                </Link>
                <ul>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Events</Link>
                    <Link href={'/'}>Create Event</Link>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar
