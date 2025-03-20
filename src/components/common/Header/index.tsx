import { HeaderProps } from "./types";
import { HOMEPAGES } from "@/utils/common/Constants";
import DomLogo from "../LogoPrimary";
import Pagination from "../Pagination";
import { useAppData } from "@/utils/appContext/AppContext";
import "./Header.scss";
// import { useEffect, useState } from "react";
import { useEffect } from "react";
import BoxHeader from "./BoxHeader";
import BulletsHeader from "./BulletsHeader";
import CodeHeader from "./CodeHeader";
import TextHeader from "./TextHeader";

const Header = ({

}: HeaderProps) => {
    const {
        activePagination,
        setActivePagination
    } = useAppData();

    // const [loader, setLoader] = useState(false)

    useEffect(() => {
        console.log(activePagination)
        // setLoader(true);
        // setTimeout(() => {
        //     setLoader(false);
        // }, 1)
    }, [activePagination])

    // // const handleUpdateHeader = (index: number) => {
    // //     if (index) {
    // //         setActivePagination(index)
    // //     }
    // }

    return (
        <header className="header-container">
            <div className="logo">
                <DomLogo />
            </div>
            {(
                activePagination === 0 ?
                    <BoxHeader />
                    :
                    activePagination === 1 ?
                        <CodeHeader />
                        : activePagination === 2 ?
                            <BulletsHeader />
                            :
                            <TextHeader />
            )
            }
            {/* <div className="video-container">
                {!loader ? <video autoPlay loop muted className="background-video">
                    <source src={HOMEPAGES[activePagination || 0]?.src} type="video/mp4" />
                </video> : ""}
            </div> */}
            <div className="header-title-container">
                <h2 className="heading-h2">{HOMEPAGES[activePagination || 0]?.header}</h2>
                <h3 className="subtitle-lg">{HOMEPAGES[activePagination || 0]?.subHeader}</h3>
            </div>
            <div className="header-pagination-container">
                <Pagination active={activePagination} handlePaginationClick={setActivePagination} />
            </div>
        </header>
    )
}

export default Header;