import { TEXT_TO_DISPLAY, VIDEO } from "@/utils/common/Constants";
import "./Who.scss";

const Who = ({ 

}) => {
    
    return (
        <section className="who-main-container">
            <div className="container">
                <div className="who-main-container-section">
                    <div className="who-title">
                        <h2 className="heading-h2 futura-bold">{TEXT_TO_DISPLAY.who}</h2>
                    </div>
                    <div className="who-detail-container">
                        <p className="paragraph">{TEXT_TO_DISPLAY.whoparagraph1}</p>
                        <p className="paragraph">{ TEXT_TO_DISPLAY.whoparagraph2 }</p>
                    </div>
                    <div className="team-video-container">
                        <video autoPlay loop muted className="background-video">
                            <source src={VIDEO.team} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Who;