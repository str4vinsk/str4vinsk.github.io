import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        scroll-behavior: smooth;
        background: var(--default-background);
        color: white;
    }

    *, button, input {
        font-family: 'Inter', sans-serif;
        outline: none;
    }

    :root {
        --primary: #F62FA2;
        --secondary: #CC28D4;
        --tertiary: #B339EB;
        --quaternay: #6F28D4;
        --quinary: #4A2FF6;
        --default-background: #1D1D1D;
        --branch-background: #181818;
        --card: #282C35; 
        --skill-card: #3F3D56;
        --gray: #D2D2D2;
        --text: rgb(195, 195, 207);

    }
`;
