import LogoDark from "@/components/common/LogoDark";
import DynamicPage from "@/components/common/DynamicPage";
import { PageContent } from "@/components/common/DynamicPage/types";
import Footer from "@/components/common/Footer"
import datenschutz from "@/utils/common/data/datenschutz.json";
import Link from "next/link";

const Datenschutz = () => {
    const pageContent: PageContent = datenschutz;
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
            </section>
            <Footer/>
        </>
    )
}

export default Datenschutz