import LogoDark from "@/components/common/LogoDark";
import DynamicPage from "@/components/common/DynamicPage";
import { PageContent } from "@/components/common/DynamicPage/types";
import Footer from "@/components/common/Footer"
import impressumContent from "@/utils/common/data/impressum.json";
import Link from "next/link";

const Impressum = () => {
    const pageContent: PageContent = impressumContent;
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

export default Impressum