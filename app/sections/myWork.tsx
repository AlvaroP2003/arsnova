'use client'

import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
gsap.registerPlugin(SplitText)

export default function MyWork () {

    useGSAP(() => {

        let mainTitle = SplitText.create('.title', {
            type:'lines',
            mask:'lines'
        })

        let subText = SplitText.create('.subtext', {
            type:'lines',
            mask:'lines'
        })

        gsap.to('.line-el', {
            scrollTrigger: {
                trigger:'.line-el',
                start:'end 70%',
            },
            height:80,
            duration:0.5,
            ease:'expo.out',
        })

        gsap.from(mainTitle.lines, {
            scrollTrigger: {
                trigger:'.line-el',
                start:'end 70%',
            },
            x:500,
            autoAlpha:0,
            ease:'expo.out',
            delay:0.25,
        })

         gsap.from(subText.lines, {
            scrollTrigger: {
                trigger:'.line-el',
                start:'end 70%',
            },
            x:-500,
            autoAlpha:0,
            ease:'expo.out',
            delay:0.25,
        })
    },[])

    const storedWork = [
        '/work-1.jpg',
        '/work-2.jpg',
        '/work-3.jpg',
        '/work-4.jpg',
    ]
    
    return (
        <section id="my-work" className="my-work bg-neutral-950 px-5 lg:px-50 py-25">
            <div className="relative flex items-center gap-3 min-h-20">
                <h2 className="title text-neutral-50 text-4xl lg:text-6xl">MY WORK</h2>
                <div className="line-el w-1 bg-[#DD3232]"></div>
                <p className="subtext text-xs w-[500px] text-neutral-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
            </div>

            <div className="flex gap-2.5 flex-wrap py-10">
                {storedWork.map((item,index) => (
                    <div key={index} className="work-item relative w-full lg:w-[49%] h-[400px] lg:h-[500px] overflow-hidden">
                        <Image src={item} fill alt={item} className="object-cover image"/>
                    </div>
                ))}
            </div>
        </section>
    )
}