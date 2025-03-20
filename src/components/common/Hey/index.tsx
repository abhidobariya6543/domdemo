import { TEXT_TO_DISPLAY } from "@/utils/common/Constants";
import "./Hey.scss";

const Hey = ({

}) => {

    return (
        <section className="hey-main-container">
            <div className="">

                <div className="hey-section">
                    <h1 className="heading-h1 futura-bold">{TEXT_TO_DISPLAY.hey}</h1>
                </div>
                <div className="paragraph-section">
                    <p className="paragraph">{TEXT_TO_DISPLAY.paragraph1}</p>
                    <p className="paragraph">{TEXT_TO_DISPLAY.paragraph2}</p>
                    <p className="paragraph">{TEXT_TO_DISPLAY.paragraph3}</p>
                </div>
            </div>
        </section>
    )
}

export default Hey;