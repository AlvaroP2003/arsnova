'use client'

import { Menu } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

interface HeaderProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({setMenuOpen}:HeaderProps) {


  useGSAP(() => {

    gsap.from('.list', {
      x:600,
      duration:2,
      ease:'expo.out'
    })

     gsap.from('.logo', {
      x:-600,
      duration:2,
      ease:'expo.out'
    })
    
  },[])

    return (
        <header className="bg-neutral-950 flex justify-between items-center h-[12vh] px-5 lg:px-50 overflow-x-hidden">
              <h2 className="logo text-neutral-50 text-xl cursor-pointer">ARSNOVA</h2>
        
              <ul className="list text-neutral-50 navlist gap-15 font-medium hidden lg:flex">
                <a href='#what-i-do' className="py-1 cursor-pointer">WHAT I DO</a>
                <a href='#my-work' className="py-1 cursor-pointer">MY WORK</a>
                <a href="#contact" className="py-1 cursor-pointer">CONTACT ME</a>
              </ul>

              <div onClick={() => {setMenuOpen(true)}} className="list flex lg:hidden text-neutral-50">
                <Menu/>
              </div>
            </header>
    )
}