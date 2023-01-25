import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: background-color 0.4s, color 0.2s;
    }

    html {
        scroll-behavior: smooth;

    ::-webkit-scrollbar {
    width: 10px;
    }


    ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme["background"]}; 
    }
    
    ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme["pink"]}; 
    border-radius: 999px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme["gray-200"]}; 
    }
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
`;
