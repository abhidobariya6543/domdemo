'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import './BulletsHeader.scss'

const BulletsHeader = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

            timeline
                .set(["#box3", "#box1"], { y: "700px", top: '-10px', scale: 1, opacity: 1 })
                .to(["#box3", "#box1"], { scale: 1, opacity: 0, duration: 0.5, y: "0px", })
                .set("#box4", { y: "700px", top: '-10px', scale: 1, opacity: 1 })
                .to("#box4", { scale: 1, opacity: 0, duration: 0.5, y: "0px", })
                .set("#box1", { y: "700px", top: '-10px', scale: 1, opacity: 1 })
                .to("#box1", { scale: 1, opacity: 0, duration: 0.5, y: "0px", })
                .set("#box2", { y: "700px", top: '-10px', scale: 1, opacity: 1 })
                .to("#box2", { scale: 1, opacity: 0, duration: 0.5, y: "0px", })
                .set("#box3", { y: "700px", top: '-10px', scale: 1, opacity: 1 })
                .to("#box3", { scale: 1, opacity: 0, duration: 0.5, y: "0px", })
                .set("#box5", { y: "700px", top: '-10px', scale: 1, opacity: 1 })
                .to("#box5", { scale: 1, opacity: 0, duration: 0.5, y: "0px", })

        }
    }, []);


    return (
        <div
            ref={containerRef}
            className='bullet-header-container'>
            <div className="d-flex justify-content-center align-items-center">
                <div id='box1' className="bulltes-box d-flex justify-content-center align-items-center text-white fw-bold box-style" style={{ left: "15%" }}></div>
                <div id='box2' className="bulltes-box d-flex justify-content-center align-items-center text-white fw-bold box-style ms-4" style={{ left: "30%" }}></div>
                <div id='box3' className="bulltes-box d-flex justify-content-center align-items-center text-white fw-bold box-style ms-4"></div>
                <div id='box4' className="bulltes-box d-flex justify-content-center align-items-center text-white fw-bold box-style ms-4" style={{ left: "63%" }}></div>
                <div id='box5' className="bulltes-box d-flex justify-content-center align-items-center text-white fw-bold box-style ms-4" style={{ left: "80%" }}></div>
            </div>
        </div>
    );
}

export default BulletsHeader;
