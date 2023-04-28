import { css } from "styled-components";

const theme = {
    colors: {
        clrAccent: "#c96d2a",
        bgDark: "#171717",
        bgLight: "#202020",
        textLight: "#F4F4F4",
        textDark: "#b8b8b8",
        lightButton: "#505050",
    },
    fontStacks: {
        primaryFontStack: "'Roboto', sans-serif",
        secondaryFontStack: "'Barlow', sans-serif",
    },
    breakPoints: {
        tablet: "968px",
        mobile: "480px"
    },
    containers: {
        lg:  css`
            width: 90%;
            max-width: 1800px;
            margin: 0 auto;
        `,
        sm: css`
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
        `,
    }
};

export default theme;
