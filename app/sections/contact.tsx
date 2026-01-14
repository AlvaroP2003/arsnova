'use client'

import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {


    useGSAP(() => {
        gsap.from('.hand-left', {
            scrollTrigger: {
                trigger: '.hand-left',
                start:'center bottom',
            },
            x:-750,
            ease:'expo.out',
            duration:3,
        })

        gsap.from('.hand-right', {
            scrollTrigger: {
                trigger: '.hand-left',
                start:'center bottom',
            },
            x:750,
            ease:'expo.out',
            duration:3,
        })

    },[])


    return (
        <section id="contact" className="contact overflow-hidden relative flex flex-col py-30 items-center h-[80vh] lg:h-screen">
            <h1 className="text-[55px] lg:text-[250px] lg:-mb-10">CONTACT ME</h1>
            <p className="text-xs lg:text-base text-neutral-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
            <button className="mt-10 bg-neutral-950 border border-neutral-950 text-neutral-50 rounded-full px-6 py-1 cursor-pointer">placidoalvaro03@gmail.com</button>

                <Image 
                    src={'/hand-left.png'}
                    width={800}
                    height={2000}
                    alt='left hand'
                    className="hand-left absolute bottom-15 lg:bottom-10 -left-60 lg:left-0"
                />

                  <Image 
                    src={'/hand-right.png'}
                    width={800}
                    height={2000}
                    alt='right hand'
                    className="hand-right absolute bottom-25 lg:bottom-20 -right-60 lg:right-0"
                />
        </section>
    )
}