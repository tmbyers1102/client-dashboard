import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #eee;
    }

    #root {
        width: 95%;
        margin: 0 auto;
        marginTop: 10%;
    }
`;