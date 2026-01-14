'use client'

import { X } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
gsap.registerPlugin(SplitText)

interface HamburgerMenuProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export default function HamburgerMenu({setMenuOpen}: HamburgerMenuProps) {

    useGSAP(() => {
        gsap.from('.link', {
            y:-25,
            autoAlpha:0,
            stagger:0.25,
            duration:1,
            ease:'expo.out'
        })
    },[])

    const links = [
        {
            route:'#what-i-do',
            title:'WHAT I DO',
        },
          {
            route:'#my-work',
            title:'MY WORK',
        },
          {
            route:'#contact',
            title:'CONTACT ME',
        },
    ]
    return (
        <div className="text-neutral-50 fixed flex flex-col bg-neutral-950 left-0 top-0 h-screen w-screen z-30">
            <div onClick={() => setMenuOpen(false)} className="h-[12vh] flex justify-end items-center px-5"><X/></div>

            <ul className="flex flex-col py-50 h-full items-center stext-neutral-50 navlist gap-15 font-medium lg:flex">
                {links.map((link,index) => (
                    <a 
                        key={index}
                        href={link.route}
                        className="link py-1 cursor-pointer text-2xl"
                        onClick={() => {setMenuOpen(false)}}
                        >
                        {link.title}
                    </a>
                ))}
            </ul>
        </div>
    )
}