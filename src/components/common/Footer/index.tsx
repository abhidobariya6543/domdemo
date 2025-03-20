import { FooterProps } from "./types";
import "./Footer.scss"
import { OTHER_IMAGES, TEXT_TO_DISPLAY } from "@/utils/common/Constants";
import Image from "../Image";
import Button from "../ButtonPrimary";
import Link from "next/link";

const Footer = ({
    showGetInTouch = false
}: FooterProps) => {
    
    return (
        <footer className="page-footer">
            {showGetInTouch ? <section className="footer-secton-1">
                <div className="get-in-touch">
                    <h2 className="heading-h2">
                        {TEXT_TO_DISPLAY.getIntouch}
                    </h2>
                </div>
                <div className="bubble-section">
                    <div className="address-container">
                        <p className="subtitle-md">{TEXT_TO_DISPLAY.address}</p>
                    </div>
                    <div className="email-linkedin-container">
                        <div className="email-container">
                            <p className="subtitle-lg email-text">{TEXT_TO_DISPLAY.email}</p>
                        </div>
                        <div className="linkedin-container">
                            <Image
                                data={OTHER_IMAGES.linkedInLight}
                            />
                        </div>
                    </div>
                    <div className="insta-phone-container">
                        <div className="insta-container">
                            <Image
                                data={OTHER_IMAGES.InstaLight}
                            />
                        </div>
                        <div className="phone-container">
                            <p className="subtitle-md email-text">{TEXT_TO_DISPLAY.phone}</p>
                        </div>
                    </div>
                </div>
            </section> : null}
            <section className={`footer-secton-2 ${showGetInTouch ? "" : "inverted"}`}>
                <div className="container">
                    <div className="footer-main-2-section">
                        <div className="details-container">
                            <div className="dom-details-container">
                                <p className="subtitle-md">{TEXT_TO_DISPLAY.domfull}</p>
                                <div className="spacer-24"></div>
                                <p className="subtitle-sm">{TEXT_TO_DISPLAY.soft}</p>
                                <div className="spacer-24"></div>
                                <p className="text-small">{TEXT_TO_DISPLAY.address}</p>
                                <div className="spacer-24"></div>
                                <p className="text-small">{TEXT_TO_DISPLAY.email}</p>
                                <div className="spacer-24"></div>
                            </div>
                            <div className="contact-container">
                                <div className="social-media-container">
                                    <div className="insta-container">
                                        <Image
                                            data={OTHER_IMAGES[showGetInTouch ? "InstaDark" : "InstaLight"]}
                                        />
                                    </div>
                                    <div className="linkedin-container">
                                        <Image
                                            data={OTHER_IMAGES[showGetInTouch ? "linkedInDark" : "linkedInLight"]}
                                        />
                                    </div>
                                </div>
                                <div className="get-in-touch-container">
                                    <Button
                                        text={TEXT_TO_DISPLAY.getIntouch}
                                        areaLabel="Get in touch"
                                        role="Get in touch"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="labels-container">
                            <Link href="/impressum">
                                <div className="label text-small">{TEXT_TO_DISPLAY.impressum}</div>
                            </Link>
                            <Link href="/datenschutz">
                                <div className="label text-small">{TEXT_TO_DISPLAY.data}</div>
                            </Link>
                            <Link href="/agb">
                                <div className="label text-small">{TEXT_TO_DISPLAY.AGB}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;