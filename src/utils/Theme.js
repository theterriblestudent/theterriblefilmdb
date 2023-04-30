import { css } from "styled-components";

const theme = {
    colors: {
        accent: "#c96d2a",
        dark_background: "#171717",
        light_background: "#202020",
        light_text: "#F4F4F4",
        dark_text: "#b8b8b8",
        light_button: "#505050",
    },
    font_stacks: {
        primary: "'Roboto', sans-serif",
        secondary: "'Barlow', sans-serif",
    },
    breakpoints: {
        tablet: "968px",
        mobile: "480px"
    },
    containers: {
        large:  css`
            width: 90%;
            max-width: 1800px;
            margin: 0 auto;
        `,
        small: css`
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
        `,
    }
};

export default theme;
