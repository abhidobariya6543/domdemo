import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import './CodeHeader.scss'

const CodeHeader = () => {
    const leftCodeRef = useRef<HTMLDivElement | null>(null);
    const rightCodeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.to(".code-container", {
            y: "50%",
            duration: 10,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    return (
        <div className="wrapper code-header-container">
            <div className="codeWrapper" style={{ textAlign: 'start' }}>
                <div className="code-container" style={{ bottom: '0' }} ref={leftCodeRef}>
                    <pre className="fakeCode">{FAKE_CODE}</pre>
                    <pre className="fakeCode">{FAKE_CODE}</pre>
                    <pre className="fakeCode">{FAKE_CODE}</pre>
                </div>
            </div>
            <div className="codeWrapper" style={{ textAlign: 'end' }}>
                <div className="code-container" style={{ bottom: '10%' }} ref={rightCodeRef}>
                    <pre className="fakeCode">{FAKE_CODE}</pre>
                    <pre className="fakeCode">{FAKE_CODE}</pre>
                    <pre className="fakeCode">{FAKE_CODE}</pre>
                </div>
            </div>
        </div >
    );
};

const FAKE_CODE = `
<meta charset="utf-8">
<title>Fake Code</title>
<style>
  body { background: black; color: yellow; }
  pre { font-family: monospace; }
</style>
<body>
  <h1>Fake Scrolling Code</h1>
  <p>for (let i = 0; i < 10; i++) { console.log(i); }</p> <p>for (let i = 0; i < 10; i++) { console.log(i); }</p> <p>for (let i = 0; i < 10; i++) 
</body>
`.repeat(10);

export default CodeHeader;
