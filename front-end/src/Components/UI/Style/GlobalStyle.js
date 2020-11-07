import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default () => {
  const [height, setHeight] = useState(window.innerHeight);

  const getHeight = () => {
    setHeight(window.innerHeight);
    console.log("triggered");
  };

  window.addEventListener("resize", getHeight);

  return <GlobalStyle height={height}/>;
};


  const GlobalStyle = createGlobalStyle`
      ${normalize}
        body {
          background-color: ${({ theme }) => theme.light.bg};
          color: ${({ theme }) => theme.light.fg};
        }
        #root {
          height: ${({height})=> height}px;
          background-color: inherit;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
  `;
