import { DOM_IMAGES } from "@/utils/common/Constants";
import Image from "../Image";
import "./LogoPrimary.scss";

const LogoPrimary = ({ }) => {
    return (
        <div className="logo-container">
            <div className="dom-txt-logo">
                <Image
                    data={DOM_IMAGES.domLight}
                />
            </div>
            <div className="dom-logo">
                <Image
                    data={DOM_IMAGES.logoLight}
                />
            </div>
        </div>
    )
}

export default LogoPrimary;