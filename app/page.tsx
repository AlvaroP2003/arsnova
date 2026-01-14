'use client'

import Header from "./sections/header";
import HamburgerMenu from "./sections/hamburgerMenu";
import Hero from "./sections/hero";
import WhatIdo from "./sections/whatIdo";
import MyWork from "./sections/myWork";
import Contact from "./sections/contact";
import { useState } from "react";
export default function Home() {

  const [menuOpen,setMenuOpen] = useState<boolean>(false)

  return (
    <div className="relative">
      {menuOpen && <HamburgerMenu setMenuOpen={setMenuOpen}/>}
      <Header setMenuOpen={setMenuOpen}/>
      <Hero/>
      <WhatIdo/>
      <MyWork/>
      <Contact/>
    </div>
  )
}
