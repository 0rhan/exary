import React from "react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "@fontsource/pt-sans";

export default () => {
  return <GlobalStyle />;
};

const GlobalStyle = createGlobalStyle`
      ${normalize}
        html {
          height: 100%;
        }
        body {
          height: 100%;
          background-color: ${({ theme }) => theme.light.bg};
          color: ${({ theme }) => theme.light.fg};
          font-family: "PT Sans";
          font-size: 14px;
          line-height: 1.5;
          appearance: none;
        }
        #root {
          height: 100%;
          background-color: inherit;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
  `;
