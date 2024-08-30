import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;

    -webkit-font-smoothing: antialiased;

    --ff-title: "Baloo 2", sans-serif;
    --ff-text: "Roboto", sans-serif;

    --title-xl: 800 4.8rem/1.3 var(--ff-title);
    --title-lg: 800 3.2rem/1.3 var(--ff-title);
    --title-md: 800 2.4rem/1.3 var(--ff-title);
    --title-sm: 700 2rem/1.3 var(--ff-title);
    --title-xs: 700 1.8rem/1.3 var(--ff-title);

    --text-lg: 400 2rem/1.3 var(--ff-text);
    --text-md: 400 1.6rem/1.3 var(--ff-text);
    --text-sm: 400 1.4rem/1.3 var(--ff-text);
    --text-xs: 700 1.2rem/1.3 var(--ff-text);

    --tag: 700 1rem/1.3 var(--ff-text);
    --button-lg: 700 1.4rem/1.6 var(--ff-text); 
    --button-md: 400 1.2rem/1.6 var(--ff-text); 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
  }
`;
