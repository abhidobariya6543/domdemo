// components/MaintainText.tsx
import React, { useEffect, useRef } from 'react';
import './TextHeader.scss';
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";

const TextHeader = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (containerRef.current) {
            const startAnimation = () => {
                setTimeout(() => {
                    gsap.to(".m", { y: '0%', transform: 'rotate(0deg)', duration: 0.3, ease: "linear" })
                    gsap.to(".a", { x: '0%', duration: 0.3, ease: "linear" })
                    gsap.to(".i", { x: '0%', duration: 0.3, ease: "linear" })
                    gsap.to(".n", { x: '0%', y: '0%', duration: 0.3, ease: "linear" });
                    gsap.to(".t", { transform: 'rotate(0deg)', x: '0%', y: '10%', duration: 0.3, ease: "linear" });
                    gsap.to(".a2", { x: '0%', duration: 0.3, ease: "linear" })
                    gsap.to(".i2", { x: '0%', y: '0%', transform: 'rotate(0deg)', duration: 0.3, ease: "linear" });
                    gsap.to(".n2", { x: '0%', duration: 0.3, ease: "linear", onComplete: reverceAnimation });
                }, 1000);
            }

            const reverceAnimation = () => {
                setTimeout(() => {
                    gsap.to(".m", { y: '-4%', transform: 'rotate(-90deg)', duration: 0.3, ease: "linear" })
                    gsap.to(".a", { x: '-15%', duration: 0.3, ease: "linear" })
                    gsap.to(".i", { x: '-50%', duration: 0.3, ease: "linear" })
                    gsap.to(".n", { x: '-130%', y: '-100%', duration: 0.3, ease: "linear" });
                    gsap.to(".t", { x: '-140%', y: '15%', transform: 'rotate(90deg)', duration: 0.3, ease: "linear" });
                    gsap.to(".a2", { x: '-80%', duration: 0.3, ease: "linear" })
                    gsap.to(".i2", { x: '400%', y: '5%', transform: 'rotate(45deg)', duration: 0.3, ease: "linear" });
                    gsap.to(".n2", { x: '180%', duration: 0.3, ease: "linear", onComplete: startAnimation });
                }, 1000);
            }
            reverceAnimation()
        }
    }, []);

    return (
        <div className='text-header-container' ref={containerRef}>
            <div className='letter m'>M</div>
            <div className='letter a'>A</div>
            <div className='letter i'>I</div>
            <div className='letter n'>N</div>
            <div className='letter t'>T</div>
            <div className='letter a2'>A</div>
            <div className='letter i2'>I</div>
            <div className='letter n2'>N</div>
        </div>
    );
};

export default TextHeader;