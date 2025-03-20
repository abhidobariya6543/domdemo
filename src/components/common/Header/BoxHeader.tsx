'use client';

import { useGSAP } from '@gsap/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import './BoxHeader.scss'

const BoxHeader = () => {
    const topRef = useRef<HTMLDivElement | null>(null);
    const bottomRef = useRef<HTMLDivElement | null>(null);
    const leftRef = useRef<HTMLDivElement | null>(null);
    const rightRef = useRef<HTMLDivElement | null>(null);
    const blinkRef = useRef<HTMLDivElement | null>(null);
    const eyeRef = useRef<HTMLDivElement | null>(null);

    const [boxWidthSize, setBoxWidthSize] = useState(82.8);
    const [boxHeightSize, setBoxHeightSize] = useState(78);
    const [lineOneHight, setlineOneHight] = useState(130.5);

    useEffect(() => {
        const updateBoxSize = () => {
            const screenWidth = window.innerWidth;
            const newWidthSize = (screenWidth / 1920) * 82.5;
            setBoxWidthSize(newWidthSize);
            const newHeightSize = (screenWidth / 1920) * 80;
            setBoxHeightSize(newHeightSize);
            const newLineHeightSize = (1920 * 130.5) / screenWidth;
            setlineOneHight(newLineHeightSize);
        };

        updateBoxSize();
        window.addEventListener("resize", updateBoxSize);

        return () => window.removeEventListener("resize", updateBoxSize);
    }, []);


    useGSAP(() => {
        if (topRef.current) {
            const topBoxsClass = gsap.utils.toArray<HTMLDivElement>(".top-box");
            topBoxsClass.forEach((box) => {
                const topAnimation = () => {
                    gsap.set(box, { y: "-500%", opacity: 0.5 });
                    gsap.to(box, { y: "0px", duration: 2, ease: "power2.inOut", onComplete: topAnimation, opacity: 1 });
                };
                topAnimation();
            });
        }
        if (bottomRef.current) {
            const bottomBoxsClass = gsap.utils.toArray<HTMLDivElement>(".bottom-box");
            bottomBoxsClass.forEach((box) => {
                const bottomAnimation = () => {
                    gsap.set(box, { y: "150px", opacity: 0.5 });
                    gsap.to(box, { y: "0px", duration: 2, ease: "power2.inOut", onComplete: bottomAnimation, opacity: 1 });
                };
                bottomAnimation();
            });

        }
        if (leftRef.current) {
            const leftBoxsClass = gsap.utils.toArray<HTMLDivElement>(".left-box");
            leftBoxsClass.forEach((box) => {
                const leftAnimation = () => {
                    gsap.set(box, { x: "-150px", opacity: 0.5 });
                    gsap.to(box, { x: "0px", duration: 2, ease: "power2.inOut", onComplete: leftAnimation, opacity: 1 });
                };
                leftAnimation();
            });

        }
        if (rightRef.current) {
            const rightBoxsClass = gsap.utils.toArray<HTMLDivElement>(".right-box");
            rightBoxsClass.forEach((box) => {
                const rightAnimation = () => {
                    gsap.set(box, { x: "150px", opacity: 0.5 });
                    gsap.to(box, { x: "0px", duration: 2, ease: "power2.inOut", onComplete: rightAnimation, opacity: 1, });
                };
                rightAnimation();
            });

        }
        if (blinkRef.current) {
            const blinkingBoxes = gsap.utils.toArray<HTMLDivElement>(".blinking-box");
            blinkingBoxes.forEach((box) => {
                gsap.timeline({ repeat: -1 })
                    .to(box, { scale: 0.5, opacity: 0, duration: 0.5, ease: "power1.inOut" })
                    .to(box, { scale: 1, opacity: 1, duration: 1.5, ease: "power1.inOut" })
            });
        }
        if (eyeRef.current) {
            const eyeBoxes = gsap.utils.toArray<HTMLDivElement>(".eye-box");
            eyeBoxes.forEach((box) => {
                gsap.timeline({ repeat: -1 })
                    .to(box, { opacity: 0, duration: 0.5, })
                    .to(box, { opacity: 1, duration: 1.5, })
            });
        }
    })


    return (
        <div className="d-flex box-header-container">
            <div className="d-flex flex-wrap justify-content-center" style={{ alignItems: 'flex-end' }}>
                {[...Array(9)].map((_, rowIndex) => (
                    [...Array(23)].map((_, colIndex) => (
                        ((rowIndex === 8 && [0, 2, 4, 6, 8, 14, 16, 18, 22].includes(colIndex)) ||
                            (rowIndex === 7 && [3, 9, 13, 15, 17].includes(colIndex)) ||
                            (rowIndex === 6 && [2, 4, 8, 10, 12, 14, 16, 18, 20, 22].includes(colIndex)) ||
                            (rowIndex === 4 && [0, 20, 22].includes(colIndex)) ||
                            (rowIndex === 2 && colIndex === 22) ||
                            (rowIndex === 1 && colIndex === 21)) ? (
                            rowIndex === 1 && colIndex === 21 ?
                                <div
                                    ref={topRef}
                                    key={`${rowIndex}-${colIndex}`}
                                    className=" top-box"
                                    style={{ width: `${boxWidthSize}px`, height: `${boxHeightSize}px`, backgroundColor: '#c1ed2f' }}
                                ></div>
                                :
                                rowIndex === 2 && colIndex === 22 ?
                                    <div
                                        ref={rightRef}
                                        key={`${rowIndex}-${colIndex}`}
                                        className=" right-box"
                                        style={{ width: `${boxWidthSize}px`, height: `${boxHeightSize}px`, backgroundColor: '#c1ed2f' }}
                                    ></div>
                                    :
                                    rowIndex === 4 && colIndex === 0 ?
                                        <div
                                            ref={leftRef}
                                            key={`${rowIndex}-${colIndex}`}
                                            className=" left-box"
                                            style={{ width: `${boxWidthSize}px`, height: `${boxHeightSize}px`, backgroundColor: '#c1ed2f' }}>
                                        </div>
                                        :
                                        rowIndex === 7 && (colIndex === 9 || colIndex === 15 || colIndex === 17) ||
                                            rowIndex === 8 && colIndex === 6 ?
                                            <div
                                                ref={bottomRef}
                                                key={`${rowIndex}-${colIndex}`}
                                                className=" bottom-box"
                                                style={{ width: `${boxWidthSize}px`, height: `${boxHeightSize}px`, backgroundColor: '#c1ed2f' }}>
                                            </div>
                                            :
                                            rowIndex === 6 && (colIndex === 10 || colIndex === 12 || colIndex === 16) ||
                                                rowIndex === 7 && colIndex === 3 ?
                                                <div
                                                    ref={blinkRef}
                                                    key={`${rowIndex}-${colIndex}`}
                                                    className=" blinking-box"
                                                    style={{ width: `${boxWidthSize}px`, height: `${boxHeightSize}px`, backgroundColor: '#c1ed2f' }}>

                                                </div>
                                                :
                                                rowIndex === 4 && colIndex === 22 ||
                                                    rowIndex === 6 && colIndex === 4 ||
                                                    rowIndex === 8 && colIndex === 0 ?
                                                    <div
                                                        ref={eyeRef}
                                                        key={`${rowIndex}-${colIndex}`}
                                                        className=" eye-box"
                                                        style={{ width: `${boxWidthSize}px`, height: `${boxHeightSize}px`, backgroundColor: '#c1ed2f' }}>

                                                    </div>
                                                    :
                                                    <div
                                                        key={`${rowIndex}-${colIndex}`}
                                                        style={{ width: `${boxWidthSize}px`, height: `${boxHeightSize}px`, backgroundColor: '#c1ed2f', }}>

                                                    </div>
                        ) : (rowIndex === 0 ?
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className=" invisible"
                                style={{
                                    width: `${boxWidthSize}px`,
                                    height: `${lineOneHight}px`,
                                }}>
                            </div>
                            : rowIndex === 3 ?
                                <div
                                    key={`${rowIndex}-${colIndex}`}
                                    className=" invisible"
                                    style={{
                                        width: `${boxWidthSize}px`,
                                        height: `${boxHeightSize}px`,
                                    }}>
                                </div>
                                :
                                <div
                                    key={`${rowIndex}-${colIndex}`}
                                    className=" invisible"
                                    style={{
                                        width: `${boxWidthSize}px`,
                                        height: `${boxHeightSize - 30}px`,
                                    }}>
                                </div>
                        )
                    ))
                ))}
            </div>
        </div>
    );
}

export default BoxHeader;
