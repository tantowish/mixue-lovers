'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export const Navbar = () => {
    const [isRouting, setisRouting] = useState(false)
    const path = usePathname()
    const [prevPath, setPrevPath] = useState("/")
    const [isActive, setIsActive] = useState(false)
  
    const handleHamburgerClick = ()=>{
      setIsActive(!isActive)
    }
  
    useEffect(()=>{
        if(prevPath !== path){
          setIsActive(false);
          setisRouting(true)
        }
    }, [path, prevPath])
  
    useEffect(()=>{
        if(isRouting){
            setPrevPath(path)
            const timeout = setTimeout(()=>{
                setisRouting(false)
            }, 1200)
  
            return()=>clearTimeout(timeout)
        }
    }, [isRouting])
  
    const NavLinks = [
        {
          link: "/",
          name:"Home"
        },
        {
          link: "/portfolio",
          name:"Portfolio",
        },
        {
          link: "/sertificate",
          name:"Sertificate"
        },
        {
          link: "/resume",
          name:"Resume"
        },
        {
          link: "/experience",
          name:"Experience"
        },
    ]
  return (
    <nav className='navbar-fixed top-0 w-full z-[10] relative font-bold text-white'>
        <div className='flex flex-wrap justify-between max-w-7xl mx-auto px-8 lg:px-24 md:px-16 py-6 items-center'>
          <div className='hidden md:flex flex-wrap gap-12 '>
            {isRouting}
            {NavLinks.map((nav)=>(
              <Link
                key={nav.name}
               className={`hover:underline ${path === nav.link || (path.startsWith(nav.link) && nav.link !== '/') ? "underline" : ""}`}
               href={nav.link}>{nav.name}</Link>
            ))}
          </div>
          <div className='flex items-center px-4 md:hidden'>
            <button id='hamburger' name='hamburger' type='button' className={`block absolute right-4 ${isActive ?'hamburger-active' :''}`} onClick={handleHamburgerClick}>
              <span className='w-[30px] h-[2px] my-2 block bg-white transition duration-500 ease-out origin-top-left'></span>
              <span className='w-[30px] h-[2px] my-2 block bg-white transition duration-500 ease-out'></span>
              <span className='w-[30px] h-[2px] my-2 block bg-white transition duration-500 ease-out origin-bottom-left'></span>
            </button>
            <div className={`nav-menu absolute z-[10] py-5 rounded-b-3xl w-full right-0 top-full ${!isActive ? 'hidden' : ''}`}>
              <div className='flex flex-col gap-3 px-8'>
              {isRouting}
              {NavLinks.map((nav)=>(
                <Link
                key={nav.name}
                className={`hover:underline ${path === nav.link || (path.startsWith(nav.link) && nav.link !== '/') ? "underline" : ""}`}
                href={nav.link}>{nav.name}</Link>
              ))}
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}
