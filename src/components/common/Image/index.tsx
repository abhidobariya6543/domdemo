import { ImageProps } from "./types"

const Image = ({
    data,
    className = ""
}: ImageProps) => {
    return (
        <img src={data?.src} alt={data?.alt} className={`image-container ${className}`} />
    )
}

export default Image;