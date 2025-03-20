import { DTRMData } from "./types";
import { TEXT_TO_DISPLAY, DTRM_DATA } from "@/utils/common/Constants";
import DTRM from "../DTRM";
import "./How.scss";

const How = ({ 

}) => {
    
    return (
        <section className="how-main-container">
            <div className="container">
                <div className="how-main-container-section">
                    <div className="how-title-container">
                        <h2 className="heading-h2">
                            {TEXT_TO_DISPLAY.userKnow}
                        </h2>
                    </div>
                    <div className="how-details-container">
                        {
                            DTRM_DATA.map((data?: DTRMData, index?: number) => (
                                <div key={data?.key}>
                                    <DTRM
                                        data={data}
                                        index={index}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default How;