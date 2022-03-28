import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body::-webkit-scrollbar {
        width: .9rem;
        background-color: ${props => props.theme.colors.bgLight};
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.clrAccent};
    }

    
`;

export default GlobalStyle;