import Image from "../Image";
import { DTRMProps } from "./types"
import { useAppData } from "@/utils/appContext/AppContext";
import "./DTRM.scss"

const DTRM = ({
    data,
    index = 0
}: DTRMProps) => {

    const {
        activePagination
    } = useAppData();
    
    return (
        <div
            className={`content-section ${data?.key === "transform" || data?.key === "maintain" ? "reverse-content" : ""}`}
        >
            <div className="image-content">
                <Image
                    data={index === activePagination ? data?.image?.active : data?.image?.default}
                />
            </div>
            <div className="data-content">
                <div className="title futura-bold">
                    <p className="subtitle-md">
                        {data?.title}
                    </p>
                </div>
                <p className="sub-text">
                    {data?.text}
                </p>
            </div>
        </div>
    )
}

export default DTRM;