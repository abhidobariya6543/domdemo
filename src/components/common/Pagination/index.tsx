import { PaginationProps } from "./types";
import { Dot } from "@/utils/common/Svg";
import "./Pagination.scss";

const Pagination = ({
    active,
    handlePaginationClick
 }: PaginationProps) => {
    return (
        <div className="pagination-container">
            {Array.from({ length: 4 }).map((dot, index) => (
                <div
                    key={index}
                    className={`dot-container ${active === index ?  "active-pagination" : ""}`}
                    onClick={() => handlePaginationClick && handlePaginationClick(index)}
                >
                    <Dot />
                </div>
            ))}
        </div>
    )
}

export default Pagination;