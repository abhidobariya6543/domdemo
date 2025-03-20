
export type ImageData = {
    src?: string;
    alt?: string;
}

export type ImageProps = {
    data: ImageData | undefined;
    className?: string;
}