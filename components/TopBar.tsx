import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import bars from '../assets/bars.svg'

const TopBar = () => {
    return (
        <>
            <nav className='text-white flex justify-between items-center p-8'>
                <div className="logo">
                    <Link
                        href={'/'}>
                        <Image
                            src={logo}
                            height={30}
                            width={117}
                            alt='logo'>
                        </Image>
                    </Link>
                </div>
                <div className="nav-links hidden text-lg md:block">
                    <ul className='flex justify-between items-center gap-12'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/'}>About</Link></li>
                        <li><Link href={'/'}>Shop</Link></li>
                        <li><Link href={'/'}>For Therapies</Link></li>
                    </ul>
                </div>
                <div className="action-buttons hidden md:block text-lg">
                    <ul className='flex items-center justify-between gap-8'>
                        <li><Link href={'/'}>Login</Link></li>
                        <li><Link href={'/'}>
                            <Image
                                src={cart}
                                height={40}
                                width={40}
                                alt='cart'>
                            </Image>
                        </Link></li>
                    </ul>
                </div>
                <div className="nav-toggle-btn md:hidden">
                    <Image
                        src={bars}
                        height={48}
                        width={48}
                        alt='toggle navbar'>
                    </Image>
                </div>
            </nav>
        </>
    )
}

export default TopBar