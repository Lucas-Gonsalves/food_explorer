import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  };

  
  :root {
    font-size: 62.5%;
  };


  body, button, input {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: ${({ theme }) => theme.FONT_SIZE.REGULAR};
    font-family: ${({ theme }) => theme.FONT_FAMILY.MAIN_TEXT};
    font-weight: 400;
  };

  h1 {
    font-family: ${({ theme }) => theme.FONT_FAMILY.MAIN_TITLE};
  };

  body {
    
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  };

  button {
    transition: .5s;
  }

  button:hover {
    transition: .5s;
    filter: brightness(0.9);
  };
`;