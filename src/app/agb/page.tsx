import Button from "@/components/common/ButtonPrimary";
import LogoDark from "@/components/common/LogoDark";
import DynamicPage from "@/components/common/DynamicPage";
import { PageContent } from "@/components/common/DynamicPage/types";
import Footer from "@/components/common/Footer"
import { TEXT_TO_DISPLAY } from "@/utils/common/Constants";
import agbContent from "@/utils/common/data/agb.json";
import Link from "next/link";

const AGB = () => {
    const pageContent: PageContent = agbContent;
    return (
        <>
            <header className="content-section-header">
                <Link href={"/"}>
                    <LogoDark />
                </Link>
                <div className="liner"></div>
            </header>
            <section className="content-data-section">
                <DynamicPage
                    content={pageContent}
                />
                <div className="download-container">
                    <Button
                        className="link-button"
                        text={TEXT_TO_DISPLAY.downloadDOMAGB}
                    />
                    <div className="spacer-48"/>
                    <Button
                        className="link-button"
                        text={TEXT_TO_DISPLAY.downloadHostingAGB}
                    />
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default AGB