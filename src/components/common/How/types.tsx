import { ImageData } from "../Image/types";

export type DTRMData = {
    image: {
        default: ImageData;
        active: ImageData;
    }
    title: string,
    text: string;
    key: string;
}