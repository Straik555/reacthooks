
import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
    desktop: "1170px",
    tablet: "992px",
    mobile: "768px"
});

export default {
    colors: {
        titleLogo: '#179E00',
        titleMenu: '#AAAAAA',
        titleMenuActive: '#000000',
        titleMenuHover: '#4F4F4F',
        titleWhite: '#ffffff',
        errorMessages: '#B30F0F',
    }
}