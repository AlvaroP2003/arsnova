'use client'

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
gsap.registerPlugin(SplitText)


export default function Hero() {

    useGSAP(() => {
            const body = SplitText.create('.body', { type: 'lines', mask: 'lines' });
            const subtitle = SplitText.create('.subtitle', { type: 'lines', mask: 'lines' });
            const button = SplitText.create('.hero-btn', { type: 'lines', mask: 'lines' });

            const tl = gsap.timeline();

            tl.from('.hero-title', { y: 200, autoAlpha: 0, duration: 1 })
            .from(subtitle.lines, { y: -50, autoAlpha: 0, stagger: 0.1, duration: 0.8 }, "-=0.5")
            .from(body.lines, { x: 100, autoAlpha: 0, stagger: 0.15, duration: 0.8 }, "-=0.6")
            .from(button.lines, { x: -50, autoAlpha: 0, stagger: 0.05, duration: 0.6 }, "-=0.5")
            .from('.hero-img', { y: 500, autoAlpha:0,ease: 'expo.out', duration: 1, delay: 0.1 }, "-=0.5");
    },[])

    return (
    <section className="relative bg-neutral-950 hero flex flex-col py-50 justify-start items-center h-[88vh] mb-50 lg:py-0 lg:px-50 overflow-hidden">
        <Image 
            src={'/hero-img.png'}
            alt="greek statue" 
            width={600} height={600}
            className="hero-img z-10 absolute -bottom-30 lg:-bottom-70"
        />

        <h1 className="hero-title text-white text-[88px] lg:text-[350px]">ARSNOVA</h1>
        <div className="text-white w-full flex justify-center lg:justify-between -mt-5 lg:-mt-25">
            <h2 className="subtitle text-2xl lg:text-5xl h-fit">WEB DESIGNS</h2>

            <div className="flex-col items-start gap-2.5 w-[400px] text-neutral-400 hidden lg:flex">
                <p className="body font-light">“Design is not just what you see, it’s how it works. We craft experiences that speak and perform.”</p>
                <button className="hero-btn gap-2 font-medium border border-neutral-400 rounded-full px-6 py-1.5 cursor-pointer"> Get in Touch</button>
            </div>
        </div>
    </section>
    )
}