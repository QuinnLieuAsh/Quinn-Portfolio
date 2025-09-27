'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'





const Navbar = () => {

    const sideMenuRef = useRef<any>(null);
    const menuIconRef = useRef<any>(null);
    


    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
        menuIconRef.current.style.opacity = '0'
    }

    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
        menuIconRef.current.style.opacity = '100'
    }


    return (

        <>
            <div className='fixed z-50'>
                <nav className="glow-text w-full fixed px-5 lg:px-[8%] py-4 flex items-center justify-between z-50 ">
                    <Link href="#top">
                        {/* logo */}
                        <div className='w-20 h-20 border-3 border-white rounded-full overflow-hidden'>
                            <Image src="/assets/logo.png" alt="mountain" width={112} height={112} unoptimized
                                className='cursor-pointer mr-14' />
                        </div>

                    </Link>
                    
                    {/* navbar menu */}
                    <ul className='bg-black/50 hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 justify-center
                shadow-[0px_1px_5px_#FF4500,0_2px_2px_#FF4500,0_1px_20px_#FF6347]'
                        bg-white sm-shadow bg-opacity-50>
                        <li className='transition-transform hover:scale-110'><Link href="/">Home</Link></li>
                        <li className='transition-transform hover:scale-110'><Link href="/projects">Projects</Link></li>
                        <li className='transition-transform hover:scale-110'><Link href="/gallery">Gallery</Link></li>
                        <li className='transition-transform hover:scale-110'><Link href="/about">About</Link></li>
                    </ul>

                    <div>
                        <Link href="#contact" className='hidden md:flex items-center gap-3 px-10 transition-transform hover:scale-110
                py-2.5 border border-yellow-300 rounded-full ml-4 bg-black/50 
                shadow-[0_0_5px_#FF4500,0_0_2px_#FF4500,0_0_20px_#FF6347,inset_0_0_5px_#FF4500,inset_0_0_2px_#FF4500,inset_0_0_20px_#FF6347]'>Contact
                            <Image src="/assets/arrow-icon-dark.png" alt="" width={10} height={0} /></Link>
                    </div>

                    <button ref={menuIconRef} className='block md:hidden ml-3 absolute top-6 right-6' onClick={openMenu}> <Image src="/assets/menu-white.png" alt="" width={30} height={0}></Image></button>


                </nav>

                {/* menu button */}

                {/* Mobile Menu */}
                <div>

                    <ul ref={sideMenuRef} className='glow-text flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64
                    top-0 bottom-0 w-64 z-50 h-screen bg-gray-100/7
                    transition duration-500 items-center'>

                        <div className="absolute right-6 top-6" onClick={closeMenu}>
                            <Image src='/assets/close-white.png' alt="" width={20} height={0}></Image>
                        </div>

                        <li><Link onClick={closeMenu} href="/">Home</Link></li>
                        <li><Link onClick={closeMenu} href="/projects">Projects</Link></li>
                        <li><Link onClick={closeMenu} href="/gallery">Gallery</Link></li>
                        <li><Link onClick={closeMenu} href="/about">About</Link></li>
                    </ul>


                </div>
            </div>

            
        </>
    )
}

export default Navbar