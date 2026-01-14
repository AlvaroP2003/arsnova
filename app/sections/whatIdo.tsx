'use client'

import { useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export default function WhatIdo () {

  useGSAP(() => {

    let mainTitle = SplitText.create('.main-title', {
            type: 'lines',
            mask:'lines',
        })

    gsap.to('.line', {
      scrollTrigger: {
        trigger:'.line',
        start:'top center'
      },
      width:110,
    })

     gsap.from(mainTitle.lines, {
      scrollTrigger: {
        trigger:'.line',
        start:'top center'
      },
      y:250,
      ease:'expo.out',
      delay:0.25,
    })

      gsap.from('.skill-list', {
        scrollTrigger: {
          trigger:'.skill-list',
          start: 'center bottom',
        },
        autoAlpha:0,
        x:-500,
        duration:2,
        ease:'expo.out',
      })
  },[])

  const [activeImg, setActiveImg] = useState(0)

    const listOfSkills = [
        {
        title:'UI 8 UX DESIGN',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..'
        },
          {
        title:'SEO OPTIMIZATION',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..'
        },
          {
        title:'UNIQUE DESIGNS',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..'
        },
    ]

  return (
    <section id="what-i-do" className="what-i-do lg:h-screen flex flex-col justify-center items-center gap-25 mb-50 px-5 lg:px-50">

    <div className='relative'>
      <h2 className='main-title text-4xl lg:text-6xl relative'>WHAT I DO</h2>
      <div className='line absolute right-0 -bottom-2 bg-red-600 h-1'></div>
    </div>

    <div className='flex flex-col lg:flex-row justify-between items-center relative w-full'>
    <div className='skill-list flex flex-col'>
        {listOfSkills.map((item,index) => (
            <div 
              key={index} 
              className={`skill cursor-pointer lg:w-[500px] py-7.5 info ${index !== 2 ? 'border-b border-neutral-300' : ''}`}
              onMouseEnter={() => setActiveImg(index)}
              >
                <span className='text-7xl text-neutral-200'>0{index + 1}</span>
                <h3 className='text-4xl'>{item.title}</h3>
                <p className='text-neutral-500 text-sm'>{item.description}</p>
            </div>
        ))}
    </div>

      <div className='content hidden lg:block relative h-[550px] w-[550px]'>
        <div className="relative h-full w-full overflow-hidden">
            <div 
              className='flex flex-col h-[1650px]'
              style={{ transition:'0.5s' , transform: `translateY(-${activeImg * 550}px)` }}
            >
              {[1, 2, 4].map((n) => (
                <div key={n} className="relative h-[550px] w-[550px]">
                  <Image
                    src={`/work-${n}.jpg`}
                    alt="work image"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
      </div>
      
    </div>
      

    </section>
  )
}
