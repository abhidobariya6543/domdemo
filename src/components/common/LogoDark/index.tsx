import { DOM_IMAGES } from "@/utils/common/Constants";
import Image from "../Image";
import "./DomLogo.scss";

const LogoDark = ({ }) => {
    return (
        <div className="logo-container">
            <div className="dom-txt-logo">
                <Image
                    data={DOM_IMAGES.domDark}
                />
            </div>
            <div className="dom-logo">
                <Image
                    data={DOM_IMAGES.logoDark}
                />
            </div>
        </div>
    )
}

export default LogoDark;