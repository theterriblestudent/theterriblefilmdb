import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${props => props.theme.colors.dark_background};
    }
    body::-webkit-scrollbar {
        width: .9rem;
        background-color: ${props => props.theme.colors.light_background};
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.accent};
    }

    #now-showing-section {
        padding-top: 50px;
        padding-bottom: 30px;
        margin-top: 40px;
        position: relative;
    }
    .now-showing-bg-image {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: opacity 0.5s;
    }

    .now-showing-bg-overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        width: 100%;
        background: rgba( 43, 42, 42, 0.5 );
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
    }

    .transparent {opacity: 0;}
`;

export default GlobalStyle;
