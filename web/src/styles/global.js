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
    font-family: ${({ theme })};
    font-weight: 400;
  };


  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  };


  button:hover {
    transition: .5s;
    filter: brightness(0.9);
  };
`;