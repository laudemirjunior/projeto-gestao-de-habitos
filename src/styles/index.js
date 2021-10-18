import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: none;
    font-family: 'Nunito', sans-serif;
  }
  .App {
      width: 100%;
      min-height: 100vh;
      min-width: 320px;
  }
  :root {
    --white: #ffffff;
    --black: #000000;
    --button: #F2A0AF;
    --background: #FD7FAA;
    --backgroundOpacity: #fd7faacc;
    --bar: #F2527D;
  }
  button, span, svg {
    cursor: pointer;
  }
  svg {
    font-size: 30px;
  }
  * {
    scrollbar-width: auto;
    scrollbar-color: #F2527D #ffffff;
  }

  *::-webkit-scrollbar {
    width: 15px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #F2527D;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  `;

export default GlobalStyle;
